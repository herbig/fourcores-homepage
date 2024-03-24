import { Image, BoxProps, Flex, IconButton } from '@chakra-ui/react';
import air from '../../assets/air.png';
import earth from '../../assets/earth.png';
import fire from '../../assets/fire.png';
import water from '../../assets/water.png';
import { Elem, SetCode, basicSiteIds } from '../../common/model/SorceryCard';
import { useState } from 'react';
import { BoosterCard } from '../../common/model/BoosterCard';
import { v4 as uuid } from 'uuid';

interface Props extends BoxProps {
    setCode: SetCode;
    onClickElem: (site: BoosterCard) => void;
}

export function SiteAdder({setCode, onClickElem, ...props}: Props) {

  const [airClicks, setAirClicks] = useState<number>(0);
  const [earthClicks, setEarthClicks] = useState<number>(0);
  const [fireClicks, setFireClicks] = useState<number>(0);
  const [waterClicks, setWaterClicks] = useState<number>(0);

  const handleClick = (siteIds: number[], current: number, setter: React.Dispatch<React.SetStateAction<number>>) => {
    current++;
    setter(current);
    onClickElem({id: uuid(), isFoil: false, details: { id: siteIds[current % 3] }});
  };

  const basicSites = basicSiteIds[setCode];

  return (
    <Flex mt='0.8vw' me='0.8vw' flexDir='column' {...props}>
      <IconButton onClick={() => handleClick(basicSites[Elem.Earth], earthClicks, setEarthClicks)} w='2.5vw' h='20%' icon={<Image w='2vw' h='2vw' src={earth} />} aria-label='Add Earth Site' variant='ghost' borderRadius='0' />
      <IconButton onClick={() => handleClick(basicSites[Elem.Fire], fireClicks, setFireClicks)} w='2.5vw' h='20%' icon={<Image w='2vw' h='2vw' src={fire} />} aria-label='Add Fire Site' variant='ghost' borderRadius='0' />
      <IconButton onClick={() => handleClick(basicSites[Elem.Water], waterClicks, setWaterClicks)} w='2.5vw' h='20%' icon={<Image w='2vw' h='2vw' src={water} />} aria-label='Add Water Site' variant='ghost' borderRadius='0' />
      <IconButton onClick={() => handleClick(basicSites[Elem.Air], airClicks, setAirClicks)} w='2.5vw' h='20%' icon={<Image w='2vw' h='2vw' src={air} />} aria-label='Add Air Site' variant='ghost' borderRadius='0' />
      <IconButton onClick={() => {}} w='2vw' h='20%' aria-label='Screenshot' variant='ghost' borderRadius='0' />
    </Flex>
  );
}
