// cod pra conexão do banco de dados
const mongoose = require("mongoose")

const connect = async () =>{
    try {
        mongoose.connect("mongodb+srv://dribacos:dama123@cluster0.ihufctc.mongodb.net/rlibrary",{ //tem q ser aspa dupla
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        }) 
        console.log("bonita, conectei a database") // mensagem pode ser: database ta on rs, database conectada em nome da Beyonce
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    connect, 
}