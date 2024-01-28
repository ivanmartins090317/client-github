const express = require('express');
const authController = require('../controllers/authController')
const verifyAcessToken = require('../controllers/verifyAcessToken.js')
const middlewareVerifyToken = require('../config/middleware')
const apiRepo = require('../controllers/apiRepo.js')
// const User = require("../Models/usersModel")

// const app = express();
const router = express.Router();

router.post('/authenticate', authController.authenticate)
router.post('/register', authController.register)
router.use(middlewareVerifyToken)
 
router.get('/', verifyAcessToken.verifyToken);

// router.get('/', apiRepo.getAllRepo)
// router.get('/:repoId', apiRepo.getRepoId)
// router.post("/:repoId", apiRepo.createRepo);
// router.put("/:repoId", apiRepo.upDateRepo);
// router.delete("/:repoId", apiRepo.deleteRepo);
// const port = 5000


// ---Rotes---

// app.post("/users", async (req, res) => {
//   try {
//     const userCreate = await User.create(req.body);

//     res.status(201).json(userCreate);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

// app.get("/home", (req, res) =>{
//   res.status(200).send("<h1>Hello express</h1>")
// })

// app.get('/totalUsers', async(req, res) =>{
//   try {
//     const userEvery = await User.find({});
//     res.status(201).json(userEvery);
//   } catch (error) {
//     res.status(500).send(error.message)
//   }
// })

// app.get("/user/:id", async (req,res) =>{
//   try {
//     const id = req.params.id;
//     const userForId = await User.findById(id);

//     return res.status(201).json(userForId); 
//   } catch (error) {
//     return res.status(500).send(error.message)
//   }
// })
// app.patch("/user/:id/", async (req, res) =>{
//   try {
//     const id = req.params.id;
//     const userPatch = await User.findByIdAndUpdate(id, req.body, { new: true });

//     res.status(200).json(userPatch);
//   } catch (error) {
//     res.status(500).send(error.message)
//   }
// })
// app.delete('/delete/:id', async (req, res) =>{
//   try {
//     const id = req.params.id;
//     const userDelete = await User.findByIdAndDelete(id);
//     console.log(`Usuario deletado ${user}`);
//     res.status(200).json(userDelete);
//   } catch (error) {
//     res.status(500).send(error.message)
//   }
// })

// hear server 
// app.listen(port, () => console.log(`Express Rodando na porta ${port}`))

module.exports = router