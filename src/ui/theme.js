import chalk from "chalk";

const line = (char = "=", size = 58) => char.repeat(size);

function printAppHeader() {
  console.log("");
  console.log(chalk.hex("#38bdf8").bold(line()));
  console.log(chalk.bgHex("#0f172a").hex("#f8fafc").bold("  QR CODE + PASSWORD TOOL  "));
  console.log(chalk.hex("#38bdf8").bold(line()));
  console.log(chalk.hex("#94a3b8")("Ferramenta de utilidades para terminal"));
  console.log("");
}

function printSection(title) {
  console.log(chalk.hex("#f59e0b").bold(`\n>> ${title.toUpperCase()}`));
  console.log(chalk.hex("#334155")(line("-")));
}

function printDivider(char = "-") {
  console.log(chalk.hex("#334155")(line(char)));
}

function formatMainPrompt() {
  return [
    chalk.hex("#f8fafc").bold("Escolha a ferramenta:"),
    chalk.hex("#22d3ee")("1) QR Code"),
    chalk.hex("#22d3ee")("2) Password"),
    chalk.hex("#94a3b8")("Digite 1 ou 2"),
  ].join("\n");
}

function formatQRCodeTypePrompt() {
  return [
    chalk.hex("#f8fafc").bold("Escolha o tipo de QR Code:"),
    chalk.hex("#22d3ee")("1) Normal"),
    chalk.hex("#22d3ee")("2) Terminal (small)"),
    chalk.hex("#94a3b8")("Digite 1 ou 2"),
  ].join("\n");
}

const success = (text) => chalk.hex("#22c55e").bold(text);
const info = (text) => chalk.hex("#38bdf8")(text);
const error = (text) => chalk.hex("#ef4444").bold(text);
const warning = (text) => chalk.hex("#f59e0b").bold(text);

export {
  printAppHeader,
  printSection,
  printDivider,
  formatMainPrompt,
  formatQRCodeTypePrompt,
  success,
  info,
  error,
  warning,
};
