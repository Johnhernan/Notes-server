import {Request, Response} from "express";
import getNotebook from "./getNotebook";
import deleteNotebook from "./deleteNotebook";
import updateNotebook from "./updateNotebook";
import getNotebooks from "./getNotebooks";
import postNotebook from "./postNotebook";


const getNotes = async (req:Request, res:Response) => {
    // const { UID, notebookID } = req.body;

    // const userData = await UserModel.findOne({UID: UID});
    // if(userData) {
    //     const notes = userData.notes.filter(note => {
    //         const n: any = note;
    //         if(n.notebookID === notebookID) return note;
    //     });
    //     res.json(notes);
    // } else 
    //     res.json({message: "Resource not found"});
}

export default { 
    postNotebook, 
    getNotebook,
    getNotebooks,
    deleteNotebook,
    updateNotebook,
    getNotes
};
