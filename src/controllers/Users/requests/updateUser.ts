import {Response, Request} from 'express';
import UserModel from '../../../utilities/models/mongoose/User.model';


const updateUser = async (req: Request, res: Response) => {
    const { UID, args } = req.body;

    try {
        const foundUser: any = await UserModel.findOne({UID: UID});
        args.email && (foundUser.user.email = args.email);
        args.password && (foundUser.user.password = args.password);
        
        await foundUser.save();
        res.status(200).json({message: "User updated."});
        
    } catch(err) {
        res.status(400).json({error: "Failed to update User."});
    }
}
export default updateUser;