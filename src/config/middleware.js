const jwt = require('jsonwebtoken')
const keySecret = require('./authSecret/keySecret.js')


module.exports = (req, res, next) =>{
  const authHeader = req.headers.authorization

  if(!authHeader){
    return res.status(401).send({ error: 'NO token provider'})
  }
    const tokenParts = authHeader.split(' ')

    if(!tokenParts.length === 2){
      return res.status(401).send({ error: 'Token error'})
    }
    const [ patternName, token ] = tokenParts

    if(!/^Bearer$/i.test(patternName)){
      return res.status(401).send({ error: 'Token not exist'})
    }
    jwt.verify(token, keySecret, (err, decoded) =>{
      if(err){
        return res.status(500).send({ error: 'Token invalid'})
      }
      req.userId = decoded.id
      return next()
    })
  }

