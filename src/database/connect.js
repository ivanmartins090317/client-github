const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.zql3ocd.mongodb.net/dataBase?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Conexão bem-sucedida ao banco de dados");
  } catch (error) {
    console.error("Erro na conexão com o banco de dados:", error.message);
  }
};

module.exports = connectToDatabase;
