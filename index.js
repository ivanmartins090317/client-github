const connectToDatabase = require("./src/database/connect.js");
const dotenv = require("dotenv");

dotenv.config();
connectToDatabase();


require("./src/router/express.js");


