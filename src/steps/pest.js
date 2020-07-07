import {run} from '../run'

export default {
  message: 'Installing the Pest testing framework',
  steps: [
    async () => run(
      'composer require --dev phpunit/phpunit:"^9.0" --update-with-dependencies -n'
    ),
    async () => run(
      'composer require --dev nunomaduro/collision:"^5.0" --update-with-dependencies -n'
    ),
    async () => run(
      'composer require --dev pestphp/pest --update-with-dependencies -n'
    ),
    async () => run(
      'composer require pestphp/pest-plugin-laravel --dev'
    ),
    async () => run(
      'git add . && git commit -a --no-gpg-sign -m "Add Pest test framework"'
    )
  ]
}
