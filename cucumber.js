module.exports = {
  default: [
    `--format ${
      process.env.CI || !process.stdout.isTTY ? "progress" : "progress-bar"
    }`,
    "--require ./features/step_definitions/*.ts",
    "--require ./features/support/*.ts",
    "--require-module ts-node/register",
    "--publish-quiet",
    `--format-options '{"snippetInterface": "synchronous","theme":{"feature keyword":["magenta","bold"],"rule keyword":["magenta","bold"],"scenario keyword":["magenta","bold"],"step keyword":["blue","bold"],"step text":["green"],"step status":["red"]}}'`,
  ].join(" "),
}
