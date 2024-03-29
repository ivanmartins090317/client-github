const express = require('express');
const dotenv = require("dotenv");
const routing = require("./src/Routes/authRouting.js");
const apiRouter = require("./src/Routes/repoRouting.js");
const cors = require("cors")

const app = express();
dotenv.config();

require("./src/Database/connect.js");

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// routing come of module Routes
app.use('/auth', routing)  
app.use("/", apiRouter);

const port = 5000;
// hear server 
app.listen(port, () => console.log(`Express Rodando na porta ${port}`))
