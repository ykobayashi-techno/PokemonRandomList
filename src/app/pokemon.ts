export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    back_female: string,
    back_shiny_female: string,
    back_default: string,
    front_female: string,
    back_shiny: string,
    front_default: string,
    front_shiny: string
  };
}
