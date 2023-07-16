import { configureStore } from '@reduxjs/toolkit';
import { pokemons } from './pokemonsSlice';
import { pokemonData } from './pokemonDataSlice';
export const store = configureStore({
  reducer: {
    pokemons,
    pokemonData,
  },
});
