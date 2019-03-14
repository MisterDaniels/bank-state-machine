# bank-state-machine
Representação de Caixa Bancário, utilizando Estado de Máquina. Serviço do Node.js, integrando com Socket.IO para comunicação com o client-side. Utilizando o módulo npm do @davestewart "state-machine".

Para testar no console:
```javascript
socket.emit('maquina estado', 'proxComCartao');
socket.emit('maquina estado', 'proxSemCartao');
socket.emit('maquina estado', 'erro');

![alt text](https://i.ibb.co/RcPTybC/Diagrama.png)