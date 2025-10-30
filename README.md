lit-cli
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/lit-cli.svg)](https://npmjs.org/package/lit-cli)
[![Downloads/week](https://img.shields.io/npm/dw/lit-cli.svg)](https://npmjs.org/package/lit-cli)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g lit-cli
$ lit COMMAND
running command...
$ lit (--version)
lit-cli/0.0.0 linux-x64 node-v22.20.0
$ lit --help [COMMAND]
USAGE
  $ lit COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`lit hello PERSON`](#lit-hello-person)
* [`lit hello world`](#lit-hello-world)
* [`lit help [COMMAND]`](#lit-help-command)
* [`lit plugins`](#lit-plugins)
* [`lit plugins add PLUGIN`](#lit-plugins-add-plugin)
* [`lit plugins:inspect PLUGIN...`](#lit-pluginsinspect-plugin)
* [`lit plugins install PLUGIN`](#lit-plugins-install-plugin)
* [`lit plugins link PATH`](#lit-plugins-link-path)
* [`lit plugins remove [PLUGIN]`](#lit-plugins-remove-plugin)
* [`lit plugins reset`](#lit-plugins-reset)
* [`lit plugins uninstall [PLUGIN]`](#lit-plugins-uninstall-plugin)
* [`lit plugins unlink [PLUGIN]`](#lit-plugins-unlink-plugin)
* [`lit plugins update`](#lit-plugins-update)

## `lit hello PERSON`

Say hello

```
USAGE
  $ lit hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ lit hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/lit/lit-cli/blob/v0.0.0/src/commands/hello/index.ts)_

## `lit hello world`

Say hello world

```
USAGE
  $ lit hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ lit hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/lit/lit-cli/blob/v0.0.0/src/commands/hello/world.ts)_

## `lit help [COMMAND]`

Display help for lit.

```
USAGE
  $ lit help [COMMAND...] [-n]

ARGUMENTS
  [COMMAND...]  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for lit.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.34/src/commands/help.ts)_

## `lit plugins`

List installed plugins.

```
USAGE
  $ lit plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ lit plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.51/src/commands/plugins/index.ts)_

## `lit plugins add PLUGIN`

Installs a plugin into lit.

```
USAGE
  $ lit plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into lit.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the LIT_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the LIT_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ lit plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ lit plugins add myplugin

  Install a plugin from a github url.

    $ lit plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ lit plugins add someuser/someplugin
```

## `lit plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ lit plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ lit plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.51/src/commands/plugins/inspect.ts)_

## `lit plugins install PLUGIN`

Installs a plugin into lit.

```
USAGE
  $ lit plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into lit.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the LIT_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the LIT_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ lit plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ lit plugins install myplugin

  Install a plugin from a github url.

    $ lit plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ lit plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.51/src/commands/plugins/install.ts)_

## `lit plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ lit plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ lit plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.51/src/commands/plugins/link.ts)_

## `lit plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ lit plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ lit plugins unlink
  $ lit plugins remove

EXAMPLES
  $ lit plugins remove myplugin
```

## `lit plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ lit plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.51/src/commands/plugins/reset.ts)_

## `lit plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ lit plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ lit plugins unlink
  $ lit plugins remove

EXAMPLES
  $ lit plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.51/src/commands/plugins/uninstall.ts)_

## `lit plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ lit plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ lit plugins unlink
  $ lit plugins remove

EXAMPLES
  $ lit plugins unlink myplugin
```

## `lit plugins update`

Update installed plugins.

```
USAGE
  $ lit plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.51/src/commands/plugins/update.ts)_
<!-- commandsstop -->
