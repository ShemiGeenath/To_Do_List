import Signup from "./pages/signup"
import router from './../../server/routes/auth';
import Home from './pages/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Router } from 'express';
import Login from "./pages/Login";

function App() {
  

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/register' element={<Signup/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
