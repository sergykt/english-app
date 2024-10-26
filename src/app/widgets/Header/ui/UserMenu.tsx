'use client';

import { type MouseEvent, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Menu, MenuItem, Typography, IconButton, Avatar, Stack } from '@mui/material';
import { LanguageSwitcher } from '@/shared/ui/LanguageSwitcher';
import { settingsList } from '../const/menuList';

export const UserMenu = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (e: MouseEvent<HTMLElement>) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Stack direction='row' sx={{ flexGrow: 0, alignItems: 'center', gap: 1, ml: 'auto' }}>
      <LanguageSwitcher locale={locale} />
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} aria-label='Open settings'>
        <Avatar alt='Avatar' />
      </IconButton>
      <Menu
        sx={{ mt: '45px' }}
        id='settings-menu'
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settingsList.map((setting) => (
          <MenuItem key={setting.title} onClick={handleCloseUserMenu}>
            <Typography sx={{ textAlign: 'center' }}>{t(setting.title)}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Stack>
  );
};
