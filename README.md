lit-cli
=================

A command-line interface for building, deploying, and managing Lit Protocol projects. This CLI helps developers create Vincent Abilities and Vincent Policies, build them for deployment, and deploy them to IPFS.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/lit-cli.svg)](https://npmjs.org/package/lit-cli)
[![Downloads/week](https://img.shields.io/npm/dw/lit-cli.svg)](https://npmjs.org/package/lit-cli)


<!-- toc -->
* [Usage](#usage)
* [What is lit-cli?](#what-is-lit-cli)
* [Typical Workflow](#typical-workflow)
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

# What is lit-cli?

The Lit CLI is a developer tool for building and deploying projects on the Lit Protocol network. It provides functionality to:

- **Create Vincent Abilities**: Initialize new Vincent Ability projects from templates
- **Build Projects**: Bundle and compile Lit Protocol projects for deployment
- **Deploy to IPFS**: Upload compiled Lit Actions to IPFS via Pinata with automatic CID generation and verification

# Typical Workflow

1. **Create a new project**:
   ```bash
   lit create vincent-ability my-awesome-ability
   ```

2. **Build your project**:
   ```bash
   cd my-awesome-ability
   lit build
   ```

3. **Deploy to IPFS**:
   ```bash
   lit deploy --pinata-jwt your-jwt-token
   ```

The CLI handles template downloading, project scaffolding, esbuild compilation, IPFS CID generation, and deployment to Pinata automatically.

# Commands
<!-- commands -->
* [`lit build`](#lit-build)
* [`lit create vincent-ability PROJECT`](#lit-create-vincent-ability-project)
* [`lit deploy`](#lit-deploy)
* [`lit help [COMMAND]`](#lit-help-command)

## `lit build`

Build and test the Lit project

```
USAGE
  $ lit build

DESCRIPTION
  Build and test the lit project

EXAMPLES
  $ lit build
```

_See code: [src/commands/build.ts](https://github.com/arthuravianna/lit-cli/blob/main/src/commands/build.ts)_

## `lit create vincent-ability PROJECT`

Initialize a project template to create a Vincent ability

```
USAGE
  $ lit create vincent-ability PROJECT [--npm_package <value>] [--description <value>]

ARGUMENTS
  PROJECT  project name

FLAGS
  -d, --description=<value>   Vincent Ability Description
  -n, --npm_package=<value>   Vincent Ability npm package name

DESCRIPTION
  Initialize a project template to create a Vincent ability

EXAMPLES
  $ lit create vincent-ability my-ability
  $ lit create vincent-ability my-ability --npm_package @myorg/my-ability --description "My custom Vincent ability"
```

_See code: [src/commands/create/vincent-policy.ts](https://github.com/arthuravianna/lit-cli/blob/main/src/commands/create/vincent-policy.ts)_

## `lit deploy`

Deploy the bundled Lit Action to IPFS (via Pinata) and NPM

```
USAGE
  $ lit deploy [-f <value>] [-j <value>]

FLAGS
  -f, --env-file=<value>     [default: .env] use .env file
  -j, --pinata-jwt=<value>   Pinata JWT token (overrides .env file)

DESCRIPTION
  Deploy the bundled Lit Action to IPFS (via Pinata) and NPM

EXAMPLES
  $ lit deploy
  $ lit deploy --pinata-jwt your-jwt-token
  $ lit deploy --env-file .env.production
```

_See code: [src/commands/deploy.ts](https://github.com/arthuravianna/lit-cli/blob/main/src/commands/deploy.ts)_

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


<!-- commandsstop -->
