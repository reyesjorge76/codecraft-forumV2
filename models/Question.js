const mongoose = require("mongoose");
const QuestionSchema = new mongoose.Schema({
  topicId: { type: mongoose.Schema.Types.ObjectId, ref: "Topic" },
  title: String,
  body: String,
  username: String,
  timestamp: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Question", QuestionSchema);
