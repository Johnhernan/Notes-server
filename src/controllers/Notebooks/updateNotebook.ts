import {Request, Response} from "express";
import UserModel from "../../models/User.model";

const updateNotebook = async (req: Request, res: Response) => {
    const { UID, id, args} = req.body;
    if(!UID || !id || !args) {
        res.status(400);
        return;
    }
    try {
        const userData: any = await UserModel.findOne({UID: UID}).clone();
        
        userData.notebooks.forEach((n: any) => {
            if(n.notebook === id) {
                args.title && (n.title = args.title);
                args.description && (n.description = args.description);
            }
        });
        
        await userData.save()
        res.json({message: "Item sucessfully updated"});
    }
    catch (err) {
        console.log(err);
        res.json({error: "Item could not be found"});
    }
}

export default updateNotebook;