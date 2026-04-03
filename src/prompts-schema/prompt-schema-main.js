import { formatMainPrompt, warning } from "../ui/theme.js";

const promptSchemaMain = [
  {
    name: "select",
    description: formatMainPrompt(),
    pattern: /^[12]$/,
    message: warning("Escolha apenas 1 ou 2"),
    required: true,
  },
];

export default promptSchemaMain;
