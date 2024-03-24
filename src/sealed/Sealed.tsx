import { Box, Flex, HStack, useToast } from '@chakra-ui/react';
import { Column } from './components/Column';
import { useFetchBoosters } from '../common/api/api';
import { useEffect, useState } from 'react';
import { SiteRow } from './components/SiteRow';
import { Elem, SetCode, basicSiteIds } from '../common/model/SorceryCard';
import { SiteAdder } from './components/SiteAdder';
import { BoosterCard } from '../common/model/BoosterCard';
import { v4 as uuid } from 'uuid';

export function Sealed({set}: {set: SetCode}) {

  const basicSites = basicSiteIds[set];
  const [cardGroups, setCardGroups] = useState<BoosterCard[][]>([[],[],[],[],[],[],[],[],[],[],[
    {id: uuid(), isFoil: false, details: {id: basicSites[Elem.Earth][0]}},
    {id: uuid(), isFoil: false, details: {id: basicSites[Elem.Fire][0]}},
    {id: uuid(), isFoil: false, details: {id: basicSites[Elem.Water][0]}},
    {id: uuid(), isFoil: false, details: {id: basicSites[Elem.Air][0]}}
  ]]);
  const errorToast = useToast();
  const { fetchBoosters, boosters, loading, error } = useFetchBoosters(set, 6);

  useEffect(() => {

    console.log('here!');

    if (loading) {
      // TODO loading UI
    } else if (error) {
      errorToast({
        title: 'Oops!',
        description: 'Something\'s up, please try refreshing.',
        status: 'error',
        duration: 2000,
        isClosable: false
      });
    } else if (boosters) {
      const newCardGroups = [...cardGroups];
      boosters.forEach((booster, index) => {
        newCardGroups[index] = booster;
      });
      setCardGroups(newCardGroups);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boosters, error, errorToast, loading]);

  useEffect(() => {
    fetchBoosters();
  }, [fetchBoosters]);

  return (
    <Box m='1.4vw'>
      <HStack align='start' spacing='0.8vw'>
        {cardGroups.slice(0, -1).map((cards, index) => (
          <Column key={index} cards={cards} />
        ))}
      </HStack>
      <Flex>
        <SiteAdder
          setCode={set}
          onClickElem={(site: BoosterCard) => {
            const newCardGroups = [...cardGroups];
            newCardGroups[10] = [site, ...newCardGroups[10]];
            setCardGroups(newCardGroups);
          }}
        />
        <SiteRow mt='0.8vw' cards={cardGroups[10]} />
      </Flex>
    </Box>
  );
}
  