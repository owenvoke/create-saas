import {run} from '../run'

export default {
  message: 'Updating test suite to use Pest syntax',
  steps: [
    async () => run(
      'curl -Ls https://git.io/tall-pest-adapter | git apply'
    ),
    async () => run(
      'git add . && git commit -a --no-gpg-sign -m "Update all tests to use Pest syntax"'
    )
  ]
}
