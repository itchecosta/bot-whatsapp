//const cardapio = require("../cardapio");
const banco = require("../banco");

function execute(user, msg) {

    if(msg === "*") {
        banco.db[user].stage = 0;
        return ["Pedido cancelado com sucesso!"];
    }

    if(msg === "#") {
        banco.db[user].stage = 3;
        return ["Digite o endereço, por favor!"];
    }

    let resumo = "  RESUMO DO PEDIDO  \n";
    let total = 0;
    banco.db[user].itens.forEach((value)=>{
        total += value.preco;
        resumo += `${value.descricao} ------------ R$ ${value.preco} \n`;
    });

    resumo += "-----------------------------\n";
    resumo += `  Total R$ ${total}`;

    return [
        resumo, 
        "Para confirmar digite # ou para cancelar digite * "
    ];
}

exports.execute = execute;