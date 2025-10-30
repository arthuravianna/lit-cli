import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('create:vincent-policy', () => {
  it('runs create:vincent-policy cmd', async () => {
    const {stdout} = await runCommand('create:vincent-policy')
    expect(stdout).to.contain('hello world')
  })

  it('runs create:vincent-policy --name oclif', async () => {
    const {stdout} = await runCommand('create:vincent-policy --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
