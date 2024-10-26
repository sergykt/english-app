import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Typography } from '@mui/material';
import { buildUrl } from '@/shared/lib/buildUrl';
import { routes } from '@/shared/config/routes';

export const Logo = () => {
  const locale = useLocale();

  return (
    <Typography
      variant='h5'
      noWrap
      component={Link}
      href={buildUrl(routes.home, locale)}
      sx={{
        mr: 2,
        fontFamily: 'Helvetica',
        fontWeight: 700,
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      English App
    </Typography>
  );
};
