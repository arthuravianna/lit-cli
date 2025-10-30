import {Args, Command, Flags} from '@oclif/core'

export default class CreateVincentPolicy extends Command {
  static override args = {
    file: Args.string({description: 'project name'}),
  }
  static override description = 'Initialize a project template to create a Vincent policy'
  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]
  static override flags = {
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(CreateVincentPolicy)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from /home/arthur/web3/lit/lit-cli/src/commands/create/vincent-policy.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
