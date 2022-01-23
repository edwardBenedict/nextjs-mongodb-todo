const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minlength: [3, "Title must be at least 3 characters long"],
    maxlength: [50, "Title must be less than 50 characters long"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minlength: [3, "Description must be at least 3 characters long"],
    maxlength: [500, "Description must be less than 500 characters long"],
  },
});

module.exports = mongoose.models.Note || mongoose.model("Note", NoteSchema);
