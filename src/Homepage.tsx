import { Text, Button, Link, SimpleGrid, VStack, useToast } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Card } from './common/component/Card';
import { useFetchBoosters } from './common/api/api';
import { SetCode } from './common/model/SorceryCard';

export function Homepage() {

  const errorToast = useToast();
  const { fetchBoosters, boosters, loading, error } = useFetchBoosters(SetCode.Beta, 1);

  useEffect(() => {
    if (error) {
      errorToast({
        title: 'Oops!',
        description: 'Something\'s up, please try again.',
        status: 'error',
        duration: 2000,
        isClosable: false
      });
    }
  }, [error, errorToast]);
  
  return (
    <VStack padding={'8rem 4rem 8rem 4rem'} spacing='1rem'>
      <Text fontSize='xx-large'>
        Coming Soon...
      </Text>
      <Text>
        A collection of community built <Link color='teal' isExternal href='https://sorcerytcg.com/'>Sorcery TCG</Link> software projects.
      </Text>
      <Text>
        But while you're here, you might as well crack a Beta booster.
      </Text>
      <Button onClick={fetchBoosters} disabled={loading}>
        {loading ? 'Loading...' : 'Crack Booster'}
      </Button>
      <SimpleGrid columns={[2,3,4,5]} spacing={4}>
        {boosters &&
            boosters[0].map(card => (
              <Card key={card.id} card={card.details} foil={card.isFoil} />
            ))
        }
      </SimpleGrid>
    </VStack>
  );
}
