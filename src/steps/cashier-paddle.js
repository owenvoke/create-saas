import Listr from 'listr'

const execa = require('execa')

export default {
  title: 'Installing Cashier Paddle',
  task: () => {
    return new Listr([
      {
        title: 'Composer: require laravel/cashier-paddle',
        task: async () => await execa.command('composer require laravel/cashier-paddle -n')
      },
      {
        title: 'Git: add .',
        task: async () => await execa.command('git add .')
      },
      {
        title: 'Git: commit "Add Cashier Paddle"',
        task: async () => await execa('git', ['commit', '-a', '--no-gpg-sign', '-m', 'feat(composer): add Cashier Paddle'])
      }
    ])
  }
}
