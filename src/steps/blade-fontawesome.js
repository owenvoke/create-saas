import Listr from 'listr'

const execa = require('execa')

export default {
  title: 'Installing Blade Icons and Blade Font Awesome',
  task: () => {
    return new Listr([
      {
        title: 'Composer: require --dev blade-ui-kit/blade-icons owenvoke/blade-fontawesome',
        task: async () => await execa.command('composer require blade-ui-kit/blade-icons owenvoke/blade-fontawesome -n')
      },
      {
        title: 'Git: add .',
        task: async () => await execa.command('git add .')
      },
      {
        title: 'Git: commit "Add Blade Font Awesome icons"',
        task: async () => await execa('git', ['commit', '-a', '--no-gpg-sign', '-m', 'Add Blade Font Awesome icons'])
      }
    ])
  }
}
