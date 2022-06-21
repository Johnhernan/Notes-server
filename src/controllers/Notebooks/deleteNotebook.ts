import {Request, Response} from "express";
import UserModel from "../../models/User.model";

// Delete Requests
const deleteNotebook = async (req: Request, res: Response) => {
    const { UID, id: itemToRemove } = req.query;
    
    try {
        await UserModel.updateOne({UID: UID},
            {$pull: { notebooks: { notebook: itemToRemove }}},
            {multi: true }
        );
        await UserModel.updateOne({UID: UID},
            {$pull: { notes: { notebookID: itemToRemove }}},
            {multi: true });

        res.json({message: "Item sucessfully deleted"});
    }
    catch(err) {
        console.log("here")
        res.json({error: "Item not found"});
    }

}

export default deleteNotebook;