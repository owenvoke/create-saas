import Listr from 'listr'

const execa = require('execa')

export default {
  title: 'Installing the Pest testing framework',
  task: () => {
    return new Listr([
      {
        title: 'Composer: require --dev phpunit/phpunit:^9.0',
        task: async () => await execa.command('composer require --dev phpunit/phpunit:^9.0 --update-with-dependencies -n')
      },
      {
        title: 'Composer: require --dev nunomaduro/collision:^5.0',
        task: async () => await execa.command('composer require --dev nunomaduro/collision:^5.0 --update-with-dependencies -n')
      },
      {
        title: 'Composer: require --dev pestphp/pest',
        task: async () => await execa.command('composer require --dev pestphp/pest --update-with-dependencies -n')
      },
      {
        title: 'Composer: require --dev pestphp/pest-plugin-laravel',
        task: async () => await execa.command('composer require --dev pestphp/pest-plugin-laravel -n')
      },
      {
        title: 'Git: add .',
        task: async () => await execa.command('git add .')
      },
      {
        title: 'Git: commit "Add Pest test framework"',
        task: async () => await execa('git', ['commit', '-a', '--no-gpg-sign', '-m', 'Add Pest test framework'])
      }
    ])
  }
}
