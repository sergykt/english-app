import { Box, Container, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { GameCard } from './GameCard';
import { gamesList } from '../const/gamesList';

export const GamesPage = () => {
  const t = useTranslations('');

  return (
    <Box component='section' id='games' sx={{ height: '100%' }}>
      <Container maxWidth='xl' sx={{ height: '100%' }}>
        <Typography variant='h4' component='h1' sx={{ py: 4 }} textAlign='center'>
          {t('GamesPage.title')}
        </Typography>
        <Stack
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            p: 2,
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          {gamesList.map((game) => (
            <GameCard
              key={game.gameName}
              title={t(game.title)}
              description={t(game.description)}
              imgSrc={game.imgSrc}
              gameName={game.gameName}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};
