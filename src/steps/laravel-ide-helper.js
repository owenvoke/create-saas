import Listr from 'listr'

const execa = require('execa')

export default {
  title: 'Installing Laravel IDE helper',
  task: () => {
    return new Listr([
      {
        title: 'Composer: require --dev barryvdh/laravel-ide-helper',
        task: async () => await execa.command('composer require --dev barryvdh/laravel-ide-helper -n')
      },
      {
        title: 'Git: add .',
        task: async () => await execa.command('git add .')
      },
      {
        title: 'Git: commit "Add Laravel IDE helper"',
        task: async () => await execa('git', ['commit', '-a', '--no-gpg-sign', '-m', 'Add Laravel IDE helper'])
      }
    ])
  }
}
