const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const secret = require("../config/authSecret/keySecret.js")
const User = require('../Models/usersModel')

const generateToken = (params = {}) =>{
  return jwt.sign(params, secret, {
    expiresIn: 864000
  })
}
 const authController ={ 
  register: async(req, res) =>{
    const { email } = req.body
  try {
    if(await User.findOne({ email })){
      return res.status(400).send({ error: 'Email already exist'})
    }
    const user = await User.create(req.body)
    user.password = undefined

    return res.status(201).send({
      user,
      token: generateToken({ id: user.id }),
    });
  } catch (error) {
    return res.status(400).send({ error: 'Registration fail'})
  }
},
authenticate:async(req, res) =>{
  const { email, password} = req.body
  try {
    const user = await User.findOne( { email }).select('+password')

    if(!user){
      return res.status(400).send({ error: 'User not found'})
    }

    if(!await bcrypt.compare(password, user.password)){
      return res.status(400).send({ error: 'Invalid password'})
    }
     user.password = undefined

     res.status(201).send({ 
      user,
      token: generateToken({ id: user.id}),
      Message: "User with credicial ok"
     })
  } catch (error) {
    res.status(500).send({ error: 'Fail on authenticate' })
  }
}
}

module.exports = authController;