// server HTTP com Express
const app = require('express')();
const http = require('http').Server(app);

// Server Socket para transmitir os dados entre cliente e servidor
const io = require('socket.io')(http);
var element;

// State Machine
const StateMachine = require('state-machine').StateMachine;

// Usando o método de 'Shorthand Notation'
var estados = new StateMachine({

    // Parâmetro para definir o estado inicial
    initial: 'menuPrincipal',

    transitions: [
        'proxSemCartao    : menuPrincipal > menuSemCartao > deposito >      conclussao',
        'proxComCartao    : menuPrincipal > menuComCartao > saque    >      conclussao',
        'erro             :                                 saque    > erro' 
    ],

    handlers: {

        'change': function (event, fsm) {

            // Variáveis
            var idEstado = fsm.state;

            console.info('Estado alterado > ', idEstado);

        },

        'menuPrincipal': function (event, fsm) {

            console.info('Estou no Menu Principal!');

        },

        'menuSemCartao': function (event, fsm) {

            console.info('Estou no Menu sem Cartão!');

        },

        'deposito': function (event, fsm) {

            console.info('Estou fazendo o depósito!');

        },

        'menuComCartao': function (event, fsm) {

            console.info('Estou no meu Menu com Cartão!');

        },

        'saque': function (event, fsm) {

            console.info('Estou fazendo o Saque!');

        },

        'erro': function (event, fsm) {

            console.info('Opaaa, parece que deu erro na operação...');

        },

        'conclussao': function (event, fsm) {

            console.info('Operação finalizada!');

        }

    },

});

app.get('/', function(request, response) {

    response.sendFile(__dirname + '/index.html');

});

io.on('connection', function(socket) {

    socket.on('maquina estado', function(acao) {

        if (acao === 'proxSemCartao') {
            estados.do('proxSemCartao');
        } else if (acao === 'proxComCartao') {
            estados.do('proxComCartao');
        } else if (acao === 'erro') {
            estados.do('erro');
        } else {
            console.log('NÃO EXISTE AÇÃO...');
        }

        io.emit('maquina estado', estados.state);

    });

});

// Servidor na porta 3000
http.listen(3000, () => {

    console.log('Executando servidor do caixa eletrônico');

});
