import chalk from "chalk";
import handle from "./handle.js";
import { printSection, printDivider, success, info } from "../../ui/theme.js";

async function createPassword() {
  printSection("Gerador de senha");
  console.log(info("Gerando senha com base nas configuracoes do .env..."));

  const password = await handle();

  printDivider();
  console.log(success("Senha gerada com sucesso:"));
  console.log(chalk.whiteBright.bold(password));
  printDivider();
}

export default createPassword;
