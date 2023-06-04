import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Dropdown from 'components/Dropdown/Dropdown';
import Footer from 'components/Footer/Footer';
import {
  Container,
  FooterEl,
  Header,
  NavList,
  Navigation,
  NavigationLink,
  Section,
} from './Layout.styled';

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Header>
        <Container>
          <Navigation>
            <NavList>
              <li>
                <NavigationLink to="/">Home</NavigationLink>
              </li>
              <li>
                <NavigationLink to="/tweets">Tweets</NavigationLink>
              </li>
              {!isHomePage && (
                <li>
                  <Dropdown />
                </li>
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
      <FooterEl>
        <Container>
          <Footer />
        </Container>
      </FooterEl>
    </>
  );
};

export default Layout;
