import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Settings from './pages/settings';
import Navbar from './components/Navbar';
import DefaultStyles from './components/DefaultStyles';
import AppWrapper from './components/AppWrapper';
import { NavbarItemStyled }  from './components/NavbarItem/NavbarItem.style';
import './App.css'


function App() {

  return (
    <>
      <DefaultStyles />
      <AppWrapper>
        <BrowserRouter>
          <Navbar>
            <NavbarItemStyled to="./" className='nav-item'>Home</NavbarItemStyled>
            <Link to="./settings" className='nav-item'>Settings</Link>
          </Navbar>
          <div className='app-content'>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AppWrapper>
    </>
  )
}

export default App
