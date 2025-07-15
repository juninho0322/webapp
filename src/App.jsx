import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { Main, Settings } from './pages';
import Navbar from './components/NavBar/Navbar';
import NavItemWithIcon from './components/NavbarItem';
import { SectionTitle } from './components/NavbarItem/NavbarItem';
import DefaultStyles from './components/DefaultStyles';
import AppWrapper from './components/AppWrapper';
import ContentWrapper from './components/ContentWrapper';


function App() {

  return (
    <>
      <DefaultStyles />
      <AppWrapper>
        <BrowserRouter>
          <Navbar>
            <SectionTitle>Tesla</SectionTitle>
            <NavItemWithIcon to="./"> Reports</NavItemWithIcon>
            <NavItemWithIcon to="/settings">Library</NavItemWithIcon>
            <NavItemWithIcon to="./">People</NavItemWithIcon>
            <NavItemWithIcon to="./">Activities</NavItemWithIcon>
            <SectionTitle>Support</SectionTitle>
            <NavItemWithIcon to="./">Get Started</NavItemWithIcon>
            <NavItemWithIcon to="./">Settings</NavItemWithIcon>
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
