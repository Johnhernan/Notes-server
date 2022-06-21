import {Response, Request} from "express";
import {v4 as uuid} from "uuid";
import UserModel from "../../models/User.model";
import INotes from "../../utilities/INotes";

// --------- Post Request ---------
const postNote = async (req:Request, res:Response) => {
    const { UID, note} = req.body;
    const {title, content, notebookID } = note;

    if( !UID || !notebookID || !title || !content) {
        res.json({error: "Failed to post note"});
        return;
    }
    const newNote: INotes = {
        note: uuid(),
        notebookID,
        title,
        content,

    };

    try {
        const userData: any = await UserModel.findOne({UID:UID}).clone();
        userData.notes.push(newNote);
        userData.save();

        res.json({message: "Note posted"});
    } catch(err) {
        res.json({error: "Server Error, failed to post"})
    }

}
export default postNote; 