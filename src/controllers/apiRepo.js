const repositoryModels = require("../Models/repositoryModel.js");

const apiRepo = {
  getAllRepo: async (req, res) => {
    try {
      const repo = await repositoryModels.find().populate("user");
      return res.status(200).send({ repo });
    } catch (error) {
      return res.status(400).send({ error: "Error on creating repositoty" });
    }
  },

  getRepoId: async (req, res) => {
    try {
      const repo = await repositoryModels
        .findById(req.params.repoId)
        .populate("user");
      return res.status(200).send({ repo });
    } catch (error) {
      return res.status(400).send({ error: "Error on creating repositoty" });
    }
  },

  createRepo: async (req, res) => {
    try {
      const repository = await repositoryModels.create({
        ...req.body,
        user: req.userId,
      });
      return res.status(200).send({ repository });
    } catch (error) {
      return res.status(400).send({ error: "Fail of cretating repository" });
    }
  },
  upDateRepo: async (req, res) => {
    try {
      const repo = await repositoryModels
        .findByIdAndUpdate(req.params.repoId, req.body,{ new: true })
        
      return res.status(200).send({ repo, message: "Repository update sucess" });
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: "Error os update repositoty" });
    }
  },

  deleteRepo: async (req, res) => {
    try {
      await repositoryModels.findByIdAndDelete(req.params.repoId);
      return res.status(200).send({ message: "Repository delete with sucess"});
    } catch (error) {
      return res.status(400).send({ error: "Error on deleting repositoty" });
    }
  },
};
module.exports = apiRepo;
