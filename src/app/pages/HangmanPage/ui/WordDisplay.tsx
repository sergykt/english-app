import { Typography, Stack } from '@mui/material';

interface WordDisplayProps {
  word: string;
  guesses: string[];
}

export const WordDisplay = (props: WordDisplayProps) => {
  const { word, guesses } = props;

  return (
    <Stack direction='row' sx={{ marginBottom: 2, gap: 2 }}>
      {word.split('').map((letter, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Typography key={index}>{guesses.includes(letter) ? letter : '_'}</Typography>
      ))}
    </Stack>
  );
};
