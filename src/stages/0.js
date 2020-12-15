const cardapio = require("../cardapio");
const banco = require('../banco');

function execute(user,msg) {

    let menu = " CARDÁPIO \n\n";

    Object.keys(cardapio.menu).forEach((value)=>{
        let element = cardapio.menu[value];
        menu += `${value} - ${element.descricao}        R$ ${element.preco} \n`;
    });

    banco.db[user].stage = 1;

    return [
        `Olá, sou uma assistente virtual, irei apresentar o cardápio, para fazer o pedido basta enviar o código do produto!`, 
        menu,
    ];
}

exports.execute = execute;