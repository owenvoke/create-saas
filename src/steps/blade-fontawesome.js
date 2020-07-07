import {run} from '../run'

export default {
  message: 'Installing Blade Icons and Blade Font Awesome',
  steps: [
    async () => run(
      'composer require blade-ui-kit/blade-icons owenvoke/blade-fontawesome -n'
    ),
    async () => run(
      'git add . && git commit -a --no-gpg-sign -m "Add Blade Font Awesome icons"'
    )
  ]
}
