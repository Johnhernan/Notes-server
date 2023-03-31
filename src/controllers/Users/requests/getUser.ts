import {Response, Request} from 'express';
import UserModel from '../../../utilities/models/mongoose/User.model';
import bcrypt from 'bcrypt';

const getUser = async (req: any, res: Response) => {
    const { email, password } = req.query;
    console.log(req, 'req')
    console.log(req.body, 'body')
    console.log(req.query, 'query')
    if(!email || !password) {
        res.json({error: "Bad Request"});
        return;
    }
    try {
        const user = await UserModel.findOne( {"user.email": email}).clone();
        const passwordCorrect = await bcrypt.compare(password as string, user?.user.password as string);
        console.log(passwordCorrect)
        if(passwordCorrect)
            res.json(user);
        else 
            res.status(200).json({error: "user not found"});
    } catch (err) {
        res.status(400).json({error: "user not found"});
    }
}

export default getUser;