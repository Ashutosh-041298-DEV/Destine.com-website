import {Routes, Route} from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import HomePage from './HomePage/Homepage'
import Login from './LoginPage/Login'
import Reset from './LoginPage/Reset'
import Signup from './SignupPage/Signup'

export default function AllRoutes(){
    return(
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/reset' element={<Reset/>}/>
        </Routes>
    )
}