const {commitWithinRange} = require("comitter")
const path = require("path")

async function main() {
  await commitWithinRange({
    rootDir: path.join(__dirname),
    fileDirectory: path.join(__dirname, "files"),
    minCommitsPerDay: 2,
    maxCommitsPerDay: 5,
    extensions: ["ts", "js", "py", "java", "cpp", "rb", "md", "asm", "php", "go", "rs", "c", "cs", "tsx", "jsx"]
  })
}

main();
