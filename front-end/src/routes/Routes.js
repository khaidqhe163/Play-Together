import Home from "../components/Home"
import HomePage from "../pages/HomePage"
import Login from "../components/Login"
import Register from "../components/Register"
import StoryPage from "../pages/StoryPage"
import SocialMediaLogin from "../components/SocialMediaLogin"
const routes = [
    {
        path: '/',
        element: Home
    },
    {
        path: '/home',
        element: HomePage 
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
    },
  {
        path: '/login-success/:token',
        element: SocialMediaLogin
    }
]

export default {
    routes
}