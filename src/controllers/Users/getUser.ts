import {Response, Request} from 'express';
import UserModel from '../../models/User.model';

const getUser = async (req: Request, res: Response) => {
    const { email, password } = req.query;

    if(!email || !password) {
        res.json({message: "Bad Request"});
        return;
    }
    const user = await UserModel.findOne( {"user.email": email, "user.password": password}).clone();
    if(user) 
        res.json(user);
    else 
        res.status(400).json({message: "user not found"});
}
export default getUser;