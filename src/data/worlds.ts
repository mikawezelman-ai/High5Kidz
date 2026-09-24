export interface World {
  id: string;
  name: string;
  icon: string;
  description: string;
  isLocked: boolean;
}

export const worlds: World[] = [
  {
    id: "hartlandia",
    name: "Hartlandia",
    icon: "🏔️",
    description: "Ontdek je emoties en leer erover praten.",
    isLocked: false,
  },
  {
    id: "memoria",
    name: "Memoria",
    icon: "📚",
    description: "Train je geheugen met leuke opdrachten.",
    isLocked: true,
  },
  {
    id: "reflectoria",
    name: "Reflectoria",
    icon: "🌳",
    description: "Denk na over jezelf en anderen.",
    isLocked: true,
  },
  {
    id: "imperfectionia",
    name: "Imperfectionia",
    icon: "🔥",
    description: "Leer dat fouten maken mag.",
    isLocked: true,
  },
];
