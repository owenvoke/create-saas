import { exec } from 'child_process'
import chalk from 'chalk'
const log = console.log;

export async function run (command) {
  await new Promise(function (resolve, reject) {
    exec(command, function (err, stdout, stderr) {
      if (err) {
        return reject(err)
      }

      resolve(stderr, stdout)
    })
  })
}

export async function execute (steps) {
  for (const stepName of steps) {
    const step = require(`./steps/${stepName}`).default

    log(chalk.blue(step.message))

    for (const call of step.steps) {
      await call()
    }
  }
}
