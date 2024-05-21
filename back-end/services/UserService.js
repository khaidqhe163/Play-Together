import User from '../models/User.js'
import bcrypt from 'bcryptjs'
var salt = bcrypt.genSaltSync(10);
const register = async (email, username, dob, gender, password) => {
    try {
        // const existEmail = await User.findOne({ email: email }).exec();
        // console.log(existEmail);
        // if (existEmail) {
        //     throw new Error("Your email has registered!");
        // }
        const hashPassword = bcrypt.hashSync(password, salt)
        await User.create({ email, username, dob, gender, password: hashPassword });
    } catch (error) {
        throw new Error(error.toString());
    }
}

const findUserByEmail = async (email) => {
    try {
        const existEmail = await User.findOne({ email: email }).exec();
        return existEmail
    } catch (error) {
        throw new Error(error.toString());
    }

}
export default {
    register,
    findUserByEmail
}