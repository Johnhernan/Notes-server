import {Request, Response} from "express";
import UserModel from "../../../utilities/models/mongoose/User.model";

// Get Requests
const getNotebooks = async (req: Request, res: Response) => {
    const { UID } = req.query;
   
    try {
        const userData: any = await UserModel.findOne({UID: UID});
        const notebooks = userData.notebooks.map(({notebook, title, description}: any) => (
            {notebook, title, description}));
        
        res.json(notebooks);
    } catch(err){
        res.json({error: "Could not find sources"});
    }
}

export default getNotebooks;