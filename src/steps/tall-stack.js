import {run} from '../run'

export default {
  message: 'Installing the TALL stack preset',
  steps: [
    async () => run(
      'composer require livewire/livewire laravel-frontend-presets/tall -n'
    ),
    async () => run(
      'php artisan ui tall --auth'
    ),
    async () => run(
      'composer remove laravel-frontend-presets/tall -n'
    ),
    async () => run(
      'git add . && git commit -a --no-gpg-sign -m "Add TALL stack preset"'
    )
  ]
}
