const { default: dbConnect } = require("../../../server/utils/dbConnect");
import Note from "../../../server/model/Note";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const notes = await Note.find({});
        res
          .status(200)
          .json({ message: "Send Notes Successfully!", data: notes });
      } catch (error) {
        res.status(500).json({ message: "Something went wrong!" });
      }
      break;
    case "POST":
      try {
        const { title, description } = req.body;
        const newNote = await Note.create({ title, description });
        // const newNote = new Note({ title, description });
        // const savedNote = await newNote.save();
        res
          .status(201)
          .json({ message: "Note Saved Successfully!", data: newNote });
      } catch (error) {
        res.status(500).json({ message: "Something went wrong!", error });
      }
      break;

    default:
      res.status(400).json({ message: "Method not allowed!" });
      break;
  }
};
