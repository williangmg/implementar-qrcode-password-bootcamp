import prompt from "prompt";
import promptSchemaQRCode from "../../prompts-schema/prompt-schema-qrcode.js";
import handle from "./handle.js";
import { printSection, info } from "../../ui/theme.js";

async function createQRCode() {
  printSection("Gerador de QR Code");
  console.log(info("Preencha os campos para montar seu QR Code.\n"));

  prompt.get(promptSchemaQRCode, handle);
  prompt.start();
}

export default createQRCode;
