import { Text, Button, Card, Image, Link, SimpleGrid, VStack, useToast, Skeleton, Box } from '@chakra-ui/react'
import axios from 'axios';
import { useState } from 'react';

interface Booster {
  foilIndex: number;
  cards: Card[];
}

interface Card {
  id: string;
  name: string;
}

export function App() {
  const [boosterInfo, setBoosterInfo] = useState<{requestNum: number, booster: Booster}>();
  const [loading, setLoading] = useState(false);

  const errorToast = useToast()
  const fetchBooster = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://fourcores.xyz/api/boosters?setCode=bet&count=1');
      setBoosterInfo({ requestNum: boosterInfo?.requestNum ?  boosterInfo.requestNum++ : 1, booster: response.data[0] });
    } catch (error) {
      errorToast({
        title: 'Oops!',
        description: "Something's up, please try again.",
        status: 'error',
        duration: 2000,
        isClosable: false,
      })
    } finally {
      setLoading(false);
    }
  };

  return (
    <VStack padding={"8rem 4rem 8rem 4rem"} spacing='1rem'>
      <Text fontSize='xx-large'>
        Coming Soon...
      </Text>
      <Text>
        A collection of community built <Link color='teal' isExternal href='https://sorcerytcg.com/'>Sorcery TCG</Link> software projects.
      </Text>
      <Text>
        But while you're here, you might as well crack a Beta booster.
      </Text>
      <Button onClick={fetchBooster} disabled={loading}>
        {loading ? 'Loading...' : 'Crack Booster'}
      </Button>
      <SimpleGrid columns={[2,3,4,5]} spacing={4}>
        {boosterInfo?.booster.cards.map((card, index) => (
          <Box key={boosterInfo.requestNum + card.id} position="relative">
            <Image src={`https://sorcery-api.s3.amazonaws.com/${card.id}.png`} />
            <Skeleton
              hidden={index !== boosterInfo.booster.foilIndex}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "0.9rem"
              }}
              speed={2}
            />
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  )
}
