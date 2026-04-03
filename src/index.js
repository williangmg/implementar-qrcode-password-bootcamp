import prompt from "prompt";

import promptSchemaMain from "./prompts-schema/prompt-schema-main.js";

import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";
import {
  printAppHeader,
  printSection,
  error as errorText,
  info,
} from "./ui/theme.js";

async function main() {
  prompt.message = info("tool");
  prompt.delimiter = info("> ");

  printAppHeader();
  printSection("Menu principal");

  prompt.get(promptSchemaMain, async (err, choose) => {
    if (err) {
      console.log(errorText("Erro ao ler a opcao."));
      return;
    }

    if (choose.select == 1) await createQRCode();
    if (choose.select == 2) await createPassword();
  });

  prompt.start();
}

main();
