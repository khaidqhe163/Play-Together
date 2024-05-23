import Home from "../components/Home"
import Login from "../components/Login"
import Register from "../components/Register"
import StoryPage from "../pages/StoryPage"

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
    },
    {
        path: '/stories',
        element: StoryPage
    }
]

export default {
    routes
}