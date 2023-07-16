import { configureStore } from '@reduxjs/toolkit';

import { pokemons } from './pokemonsSlice';
import { pokemonData } from './pokemonDataSlice';
import { pokemonTypes } from './pokemonTypesSlice';
import { filterArray } from './filterArraySlice';

export const store = configureStore({
  reducer: {
    pokemons,
    pokemonData,
    pokemonTypes,
    filterArray,
  },
});
