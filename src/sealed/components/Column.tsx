import { Text, BoxProps, Flex } from '@chakra-ui/react';
import { Card } from '../../common/component/Card';
import { BoosterCard } from '../../common/model/BoosterCard';

interface Props extends BoxProps {
  cards: BoosterCard[];
}

export function Column({cards, ...props}: Props) {
  return (
    <Flex direction='column'>
      <Text align='center' as='b'>{cards.length === 0 ? '' : cards.length}</Text>
      <Flex
        w='9vw'
        direction='column'
        sx={{
          // overlap all items except the first one
          '& > *:not(:first-of-type)': {
            mt: '-10.8vw !important'
          }
        }}
        {...props}
      >
        {
          cards.map(card => (
            <Card key={card.id} card={card.details} foil={card.isFoil} />
          ))
        }
      </Flex>
    </Flex>
  );
}