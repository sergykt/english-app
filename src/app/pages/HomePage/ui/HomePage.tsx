import { Header } from '@/widgets/Header';
import { Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

export const HomePage = () => {
  const t = useTranslations('HomePage');

  return (
    <>
      <Header />
      <Typography>{t('title')}</Typography>
    </>
  );
};
