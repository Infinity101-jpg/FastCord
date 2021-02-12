token = "Nzk3NTIzMDUwODE1NTUzNTY3.X_ntOA.YdyeVndCX77w_BU7ifx9XMs-z3Y";
prefix = ";"

/////////////////////////////////////////////////////////////////////

function echo(text) {
    console.log([text]);
};

const NewBot = require("eris");
var bot = new NewBot(token);

function Bot() {
    
    bot.on("ready", () => {
        echo("Bot Is Online.");
    });

    bot.on("messageCreate", (message) => {

        function ReplyWithoutMention(mes) {
            bot.createMessage(message.channel.id, mes);
        }

        function Reply(mes1) {
            bot.createMessage(message.channel.id, "<@" + message.member.id + ">, " + mes1);
        }

////////////////////////////////////////////////////////////////////

        if (message.content === (prefix + "ping")) {
            ReplyWithoutMention("Pong!");
        };

////////////////////////////////////////////////////////////////////
    });
    bot.connect();
};
Bot();
