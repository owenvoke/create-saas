import {run} from '../run'

export default {
  message: 'Installing the Laravel Code Style',
  steps: [
    async () => run(
      'composer require --dev matt-allan/laravel-code-style -n'
    ),
    async () => run(
      'php artisan vendor:publish --provider="MattAllan\\LaravelCodeStyle\\ServiceProvider"'
    ),
    async () => run(
      'echo ".php_cs.cache" >> .gitignore'
    ),
    async () => run(
      'git add . && git commit -a --no-gpg-sign -m "Add Laravel Code Style"'
    )
  ]
}
