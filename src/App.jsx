import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Settings from './pages/settings';
import Navbar from './components/Navbar';


import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <div className='app-layout'>
          <Navbar>
            <Link to="./" className='nav-item'>Home</Link>
            <Link to="./settings" className='nav-item'>Settings</Link>
          </Navbar>
          <div className='app-content'>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>




    </>
  )
}

export default App
