import {Request, Response} from "express";
import INotebook from '../../utilities/INotebook';
import {v4 as uuid} from 'uuid';
import UserModel from "../../models/User.model";

const postNotebook = async (req: Request, res: Response) => {
    const { UID, notebook } = req.body;
    const {title, description } = notebook;
    if(!title || !description || !UID) {
        res.status(400);
        return;
    }
    const newNotebook: INotebook = {
        notebook: uuid(),
        title: title,
        description: description, 
        color: "#FFC54D",
        favorite: false,
    };

    try {
        const userData: any = await UserModel.findOne({UID: UID});
        
        userData.notebooks.push(newNotebook);
        await userData.save();
        res.json({message: "Item sucessfully saved"});
        
    } catch(err) {
        res.json({error: "Failed User not found"});
    }    
}

export default postNotebook;