import { configureStore } from '@reduxjs/toolkit';

import { pokemons } from './pokemonsSlice';
import { pokemonData } from './pokemonDataSlice';
import { pokemonTypes } from './pokemonTypesSlice';

export const store = configureStore({
  reducer: {
    pokemons,
    pokemonData,
    pokemonTypes,
  },
});
