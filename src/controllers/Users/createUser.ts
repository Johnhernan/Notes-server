import {Response, Request} from 'express';
import {v4 as uuid} from 'uuid';
import UserModel from '../../models/User.model';

const createUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    //Check if all the information is offered and valid.
    if (!email || !password) {
        res.json({message: "Failed to create user."});
        return;
    }
    //Check if User already exist.
    const user = await UserModel.findOne( {"user.email": email}).clone();
    if(user) {
        res.status(400).json({message: "User already exist."});
        return;
    }

    //Add new user.
    const newUser = new UserModel({
        UID: uuid(),
        user: { email, password }
    });
    try {
        await newUser.save();
        res.json({message: "User created sucessfully."});
    } catch(err) {
        console.log(err);
        res.json({message: "Failed to create user."});
    }
}

export default createUser;