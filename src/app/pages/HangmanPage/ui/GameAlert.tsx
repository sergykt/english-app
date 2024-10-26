import { useTranslations } from 'next-intl';
import { Alert } from '@mui/material';

interface GameOverAlertProps {
  mistakes: number;
  maxMistakes: number;
}

export const GameOverAlert = (props: GameOverAlertProps) => {
  const { mistakes, maxMistakes } = props;
  const t = useTranslations('GamesPage.hangman');

  const message = mistakes >= maxMistakes ? t('lost') : t('won');

  return (
    <Alert severity='info' sx={{ marginTop: 2 }}>
      {message}
    </Alert>
  );
};
