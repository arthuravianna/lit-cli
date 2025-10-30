import {Args, Command, Flags} from '@oclif/core'
import { downloadTemplate } from 'giget'
import ora from 'ora';
// The .js extension is required because of how Node.js with ES modules works, even when importing TypeScript files.
import { litProtocolProvider, prompt } from '../../utils/lib.js'
import fs from 'fs';

const TEMPLATE_NAME = 'lit:ability-template'

export default class CreateVincentAbility extends Command {
  static override args = {
    project: Args.string({description: 'project name', required: true}),
  }

  static override description = 'Initialize a project template to create a Vincent ability'
  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static override flags = {
    npm_package: Flags.string({char: 'n', description: 'Vincent Ability npm package name'}),
    description: Flags.string({char: 'd', description: 'Vincent Ability Description'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(CreateVincentAbility);

    const projectName = args.project;
    
    // Prompt for missing flags using stdin
    const projectDescription = flags.description || await prompt('Please enter a description for your Vincent Ability');
    const npmPackage = flags.npm_package || await prompt('What is your npm package name?');

    const spinner = ora("Initializing Vincent Ability project...").start();

    try {
      // 1) Download & unpack template (tar.gz) from somewhere
      const {dir} = await downloadTemplate(TEMPLATE_NAME, {
        dir: projectName,
        providers: { lit: litProtocolProvider },
      });

      // 2) Update package.json with project name and description
      const packageJson = JSON.parse(fs.readFileSync(`${dir}/package.json`, 'utf-8'));
      packageJson.name = npmPackage;
      packageJson.description = projectDescription;
      fs.writeFileSync(`${dir}/package.json`, JSON.stringify(packageJson, null, 2), 'utf-8');

      spinner.succeed(`Project created at: ${dir}`);

    } catch (error) {
      spinner.fail(
        error instanceof Error ? 
            `Error creating project: ${error.message}`
          : 
            String(error),
      );
    }
  }
}
