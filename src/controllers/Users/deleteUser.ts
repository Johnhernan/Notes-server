import {Response, Request} from 'express';
import UserModel from '../../models/User.model';

const deleteUser = async (req: Request, res: Response) => {
    const { UID } = req.body;

    if(!UID){ 
        res.json({message: "Bad request"});
        return;
    }
    try {
        await UserModel.deleteOne({UID: UID});
        res.json({message: "User deleted sucessfully."});
    }
    catch(err) {
        console.log(err);
        res.json({message: "Failed to delete User."});
    }
}
export default deleteUser;