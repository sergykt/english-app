import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import SchoolIcon from '@mui/icons-material/School';
import { UserMenu } from './UserMenu';
import { NavMenu } from './NavMenu';
import { MobileNavMenu } from './MobileNavMenu';
import { Logo } from './Logo';

export const Header = () => {
  return (
    <AppBar position='fixed' sx={{ top: 0, left: 0, right: 0 }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters variant='dense' sx={{ py: 0.5 }}>
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
