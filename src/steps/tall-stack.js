import Listr from 'listr'

const execa = require('execa')

export default {
  title: 'Installing the TALL stack preset',
  task: () => {
    return new Listr([
      {
        title: 'Composer: require livewire/livewire laravel-frontend-presets/tall',
        task: async () => await execa.command('composer require livewire/livewire laravel-frontend-presets/tall -n'),
      },
      {
        title: 'Artisan: ui tall --auth',
        task: async () => await execa.command('php artisan ui tall --auth'),
      },
      {
        title: 'Composer: remove laravel-frontend-presets/tall',
        task: async () => await execa.command('composer remove laravel-frontend-presets/tall -n'),
      },
      {
        title: 'Git: add .',
        task: async () => await execa.command('git add .'),
      },
      {
        title: 'Git: commit "Add TALL stack preset"',
        task: async () => await execa('git', ['commit', '-a', '--no-gpg-sign', '-m', 'Add TALL stack preset']),
      }
    ])
  }
}
