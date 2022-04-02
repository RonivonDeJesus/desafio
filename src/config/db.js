const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("conectado db")
}).catch((err) => {
    console.log("Erro: " + err)
})


module.exports = mongoose