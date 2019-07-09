# Caixa Bancário - Máquina de Estados

[![Academy Project](https://img.shields.io/badge/Academy-Project-informational.svg)](https://www.facebook.com/Curso-de-Ciência-da-Computação-470257173378377/)

Representação de Caixa Bancário, utilizando Estado de Máquina. Serviço do Node.js, integrando com Socket.IO para comunicação com o client-side. Utilizando o módulo npm do @davestewart "state-machine".

## Rodar:
```javascript
node bank-operations.js
```

## Para testar no console:
```javascript
socket.emit('maquina estado', 'proxComCartao');
socket.emit('maquina estado', 'proxSemCartao');
socket.emit('maquina estado', 'erro');
```

![alt text](https://i.ibb.co/RcPTybC/Diagrama.png)

## Tabela de Estados
![alt text](https://i.ibb.co/fCYHrCP/tabela-Automato.png)

## Fórmula dos Estados
![alt text](https://i.ibb.co/bJxLyTQ/funcao.png)
