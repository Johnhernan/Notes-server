export default interface IUser {
    UID: String
    user: {
        email: String,
        password: String
    },
    notebooks: Array<Object>,
    notes: Array<Object>
}