const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
  subject: {
    type: String,
    required: true
  },
  email: {
    type: String,
    require: true
  },
  status: {
    type: Boolean,
    required: true,
    default: false
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  }
});

const subject = mongoose.model("subjects-mongoose", subjectSchema);
module.exports = subject;
