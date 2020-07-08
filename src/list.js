import Listr from "listr"

const steps = [
  'tall-stack',
  'pest',
  'tall-stack-pest-adapter',
  'laravel-code-style',
  'blade-fontawesome',
  'laravel-ide-helper',
  'cashier-paddle',
]


let tasks = []

for (const stepName of steps) {
  tasks.push(require(`./steps/${stepName}`).default)
}

const list = new Listr(tasks)

export default list
