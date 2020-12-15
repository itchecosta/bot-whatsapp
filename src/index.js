const bot = require("venom-bot");
const banco = require("./banco");
const stages = require("./stages");

// 559199999999@c.us

bot
  .create()
  .then((client) => start(client));

  function start(client) {
    client.onMessage((message) => {
        //console.log(message);
        let resp = stages.step[getStage(message.from)].obj.execute(message.from, message.body);
        for(let i = 0; i < resp.length; i++) {
            const element = resp[i];
            console.log(resp.length, resp[i]);
              
            client.sendText(message.from, element);
            // .then((result) => {
            //   console.log(element, i);
            //   console.log('Result: ', result.text); //retorna um objeto de successo
            // })
            // .catch((erro) => {
            //   console.error('Erro ao enviar mensagem: ', erro); //return um objeto de erro
            // });
            
        }

    //   if (message.body === 'Oi' || message.body === 'Olá') {
    //     client
    //       .sendText(message.from, 'Olá! Tudo bem com você?')
    //       .then((result) => {
    //         console.log('Result: ', result); //retorna um objeto de successo
    //       })
    //       .catch((erro) => {
    //         console.error('Erro ao enviar mensagem: ', erro); //return um objeto de erro
    //       });
    //   }


    });
  }

function getStage(user) {
    return banco.db[user].stage;
}


// console.log(stages.step[getStage("user2")].obj.execute());