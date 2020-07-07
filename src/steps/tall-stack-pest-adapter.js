import Listr from 'listr'

const execa = require('execa')

export default {
  title: 'Updating test suite to use Pest syntax',
  task: () => {
    return new Listr([
      {
        title: 'Curl and Git apply: https://git.io/tall-pest-adapter',
        task: async () => {
          let patchContents = execa.command('curl -Ls https://git.io/tall-pest-adapter').stdout
          await execa.command('git apply -v', { input: patchContents })
        },
      },
      {
        title: 'Git: add .',
        task: async () => await execa.command('git add .'),
      },
      {
        title: 'Git: commit "Update all tests to use Pest syntax"',
        task: async () => await execa('git', ['commit', '-a', '--no-gpg-sign', '-m', 'Update all tests to use Pest syntax']),
      }
    ])
  }
}
