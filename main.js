token = "Nzk3NTIzMDUwODE1NTUzNTY3.X_ntOA.xnkI0bOzsKc7HIe5YUbhU0nEKQ4";
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

        function SendMessage(mes) {
            bot.createMessage(message.channel.id, mes);
        }

////////////////////////////////////////////////////////////////////

        if (message.content === (prefix + "ping")) {
            SendMessage("Pong!");
        };

////////////////////////////////////////////////////////////////////
    });
    bot.connect();
};
Bot();
