import {Response, Request} from "express";
import UserModel from "../../models/User.model";

// --------- Get Requests ---------
const getNotes = async (req:Request, res:Response) => {
    const { UID, id } = req.query;

    try {
        const userData: any = await UserModel.findOne({UID:UID});
        const notes: any = userData.notes.map(({note, notebookID, title, content }:any) =>
            ( {note, notebookID, title, content }));
        res.json(notes);
    } catch(err) {
        res.json({error: "Resource not found"});
    }

}

export default getNotes;