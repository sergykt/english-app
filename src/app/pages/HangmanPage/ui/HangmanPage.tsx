'use client';

import { useState, useEffect, useCallback } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { useTranslations } from 'next-intl';
import { WordDisplay } from './WordDisplay';
import { GameControls } from './GameControls';
import { GameOverAlert } from './GameAlert';

const words = ['REACT', 'JAVASCRIPT', 'NEXTJS', 'MATERIAL'];
const maxMistakes = 6;

export const HangmanPage = () => {
  const t = useTranslations('Hangman');
  const [word, setWord] = useState(words[0]);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [mistakes, setMistakes] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const isWon = word.split('').every((letter) => guesses.includes(letter));
    const isLost = mistakes >= maxMistakes;
    setGameOver(isWon || isLost);
  }, [guesses, mistakes, word]);

  const handleGuess = useCallback(
    (letter: string) => {
      if (word.includes(letter)) {
        setGuesses((prev) => [...prev, letter]);
      } else {
        setMistakes((prev) => prev + 1);
      }
    },
    [word],
  );

  const resetGame = useCallback(() => {
    setWord(words[0]);
    setGuesses([]);
    setMistakes(0);
    setGameOver(false);
  }, []);

  return (
    <Box component='section' id='hangman' sx={{ height: '100%' }}>
      <Stack
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          p: 2,
          boxSizing: 'border-box',
        }}
      >
        <Typography variant='h3' sx={{ mb: 6 }}>
          {t('title')}
        </Typography>
        <WordDisplay word={word} guesses={guesses} />
        <Typography variant='subtitle1' color='textSecondary' sx={{ mb: 2 }}>
          {t('mistakes')}: {mistakes} / {maxMistakes}
        </Typography>
        <GameControls onGuess={handleGuess} onReset={resetGame} gameOver={gameOver} />
        {gameOver && <GameOverAlert mistakes={mistakes} maxMistakes={maxMistakes} />}
      </Stack>
    </Box>
  );
};
