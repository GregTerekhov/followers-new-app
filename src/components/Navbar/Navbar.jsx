import { useLocation } from 'react-router-dom';
import { Dropdown } from 'components';
import { NavigationLink } from 'styles/button.styled';
import { NavItem, NavList, Navigation } from './navbar.styled';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
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
  );
};

export default Navbar;
