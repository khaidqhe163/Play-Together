import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setUserInformation, userInfor } from './features/userSlice'
import ResetPassword from './components/ResetPassword';
function App() {
  const dispatch = useDispatch();
  const userInfo = useSelector(userInfor);
  useEffect(() => {
    autoLogin();
  }, [])
  const autoLogin = async () => {
    try {
      if (userInfo === null) {
        const autoLogin = await axios.get('http://localhost:3008/account/autologin', {
          withCredentials: true,
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        dispatch(setUserInformation(autoLogin.data))
      }
      else {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element=<Home />></Route>
          <Route path='/login' element=<Login />></Route>
          <Route path='/register' element=<Register />></Route>
          <Route path='/resetpassword' element=<ResetPassword />></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
