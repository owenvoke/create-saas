import Listr from 'listr'

const execa = require('execa')

export default {
  title: 'Installing plugins for Pest',
  task: () => {
    return new Listr([
      {
        title: 'Composer: require --dev pestphp/pest-plugin-livewire',
        task: async () => await execa.command('composer require --dev pestphp/pest-plugin-livewire -n')
      },
      {
        title: 'Git: add .',
        task: async () => await execa.command('git add .')
      },
      {
        title: 'Git: commit "Add Pest plugins"',
        task: async () => await execa('git', ['commit', '-a', '--no-gpg-sign', '-m', 'Add Pest plugins'])
      }
    ])
  }
}
