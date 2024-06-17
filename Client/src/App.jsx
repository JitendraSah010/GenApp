import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Service from './pages/Service';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Logout from './pages/Logout';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='*' element={ <NotFound/> }  />
      </Routes>
    </>
  )
}

export default App
