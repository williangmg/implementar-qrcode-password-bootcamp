# Gerador de QR Code e Senhas para E-commerce

Projeto desenvolvido por Willian como parte dos estudos em Node.js, com foco em organizacao por camadas e evolucao incremental de features.

## Sobre

Este projeto e um kit de utilidades para terminal com dois fluxos principais:

- Geracao de QR Code para uso em cenarios de pagamento e compartilhamento rapido.
- Geracao de senha com regras configuraveis para uso em cadastro ou autenticacao.

A proposta e manter a base simples, mas preparada para crescer com novas funcionalidades sem virar codigo monolitico.

## Tecnologias

- Node.js
- JavaScript (ES Modules)
- qrcode-terminal
- prompt
- chalk

## Estrutura do Projeto

```text
src/
  index.js
  prompts-schema/
    prompt-schema-main.js
    prompt-schema-qrcode.js
  services/
    password/
      create.js
      handle.js
      utils/
        permitted-characters.js
    qr-code/
      create.js
      handle.js
```

## Como Executar

1. Instale as dependencias:

```bash
npm install
```

2. Configure o arquivo .env (se necessario para o seu fluxo local).

3. Rode o projeto:

```bash
npm start
```

## Aprendizados Aplicados

- Separacao de responsabilidades por modulo.
- Uso de schemas de prompt para organizar interacoes no terminal.
- Estruturacao de servicos independentes para QR Code e senha.

## Proximos Passos

- Adicionar testes automatizados para os servicos.
- Criar validacoes mais robustas para entradas do usuario.
- Evoluir para uma interface HTTP mantendo a mesma camada de servicos.

## Contato

- GitHub: https://github.com/williangmg
- LinkedIn: https://www.linkedin.com/in/willian-gomes-de-melo-gattass
