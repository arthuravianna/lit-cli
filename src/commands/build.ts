import {Command, Flags} from '@oclif/core'
import esbuild from 'esbuild'
import {polyfillNode} from '@lit-protocol/esbuild-plugin-polyfill-node'
import ora from 'ora'

import {createBundledAbilityFile, wrapIIFEInStringPlugin} from '../utils/build.js'



export default class Build extends Command {
  static override description = 'build and test the lit project'
  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]
  static override flags = {
    // flag with no value (-f, --force)
    noTest: Flags.boolean({name: 'no-test', description: 'skip e2e tests'}),
  }

  public async run(): Promise<void> {
    const {flags} = await this.parse(Build)

    const spinner = ora("Building Vincent project...").start();
    try {
      const result = await esbuild.build({
        tsconfig: './tsconfig.json',
        entryPoints: ['./src/lib/lit-action.ts'],
        bundle: true,
        minify: false,
        sourcemap: false,
        treeShaking: true,
        metafile: true,
        outdir: './src/generated/',
        plugins: [
          polyfillNode({
            globals: {
              buffer: true,
              process: true,
            },
            polyfills: {
              crypto: true,
              http: true,
              https: true,
              stream: true,
              zlib: true,
              url: true,
              util: true,
            },
          }),
          wrapIIFEInStringPlugin,
          createBundledAbilityFile,
        ],
        platform: 'browser',
        write: false,
      });

      result.outputFiles?.forEach((file) => {
        const bytes = file.text.length;
        const mbInBinary = (bytes / (1024 * 1024)).toFixed(4);
        const mbInDecimal = (bytes / 1_000_000).toFixed(4);

        console.log(
          `✅ ${file.path.split('/').pop()}\n- ${mbInDecimal} MB (in decimal)\n- ${mbInBinary} MB (in binary)`,
        );
      });

      spinner.succeed("Vincent project built successfully");

      if (flags.noTest) {
        this.log('Skipping tests as per --no-test flag');
        return;
      }
    } catch (error) {
      spinner.fail(
        error instanceof Error ? 
            `Error building project: ${error.message}`
          : 
            String(error),
      );
    }
  }
}
