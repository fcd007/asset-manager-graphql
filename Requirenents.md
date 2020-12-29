# Plano de Desenvolvimento de Software
**1. Visão do Projeto**
- 1.1 Propósito do Projeto, Escopo e Objetivos
- Desenvolvimento de um sistema de controle de custos que auxilie uma empresa a controlar
questões como:
*** Cadastro de funcionários e departamentos atuante. ***
- O usuário tem o poder para cadastrar novos funcionários e em quais departamentos este funcionário irá trabalhar.
- Cadastro de departamentos
- O usuário tem o poder para cadastrar os departamentos da empresa.

**Gerenciamento de movimentações**
- O usuário tem o poder de definir as movimentações de cada departamento, ou seja, seus custos.
- O sistema deverá salvar as seguintes informações do departamento:
- Nome: Deverá ser uma string de no máximo 100 caracteres.
- O sistema deverá salvar as seguintes informações da movimentação:
- Funcionário que fez a movimentação.
- Descrição: Deverá ser uma string de no máximo 500 caracteres.
- Valor da Movimentação: Deverá ser um decimal com duas casas decimais.

**O sistema deverá ter uma tela para visualizar todas as movimentações e deve permitir**
- consultar as movimentações pelo funcionário que efetuou a movimentação e pela descrição
da movimentação.

- O backend NodeJS.
- O Front End o React.
- Para persistência ORM - Typeorm.

**Recursos:**
o Migrations.
o NestJS
o GraphQL.
o Redux.
o Hooks.
o Redux Compose.
o Docker.
o TypeScript

**1.2 Premissas e Restrições**
- O sistema deverá salvar as seguintes informações do funcionário:
o Nome: Deverá ser uma string de no máximo 200 caracteres.
o Departamento: deverá ser escolhido pelo menos 1 departamento.
o Separação em Camadas
- O sistema deverá salvar as seguintes informações do departamento:
- Nome: Deverá ser uma string de no máximo 100 caracteres. 
- O sistema deverá salvar as seguintes informações da movimentação:
o Funcionário que fez a movimentação.
o Descrição: Deverá ser uma string de no máximo 500 caracteres.
o Valor da Movimentação: Deverá ser um decimal com duas casas decimais. 