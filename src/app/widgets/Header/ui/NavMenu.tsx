'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Button, Box } from '@mui/material';
import { buildUrl } from '@/shared/lib/buildUrl';
import { pagesList } from '../const/menuList';

export const NavMenu = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pagesList.map((page) => (
        <Button
          key={page.title}
          component={Link}
          href={buildUrl(page.href, locale)}
          sx={{ my: 2, color: '#fff', display: 'block' }}
        >
          {t(page.title)}
        </Button>
      ))}
    </Box>
  );
};
