
export enum Elem {
    Air = 'air',
    Earth = 'earth',
    Fire = 'fire',
    Water = 'water'
}

export enum SetCode {
    Beta = 'bet',
}

export const basicSiteIds = {
  [SetCode.Beta]: {
    [Elem.Air]: [678, 620, 720],
    [Elem.Earth]: [698, 854, 828],
    [Elem.Fire]: [553, 811, 812],
    [Elem.Water]: [559, 873, 880]
  }
};

// TODO flesh out the rest of this when needed
export interface SorceryCard {
    id: number;
}