import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { Home, Settings } from './pages';
import Navbar from './components/NavBar/Navbar';
import NavbarItem from './components/NavbarItem';
import { SectionTitle } from './components/NavbarItem/NavbarItem';
import DefaultStyles from './components/DefaultStyles';
import AppWrapper from './components/AppWrapper';
import ContentWrapper from './components/ContentWrapper';
import { Col } from 'react-grid-system';
import { Icon } from './components/Icon/Icon';

import { faFileAlt, faBook, faUsers, faChartBar, faRocket, faCog } from '@fortawesome/free-solid-svg-icons';


function App() {

  return (
    <BrowserRouter>
      <DefaultStyles />
      <AppWrapper>
          <Col xs={12} lg={3}>
            <Navbar>
              <SectionTitle>
                <img src="src/assets/icons/Tesla.png" alt="Logo" width="100" />
              </SectionTitle>
              <NavbarItem to="./" icon={faFileAlt}> Reports</NavbarItem>
              <NavbarItem to="/settings" icon={faBook}>Library</NavbarItem>
              <NavbarItem to="./" icon={faUsers}>People</NavbarItem>
              <NavbarItem to="./" icon={faChartBar}>Activities</NavbarItem>
              <SectionTitle>Support</SectionTitle>
              <NavbarItem to="./" icon={faRocket}>Get Started</NavbarItem>
              <NavbarItem to="./" icon={faCog}>Settings</NavbarItem>
              <SectionTitle>FAQ</SectionTitle>
            </Navbar>
          </Col>
          <Col lg={9}>
            <ContentWrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </ContentWrapper>
          </Col>
      </AppWrapper>
    </BrowserRouter>
  )
}

export default App
