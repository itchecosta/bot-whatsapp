const banco = require('../banco');

function execute(user,msg) {

    banco.db[user].stage = 0;

    return [
        "Obrigado pela preferência.", 
        "Aguarde, seu pedido chegará em breve!",
        "Mais informações, ligue para 9197979797",
    ];
}

exports.execute = execute;