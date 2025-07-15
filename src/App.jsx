import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { Main, Settings } from './pages';
import Navbar from './components/NavBar/Navbar';
import NavbarItem from './components/NavbarItem';
import { SectionTitle } from './components/NavbarItem/NavbarItem';
import DefaultStyles from './components/DefaultStyles';
import AppWrapper from './components/AppWrapper';
import ContentWrapper from './components/ContentWrapper';
import { Col } from 'react-grid-system';


function App() {

  return (
    <BrowserRouter>
      <DefaultStyles />
      <AppWrapper>
          <Col lg={3}>
            <Navbar>
              <SectionTitle>Tesla</SectionTitle>
              <NavbarItem to="./"> Reports</NavbarItem>
              <NavbarItem to="/settings">Library</NavbarItem>
              <NavbarItem to="./">People</NavbarItem>
              <NavbarItem to="./">Activities</NavbarItem>
              <SectionTitle>Support</SectionTitle>
              <NavbarItem to="./">Get Started</NavbarItem>
              <NavbarItem to="./">Settings</NavbarItem>
            </Navbar>
          </Col>
          <Col lg={9}>
            <ContentWrapper>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </ContentWrapper>
          </Col>
      </AppWrapper>
    </BrowserRouter>
  )
}

export default App
