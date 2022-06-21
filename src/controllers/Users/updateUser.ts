import {Response, Request} from 'express';
import UserModel from '../../models/User.model';


const updateUser = async (req: Request, res: Response) => {
    const { UID, args } = req.body;

    try {
        const foundUser: any = await UserModel.findOne({UID: UID});
        args.email && (foundUser.user.email = args.email);
        args.password && (foundUser.user.password = args.password);
        
        await foundUser.save();
        res.json({message: "User updated."});
        

    } catch(err) {
        console.log(err);
        res.json({error: "Failed to update User."});
    }
}
export default updateUser;