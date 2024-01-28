const express = require('express')
const apiRepo = require("../controllers/apiRepo.js");

const middlewareVerifyToken = require("../config/middleware");


const apiRouter = express.Router();

apiRouter.use(middlewareVerifyToken);

apiRouter.get("/", apiRepo.getAllRepo);
apiRouter.get("/:repoId", apiRepo.getRepoId);
apiRouter.post("/:repo", apiRepo.createRepo);
apiRouter.put("/:repoId", apiRepo.upDateRepo);
apiRouter.delete("/:repoId", apiRepo.deleteRepo);

module.exports = apiRouter;