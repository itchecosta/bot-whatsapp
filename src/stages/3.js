const banco = require("../banco");
const stages = require("../stages");

function execute(user, msg) {

    if(msg === "*") {
        banco.db[user].stage = 0;
        return ["Pedido cancelado com sucesso!"];
    }

    if(msg === "#") {
        banco.db[user].stage = 4;
        return stages.step[4].obj.execute(user,"");
    }

    return [
        `Confirma endereço de entrega: \n ${msg}`,
        "```Digite # para finalizar ou * para cancelar```",
    ];
}

exports.execute = execute;