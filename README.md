# Gateway Disparo Massa

O **Gateway Disparo Massa** é uma solução para facilitar a comunicação e a realização de transações entre os seus softwares internos e o aplicativo. O sistema permite a integração de serviços e o envio de informações, como e-mails, para múltiplos destinatários a partir de uma API.

## Objetivo

O principal objetivo deste projeto é fornecer um **gateway de integração** que permite a comunicação entre diferentes sistemas internos e o aplicativo, permitindo o envio de e-mails em massa, transações de dados e outros processos automatizados.

## Funcionalidade

O **Gateway Disparo Massa** possui uma API que permite o envio de e-mails em massa, mas também pode ser expandido para realizar outras transações entre os sistemas.

### API `sendemails`

A API `sendemails` é responsável por enviar e-mails para uma lista de contatos. Ela é uma das transações implementadas dentro do gateway.

### Exemplo de Corpo da Requisição:

```json
[{
    "nome": "Fulano de Tal",
    "email": "fulano@example.com",
    "telefone": "+5511999999999"
}, {
    "nome": "Ciclano da Silva",
    "email": "ciclano@example.com",
    "telefone": "+5511888888888"
}]
