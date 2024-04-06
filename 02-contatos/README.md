# Objetivo

Deve-se aplicar padrões de projeto em JavaScript, tanto estruturais quanto comportamentais em um contexto prático.

## Problema

Você foi contratado para desenvolver um sistema de gerenciamento de contatos em JavaScript. O sistema deve permitir aos usuários adicionar, remover e listar contatos. Além disso, eles devem ser capazes de buscar contatos por nome.

## Requisitos Iniciais:

- Implemente uma classe Contato que represente um contato com os seguintes atributos: nome, telefone e email.
- Implemente uma classe GerenciadorContatos que possua métodos para adicionar, remover e listar contatos. Este gerenciador deve manter uma lista de contatos.
- Implemente uma interface simples de linha de comando (CLI) que permita aos usuários interagirem com o sistema (adicionar, remover, listar e buscar contatos).
- Utilize um padrão de projeto estrutural para garantir que a adição e remoção de contatos possam ser facilmente estendidas no futuro, sem modificar o código existente.
- Utilize um padrão de projeto comportamental para implementar a funcionalidade de busca de contatos, garantindo que esta possa variar independentemente dos algoritmos de busca.
    
## Instruções Adicionais:

- Você pode escolher qualquer padrão de projeto estrutural e comportamental para implementar os requisitos.
- Documente o seu código de forma clara, explicando a escolha dos padrões de projeto utilizados.
- Siga as melhores práticas de desenvolvimento JavaScript e padrões de codificação.
- Teste o seu sistema para garantir que ele atende aos requisitos especificados.

# Solução Implementada

O projeto foi feito com NodeJs, com teste simples em Jest. A interface CLI 
permite, por meio dos comandos, criar, listar, buscar e remover contatos.

Foi utilizado a Design Pattern de Adapters para Storage, para que outras formas
de armazenamento possam ser implementadas no futuro. A forma implementada foi
com SQLite, por meio de um arquivo. 

A justificativa para isso é que a biblioteca usada para interagir com o 
SQLite usava Callbacks em vez de Promises, dessa forma, o Adapter converte os 
callbacks em Promises.

Já para a busca, foi implementado a Strategy Design Pattern, de forma que, caso
o número de contatos seja até 10000, será realizado busca linear, mas caso
seja maior que 10000, será usado busca binária. Dessa forma, caso seja 
necessário, outros algoritmos de busca podem ser implementados.
