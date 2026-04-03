import qr from "qrcode-terminal";
import chalk from "chalk";
import { success, error, printDivider } from "../../ui/theme.js";

async function handle(err, result) {
  if (err) {
    console.log(error("Erro ao gerar QR Code."));
    return;
  }

  const isSmall = result.type == 2;

  qr.generate(result.link, { small: isSmall }, (qrcode) => {
    printDivider();
    console.log(success("QR Code gerado com sucesso:\n"));
    console.log(qrcode);
    printDivider();
    console.log(chalk.hex("#94a3b8")("Copie ou escaneie o codigo acima."));
  });
}

export default handle;
