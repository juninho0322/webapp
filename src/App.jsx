import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { Home, Form } from './pages';
import { Col, Hidden } from 'react-grid-system';
import { faFileAlt, faBook, faUsers, faChartBar, faRocket, faCog } from '@fortawesome/free-solid-svg-icons';
import Text from './components/Text';
import Image from './components/Image';
import Navbar from './components/NavBar/Navbar';
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
              <Hidden sm md>
                <Image src={LogoTesla} alt="Test Logo"  width="100px" marginbottom="30px" />
              </Hidden>
              <Navbar.NavbarItem to="./" icon={faFileAlt}> Reports</Navbar.NavbarItem>
              <Navbar.NavbarItem to="/forms" icon={faBook}>Forms</Navbar.NavbarItem>
              <Navbar.NavbarItem to="./" icon={faUsers}>People</Navbar.NavbarItem>
              <Navbar.NavbarItem to="./" icon={faChartBar}>Activities</Navbar.NavbarItem>
              <Hidden md sm>
                <Text>Support</Text>
              </Hidden>
              <Navbar.NavbarItem to="./" icon={faRocket}>Get Started</Navbar.NavbarItem>
              <Navbar.NavbarItem to="./" icon={faCog}>Settings</Navbar.NavbarItem>
              <Hidden sm md>
                <Text>FAQ</Text>
              </Hidden>
            </Navbar>
          </Col>
          <Col lg={9}>
            <ContentWrapper padding="0 15px 0 15px">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/forms" element={<Form />} />
              </Routes>
            </ContentWrapper>
          </Col>
      </AppWrapper>
    </BrowserRouter>
  )
}

export default App
