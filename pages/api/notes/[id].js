const { default: dbConnect } = require("../../../server/utils/dbConnect");
import Note from "../../../server/model/Note";

dbConnect();

export default async (req, res) => {
  const {
    method,
    query: { id },
  } = req;
  console.log("id", id);
  switch (method) {
    case "GET":
      try {
        const note = await Note.findById(id);

        if (!note) {
          return res.status(404).json({ message: "Note not found!" });
        }
        res
          .status(200)
          .json({ message: "Send Note Successfully!", data: note });
      } catch (error) {
        res.status(500).json({ message: "Something went wrong!", error });
      }

      break;
    case "PUT":
      try {
        const { title, description } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(
          id,
          { title, description },
          { new: true, runValidators: true }
        );

        if (!updatedNote) {
          return res.status(404).json({ message: "Note not found!" });
        }

        res
          .status(200)
          .json({ message: "Note Updated Successfully!", data: updatedNote });
      } catch (error) {
        res.status(500).json({ message: "Something went wrong!", error });
      }
      break;
    case "DELETE":
      try {
        const deletedNote = await Note.findByIdAndDelete(id);
        if (!deletedNote) {
          return res.status(404).json({ message: "Note not found!" });
        }
        res
          .status(200)
          .json({ message: "Note Deleted Successfully!", data: deletedNote });
      } catch (error) {
        res.status(500).json({ message: "Something went wrong!", error });
      }
      break;

    default:
      res.status(400).json({ message: "Method not allowed!" });
      break;
  }
};
