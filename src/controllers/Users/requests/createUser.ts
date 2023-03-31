import {Response, Request} from 'express';
import {v4 as uuid} from 'uuid';
import UserModel from '../../../utilities/models/mongoose/User.model';
import bcrypt from 'bcrypt';

const createUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    //Check if all the information is offered and valid.
    if (!email || !password) {
        res.json({error: "Failed to create user."});
        return;
    }

    //Check if User already exist.
    const user = await UserModel.findOne( {"user.email": email}).clone();
    if(user) {
        res.status(400).json({error: "User already exist."});
        return;
    }
    //Add new user.
    const newUser = new UserModel({
        UID: uuid(),
        user: { 
            email,
            password: await bcrypt.hash(password, 10)
        }
    });
    try {
        await newUser.save();
        res.status(200).json({message: "User created sucessfully."});
    } catch(err) {
        res.status(400).json({error: "Failed to create user."});
    }
}

export default createUser;