# Projeto 1

## Refatorações feitas

### 1) Código formatado com Prettier

Os arquivos `.js` do projeto foram formatados usando a ferramenta Prittier para
melhorar a legibilidade do código e forçar o mesmo padrão formatação em todo o
projeto.

### 2) Implementação de testes

Foram implementados testes para garantir que o `output` dos Reporter de HTML
e TXT estejam no formato esperado. Essa melhoria ajuda a garantir que 
refatorações futuras não alterem o comportamento do software.

### 3) Uso do principio de Single Responsibility

A partir da classes de Report, foram criadas uma classe para a Leitura do arquivo 
(classe `Reader`) e outra para o "parse" do JSON (classe `Parser`). Dessa forma,
cada classe tem uma única responsabilidade, facilitando a manutenção e a
compreensão do código.

## Design Patterns adotadas

### 1) Strategy (Comportamental)

### 2) Abstract Factory (Criacional)

Foi adotada a pattern de abstract factory para a criação dos objetos Report,
com isso, é possível criar diferentes tipos de Report (HTML e TXT) sem a 
necessidade de alterar o código que os utiliza.

### 3) Facade (Estrutural)

Para simplificar o uso das classes de Report, foi criada a classe `ReportFacade`
que abstrai o uso das classes de Reader, Parser e Reporter.

