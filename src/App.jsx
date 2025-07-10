import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { Main, Settings } from './pages';
import Navbar from './components/NavBar/Navbar';
import DefaultStyles from './components/DefaultStyles';
import AppWrapper from './components/AppWrapper';
import ContentWrapper from './components/ContentWrapper';
import NavbarItemStyled from './components/NavbarItem';



function App() {

  return (
    <>
      <DefaultStyles />
      <AppWrapper>
        <BrowserRouter>
          <Navbar>
            <NavbarItemStyled to="./">Home</NavbarItemStyled>
            <NavbarItemStyled to="/settings">Settings</NavbarItemStyled>
          </Navbar>
          <ContentWrapper>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </ContentWrapper>
        </BrowserRouter>
      </AppWrapper>
    </>
  )
}

export default App
