var http = require('http');
var request = require('request');

function ativaMicorservicoAPI(callback) {
    request('https://pokeapi.co/api/v2/pokemon/ditto', function (error, response, body) {
        if (!error && response.statusCode === 200) {
            callback(body); // Chamada de volta com o resultado da API
        } else {
            callback(null); // Chamada de volta com null em caso de erro
        }
    });
}

http.createServer(function (req, res) {
    // Chamando a função para ativar o microserviço da API
    ativaMicorservicoAPI(function(respAPI) {
        // Verificando se houve resposta da API
        if (respAPI) {
            console.log(respAPI);
            res.end(respAPI);
        } else {
            console.log("Erro ao acessar a API");
            res.end("Erro ao acessar a API");
        }
    });
}).listen(8080);

console.log('Servidor rodando em http://localhost:8080/');
