import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import SchoolIcon from '@mui/icons-material/School';
import UserMenu from './UserMenu';
import { NavMenu } from './NavMenu';
import MobileNavMenu from './MobileNavMenu';
import { Logo } from './Logo';

export const Header = () => {
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <MobileNavMenu />
          <SchoolIcon sx={{ mr: 1 }} />
          <Logo />
          <NavMenu />
          <UserMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
