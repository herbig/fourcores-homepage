import { SorceryCard } from './SorceryCard';

export interface BoosterCard {
    id: string;
    isFoil: boolean;
    details: SorceryCard;
}