import { Box, Container, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

export const HomePage = () => {
  const t = useTranslations('HomePage');

  return (
    <Box
      component='section'
      id='hero'
      sx={{
        backgroundImage: "url('/pictures/learning.webp')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100%',
      }}
    >
      <Container maxWidth='xl' sx={{ height: '100%' }}>
        <Stack
          sx={{
            maxWidth: '500px',
            height: '100%',
            minHeight: 'calc(100dvh - var(--header-height))',
            ml: 'auto',
            mr: { xs: 'auto', md: 0 },
            justifyContent: 'center',
          }}
        >
          <Typography variant='h4' component='h1' sx={{ py: 4, color: '#0FFF50' }}>
            {t('title')}
          </Typography>
          <Typography sx={{ color: '#fff', fontSize: '1.25rem', pb: 4 }}>
            {t('subtitle')}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
