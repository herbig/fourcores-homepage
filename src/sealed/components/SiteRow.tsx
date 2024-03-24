import { Text, Flex, BoxProps, HStack } from '@chakra-ui/react';
import { Card } from '../../common/component/Card';
import { BoosterCard } from '../../common/model/BoosterCard';

interface Props extends BoxProps {
  cards: BoosterCard[];
}

export function SiteRow({cards, ...props}: Props) {
  return (
    <Flex align='center' {...props}>
      <HStack
        sx={{
        // overlap all items except the first one
          '& > *:not(:first-of-type)': {
            ms: '-7vw !important'
          }
        }}
      >
        {
          cards.map((card, index) => (
            <Card zIndex={cards.length - index} w='9vw' key={card.id} card={card.details} foil={card.isFoil} />
          ))
        }
      </HStack>
      <Text ms='0.8vw' as='b'>{cards.length === 0 ? '' : cards.length}</Text>
    </Flex>
  );
}