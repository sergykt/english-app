import { type ChangeEvent, memo, useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';
import { useTranslations } from 'next-intl';

interface GameControlsProps {
  onGuess: (letter: string) => void;
  onReset: () => void;
  gameOver: boolean;
}

export const GameControls = memo((props: GameControlsProps) => {
  const { onGuess, onReset, gameOver } = props;

  const t = useTranslations('Hangman');
  const [input, setInput] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value.slice(-1).toUpperCase());
  };

  const handleGuess = () => {
    if (input.length === 1) {
      onGuess(input);
      setInput('');
    }
  };

  return (
    <Stack spacing={2}>
      <TextField
        label={t('enterLetter')}
        value={input}
        onChange={handleInputChange}
        disabled={gameOver}
      />
      <Button variant='contained' onClick={handleGuess} disabled={gameOver || input.length !== 1}>
        {t('guess')}
      </Button>
      <Button variant='outlined' onClick={onReset}>
        {t('reset')}
      </Button>
    </Stack>
  );
});
