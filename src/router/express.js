const express = require('express');
const UserModel = require("../models/users-model")

const app = express();
app.use(express.json())

const port = 5000


// ---Rotes---

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/home", (req, res) =>{
  res.status(200).send("<h1>Hello express</h1>")
})

app.get('/totalUsers', async(req, res) =>{
  try {
    const user = await UserModel.find({});

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message)
  }
})

app.get("/user/:id", async (req,res) =>{
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);

    return res.status(201).json(user); 
  } catch (error) {
    return res.status(500).send(error.message)
  }
})
app.patch("/user/:id/", async (req, res) =>{
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message)
  }
})
app.delete('/delete/:id', async (req, res) =>{
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id);
    console.log(`Usuario deletado ${user}`);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message)
  }
})

// hear server 
app.listen(port, () => console.log(`Rodando na porta ${port}`))