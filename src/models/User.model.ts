import {Schema, model} from 'mongoose';
import IUser from '../utilities/IUser';

const notebookSchema = new Schema({
    notebook: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: false},
    color: {type: String},
    favorite: {type: Boolean, required: true}
});

const noteSchema = new Schema({
    note: {type: String, required: true},
    notebookID: {type: String, required: true},
    title: {type: String, required: true},
    content: {type: String, required: true}
});

const schema = new Schema<IUser>({
    UID: {type: String, required: true},
    user: {
        email: {type: String, required: true},
        password: {type: String, required: true},
    },
    notebooks: [ notebookSchema ],
    notes: [ noteSchema ]
});

const UserModel = model<IUser>('User', schema);
export default UserModel;