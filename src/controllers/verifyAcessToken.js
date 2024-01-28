
const verifyAcessToken = {
  verifyToken: (req,res) =>{
    res.send('Verification of token ok')
  }
}

module.exports = verifyAcessToken


// FALTA CRIAR O MIDDLEWARE DE VALIDAÇÃO DE TOKEN 