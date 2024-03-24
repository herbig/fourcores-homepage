import { Box, BoxProps, Image, Skeleton } from '@chakra-ui/react';
import { SorceryCard } from '../model/SorceryCard';

interface Props extends BoxProps {
  card: SorceryCard;
  foil: boolean;
}

export function Card({card, foil, ...props}: Props) {
  return (
    <Box 
      position='relative' 
      // sx={{
      //   '&:hover': {
      //     zIndex: 1000
      //   }
      // }}
      {...props}>
      <Image src={`https://sorcery-api.s3.amazonaws.com/${card.id}.png`} />
      {foil && 
          <Skeleton
            opacity='0.6'
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '0.5rem'
            }}
            speed={2} />
      }
    </Box>
  );
}