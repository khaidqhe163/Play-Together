import Home from "../components/Home"
import Login from "../components/Login"
import Register from "../components/Register"
const routes = [
    {
        path: '/',
        element: Home
    },
    {
        path: '/login',
        element: Login
    },
    {
        path: '/register',
        element: Register
    }
]

export default {
    routes
}