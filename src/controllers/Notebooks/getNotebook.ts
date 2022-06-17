import {Request, Response} from "express";
import UserModel from "../../models/User.model";

// Post Requests
const getNotebook = async (req: Request, res: Response) => {
    const { UID, id } = req.body;

    try{
        const userData: any = await UserModel.findOne({UID: UID}).clone();
        const notebooks = userData.notebooks.filter((notebook: any) => {
            if(notebook.notebook === id){
                return notebook;
            }
        });
        res.json(notebooks);
    }
    catch(err){
        res.json({message: "Source could not be found"});
    }

        
}

export default getNotebook;