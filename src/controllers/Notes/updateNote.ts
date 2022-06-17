import {Response, Request} from "express";
import UserModel from "../../models/User.model";

// --------- Patch Request ---------
const updateNote = async (req:Request, res:Response) => {
    const {UID, id, args} = req.body;

    try {
        const userData: any = await UserModel.findOne({UID: UID}).clone();
        userData.notes.forEach((n: any) => {
            if(n.note === id) {
                args.title && (n.title = args.title);
                args.content && (n.content = args.content);
            }
        });
        await userData.save()
        res.json({message: "Note updated"});
    } catch(err) {
        console.log(err);
        res.json({message: "Item could not be found"});
    }

}

export default updateNote;