import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Settings from './pages/settings';

import './App.css'

function App() {
  

  return (
    <>
    <Router>
      <div className='app-layout'>
        <div className='menu'>
            <Link to="./" className='nav-item'>Home</Link>
            <Link to="./settings" className='nav-item'>Settings</Link>
        </div>
          
        <div className='app-content'>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
      
      
    
    
    </>
  )
}

export default App
