export class CLIHandler {
  constructor(commands) {
    this.commands = commands;
  }

  async handle() {
    if (process.argv.length < 3) {
      this.showUsage();
    }

    const cmdName = process.argv[2];
    const cmd = this.commands.find((cmd) => cmd.name === cmdName);
    if (!cmd) {
      this.showUsage();
    }

    const ok = await cmd.handle();
    if (!ok) {
      this.showUsage();
    }
  }

  showUsage() {
    console.log("Uso: node src/index.js [comando]");
    console.log("Comandos:");
    for (let command of this.commands) {
      console.log(`    ${command.name} ${command.usage()}`);
    }
    process.exit(1);
  }
}
