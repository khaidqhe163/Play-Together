import { UserService } from "../services/index.js"

const register = async (req, res) => {
    try {
        const {
            email,
            username,
            dob,
            gender,
            password
        } = req.body;
        const existEmail = await UserService.findUserByEmail(email);
        if (existEmail) {
            return res.status(400).json({
                message: "Your email has registered!"
            })
        }
        await UserService.register(email, username, dob, gender, password);
        res.status(201).json({
            message: "Register successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: error.toString()
        });
    }
}
export default {
    register
}