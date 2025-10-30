import {Args, Command, Flags} from '@oclif/core'
import path from 'path';
import ipfsOnlyHash from 'ipfs-only-hash';
import fs from 'fs';
import { isCidPinned, uploadToIPFS } from '../utils/deploy.js';
import { prompt } from '../utils/lib.js';
import * as dotenv from 'dotenv';
import { createRequire } from 'module';
import ora from 'ora';
import { execSync } from 'child_process';

const require = createRequire(import.meta.url);

export default class Deploy extends Command {
  static override args = {}
  static override description = 'Deploy the bundled Lit Action to IPFS (via Pinata) and NPM'
  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]
  static override flags = {
    envFile: Flags.string({char: 'f', name: 'env-file', description: 'use .env file', default: ".env", required: true}),
    pinataJwt: Flags.string({char: 'j', name: 'pinata-jwt', description: 'Pinata JWT token (overrides .env file)'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Deploy)
    const PINATA_JWT = flags.pinataJwt || process.env.PINATA_JWT || await prompt('Insert your Pinata JWT token');

    const spinner = ora("Deploying Vincent project to IPFS...").start();
    try {
      dotenv.config({ path: flags.envFile });

      if (!PINATA_JWT) {
        throw new Error('Missing PINATA_JWT');
      }
      
      const outputFile = 'lit-action.js';

      // Use absolute path from project root
      const projectRoot = process.cwd();
      const generatedDir = path.join(projectRoot, 'src', 'generated');
      const filePath = path.join(generatedDir, outputFile);
      
      if (!fs.existsSync(filePath)) {
        throw new Error(
          `Bundled Lit Action code string not found at ${filePath}. Please run pnpm build first.`,
        );
      }
      
      // Use absolute path for require
      const absoluteFilePath = path.resolve(filePath);
      const litActionCodeString = require(absoluteFilePath);

      // First compute the IPFS CID locally for the code string
      const expectedCid = await ipfsOnlyHash.of(litActionCodeString.code);

      // Check if this CID is already pinned on Pinata
      const alreadyPinned = await isCidPinned(expectedCid, PINATA_JWT);
      if (alreadyPinned) {
        spinner.succeed(`IPFS CID already pinned on Pinata: ${expectedCid}. Skipping upload.`);
      } else {
        spinner.info(`Deploying ${outputFile} to IPFS...`);
        const ipfsCid = await uploadToIPFS(outputFile, litActionCodeString.code, PINATA_JWT);

        const cidJsonPath = path.join(generatedDir, 'vincent-ability-metadata.json');
        const metadata = fs.readFileSync(cidJsonPath, 'utf-8');
        const { ipfsCid: metadataIpfsCid } = JSON.parse(metadata);
        if (ipfsCid !== metadataIpfsCid) {
          throw new Error(
            `IPFS CID mismatch in vincent-ability-metadata.json. Expected: ${metadataIpfsCid}, got: ${ipfsCid}`,
          );
        }
        spinner.succeed(`Deployed ${outputFile} to IPFS: ${ipfsCid}`);
      }

      spinner.clear();
      spinner.start('Publishing Lit Action to NPM...');
      execSync('npm publish --access public');
      spinner.succeed('Successfully published Lit Action to NPM');
    } catch (error) {
      spinner.fail(
        error instanceof Error ? 
            `Error deploying project: ${error.message}`
          : 
            String(error),
      );
    }
  }
}
