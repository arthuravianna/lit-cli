import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('create:vincent-ability', () => {
  it('runs create:vincent-ability cmd', async () => {
    const {stdout} = await runCommand('create:vincent-ability')
    expect(stdout).to.contain('hello world')
  })

  it('runs create:vincent-ability --name oclif', async () => {
    const {stdout} = await runCommand('create:vincent-ability --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
