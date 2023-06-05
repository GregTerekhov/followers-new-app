import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Dropdown from 'components/Dropdown/Dropdown';
import Footer from 'components/Footer/Footer';
import {
  Container,
  NavItem,
  NavList,
  Navigation,
  Section,
} from './Layout.styled';
import { NavigationLink } from 'styles/Button.styled';
import { FooterEl, Header } from 'styles/HeadnFoot.styled';

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Header>
        <Container>
          <Navigation>
            <NavList>
              <NavItem>
                <NavigationLink to="/">Home</NavigationLink>
              </NavItem>
              <NavItem>
                <NavigationLink to="/tweets">Tweets</NavigationLink>
              </NavItem>
              {!isHomePage && (
                <NavItem>
                  <Dropdown />
                </NavItem>
              )}
            </NavList>
          </Navigation>
        </Container>
      </Header>
      <main>
        <Section>
          <Container>
            <Suspense fallback={<p>Loading...</p>}>
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </main>
      {!isHomePage && (
        <FooterEl>
          <Container>
            <Footer />
          </Container>
        </FooterEl>
      )}
    </>
  );
};

export default Layout;