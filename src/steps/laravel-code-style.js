import Listr from 'listr'

const execa = require('execa')

export default {
  title: 'Installing the Laravel Code Style',
  task: () => {
    return new Listr([
      {
        title: 'Composer: require --dev matt-allan/laravel-code-style',
        task: async () => await execa.command('composer require --dev matt-allan/laravel-code-style -n'),
      },
      {
        title: 'Artisan: vendor:publish --provider="MattAllan\\LaravelCodeStyle\\ServiceProvider"',
        task: async () => await execa.command('composer vendor:publish --provider="MattAllan\\LaravelCodeStyle\\ServiceProvider" -n'),
      },
      {
        title: 'Gitignore: add .php_cs.cache file',
        task: async () => await execa.command('echo ".php_cs.cache" >> .gitignore'),
      },
      {
        title: 'Git: add .',
        task: async () => await execa.command('git add .'),
      },
      {
        title: 'Git: commit "Add Laravel code style"',
        task: async () => await execa('git', ['commit', '-a', '--no-gpg-sign', '-m', 'Add Laravel Code Style']),
      }
    ])
  }
}
