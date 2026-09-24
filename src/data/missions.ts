export interface Mission {
  id: string;
  worldId: string;
  title: string;
  description: string;
  xpReward: number;
  order: number;
  locked: boolean;
}

export const missions: Mission[] = [
  {
    id: "hartlandia-1",
    worldId: "hartlandia",
    title: "Leer je emoties kennen",
    description: "Voltooi opdrachten en verzamel badges.",
    xpReward: 20,
    order: 1,
    locked: false,
  },
  {
    id: "hartlandia-2",
    worldId: "hartlandia",
    title: "Wat voel jij vandaag?",
    description: "Herken emoties bij jezelf en anderen.",
    xpReward: 20,
    order: 2,
    locked: false,
  },
  {
    id: "hartlandia-3",
    worldId: "hartlandia",
    title: "Rekenen met schelpen",
    description: "Los sommen op met de schelpen van het strand.",
    xpReward: 25,
    order: 3,
    locked: true,
  },
];
