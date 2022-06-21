import {Response, Request} from "express";
import UserModel from "../../models/User.model";

// --------- Get Requests ---------
const getNote = async (req:Request, res:Response) => {
    const { UID, id } = req.body;

    try {
        const userData: any = await UserModel.findOne({UID:UID});
        const note: any = userData.notes.filter(({note, notebookID, title, content }:any) => { 
                if(note === id) 
                    return {note, notebookID, title, content };
        });
        res.json(note);
    } catch(err) {
        res.json({error: "Resource not found"});
    }

}

export default getNote;