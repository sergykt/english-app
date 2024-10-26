import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { buildUrl } from '@/shared/lib/buildUrl';

interface GameCardProps {
  title: string;
  description: string;
  imgSrc: string;
  gameName: string;
}

export const GameCard = (props: GameCardProps) => {
  const { title, description, imgSrc, gameName } = props;
  const locale = useLocale();
  const gameUrl = buildUrl(`/games/${gameName}`, locale);

  return (
    <Card sx={{ maxWidth: 300, width: '100%' }}>
      <CardActionArea component={Link} href={gameUrl}>
        <CardMedia
          component='img'
          height='140'
          image={imgSrc}
          alt={title}
          sx={{ objectFit: 'contain' }}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div' textAlign='center'>
            {title}
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
