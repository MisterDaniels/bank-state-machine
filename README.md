# Caixa Bancário - Máquina de Estados
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
![alt text](https://i.ibb.co/qrRw8s1/TABELA.jpg)

## Fórmula dos Estados
![alt text](https://i.ibb.co/QrYmKj5/F-RMULAS.jpg)
