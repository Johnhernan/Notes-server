import {Response, Request} from "express";
import UserModel from "../../../utilities/models/mongoose/User.model";

// --------- Delete Request ---------
const deleteNote = async (req:Request, res:Response) => {
    const { UID, id } = req.query;
    try {
        await UserModel.findOneAndUpdate({UID: UID},
         {$pull: { notes: { note: id }}}
        );
        res.json({message: "Item sucessfully deleted"});
    }
    catch(err) {
        res.json({error: "Item not found"});
    }
}
export default deleteNote;