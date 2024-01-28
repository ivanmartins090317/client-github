const crypto = require("crypto");

// Gerando uma string aleatória para servir como segredo
const segredoAleatorio =
  Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15);

// Criando o hash MD5
const secret = crypto.createHash("md5").update(segredoAleatorio).digest("hex");

module.exports = secret