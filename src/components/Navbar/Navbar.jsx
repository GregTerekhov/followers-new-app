import { useLocation } from 'react-router-dom';
import { Dropdown } from 'components';
import { NavigationLink } from 'styles/button.styled';
import { HomeIcon, NavItem, NavList, TweetIcon } from './navbar.styled';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav>
      <NavList>
        <NavItem>
          <NavigationLink to="/">
            <HomeIcon />
            Home
          </NavigationLink>
        </NavItem>
        <NavItem>
          <NavigationLink to="/tweets">
            <TweetIcon />
            Tweets
          </NavigationLink>
        </NavItem>
        {!isHomePage && (
          <NavItem>
            <Dropdown />
          </NavItem>
        )}
      </NavList>
    </nav>
  );
};

export default Navbar;
