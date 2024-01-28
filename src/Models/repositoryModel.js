const mongoose = require('mongoose');


const RepoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  repoUrl: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",

  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Repository = mongoose.model("Repository", RepoSchema);

module.exports = Repository 