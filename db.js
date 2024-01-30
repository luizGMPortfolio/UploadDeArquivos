const mongoose = require("mongoose")
require("dotenv").config()
mongoose.set("strictQuery", true)

async function main() {
    await mongoose.connect(
        `mongodb+srv://${process.env.USER}:${process.env.SENHA}@bd.6dzderk.mongodb.net/?retryWrites=true&w=majority`
    );

    console.log("conectado com sucesso!")
}

main().catch((err) => console.log(err))

module.exports = main;