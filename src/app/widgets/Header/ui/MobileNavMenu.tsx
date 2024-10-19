'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, MenuItem, IconButton, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { buildUrl } from '@/shared/lib/buildUrl';
import { pagesList } from '../const/menuList';

const MobileNavMenu = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const t = useTranslations();
  const locale = useLocale();

  const handleOpenNavMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size='large'
        aria-label='account of current user'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleOpenNavMenu}
        color='inherit'
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id='menu-appbar'
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {pagesList.map((page) => (
          <MenuItem key={page.title} onClick={handleCloseNavMenu}>
            <Typography
              sx={{ textAlign: 'center', textDecoration: 'none', color: 'inherit' }}
              component={Link}
              href={buildUrl(page.href, locale)}
            >
              {t(page.title)}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default MobileNavMenu;
