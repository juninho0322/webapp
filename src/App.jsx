import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { Home, Settings } from './pages';
import { Col } from 'react-grid-system';
import { faFileAlt, faBook, faUsers, faChartBar, faRocket, faCog } from '@fortawesome/free-solid-svg-icons';
import Text  from './components/Text';
import { Img } from './components/Img/Img';
import Navbar from './components/NavBar/Navbar';
import NavbarItem from './components/NavbarItem';
import DefaultStyles from './components/DefaultStyles';
import AppWrapper from './components/AppWrapper';
import ContentWrapper from './components/ContentWrapper';
import LogoTesla from './assets/icons/Tesla.png';



function App() {

  return (
    <BrowserRouter>
      <DefaultStyles />
      <AppWrapper>
          <Col xs={12} lg={3}>
            <Navbar>
              <Img src={LogoTesla} alt="Test Logo" width="100" marginbottom="30px" >
              </Img>
              <NavbarItem to="./" icon={faFileAlt}> Reports</NavbarItem>
              <NavbarItem to="/settings" icon={faBook}>Library</NavbarItem>
              <NavbarItem to="./" icon={faUsers}>People</NavbarItem>
              <NavbarItem to="./" icon={faChartBar}>Activities</NavbarItem>
              <Text>Support</Text>
              <NavbarItem to="./" icon={faRocket}>Get Started</NavbarItem>
              <NavbarItem to="./" icon={faCog}>Settings</NavbarItem>
              <Text>FAQ</Text>
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
