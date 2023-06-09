import { Outlet, useLocation } from 'react-router-dom';
import { Footer, Navbar } from 'components';
import { Header, Container, Section } from './layout.styled';

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Header>
        <Container>
          <Navbar />
        </Container>
      </Header>
      <main>
        <Section>
          <Container>
            <Outlet />
          </Container>
        </Section>
      </main>
      {!isHomePage && <Footer />}
    </>
  );
};

export default Layout;
