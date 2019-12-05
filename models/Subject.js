const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
  subject_name: {
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

const subject = mongoose.model("subjects", subjectSchema);
module.exports = subject;
