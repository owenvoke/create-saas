import {run} from '../run'

export default {
  message: 'Installing Laravel IDE helper',
  steps: [
    async () => run(
      'composer require --dev barryvdh/laravel-ide-helper -n'
    ),
    async () => run(
      'git add . && git commit -a --no-gpg-sign -m "Add Laravel IDE helper"'
    )
  ]
}
