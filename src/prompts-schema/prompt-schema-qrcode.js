import chalk from "chalk";
import { formatQRCodeTypePrompt, warning } from "../ui/theme.js";

const promptSchemaQRCode = [
  {
    name: "link",
    description: chalk.hex("#f8fafc").bold("Cole o link para gerar o QR Code"),
  },
  {
    name: "type",
    description: formatQRCodeTypePrompt(),
    pattern: /^[12]$/,
    message: warning("Escolha apenas 1 ou 2"),
    required: true,
  },
];

export default promptSchemaQRCode;
