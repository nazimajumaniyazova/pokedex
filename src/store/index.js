import { configureStore } from '@reduxjs/toolkit';
import { pokemons } from './pokemonsSlice';

export const store = configureStore({
  reducer: {
    pokemons,
  },
});
