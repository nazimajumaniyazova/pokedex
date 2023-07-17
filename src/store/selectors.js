import { createSelector } from '@reduxjs/toolkit';

export const selectPokemons = (state) => state.pokemons.pokemons;
export const selectFilterArray = (state) => state.filterArray.filterArray;

export const selectPokemonsByFilter = createSelector(
  [selectPokemons, selectFilterArray],
  (pokemons, filterArray) => {
    if (filterArray.length === 0) {
      return pokemons;
    }

    return pokemons.filter((pokemon) => {
      let count = 0;
      for (let i = 0; i < pokemon.types.length; i++) {
        if (filterArray.includes(pokemon.types[i].type.name)) {
          count += 1;
        }
      }
      if (count >= filterArray.length) {
        return true;
      } else {
        return false;
      }
    });
  }
);

export const selectPokemonsBySearchedName = createSelector(
  [selectPokemons, (_, name) => name],
  (pokemons, name) => {
    if (name === '') {
      return pokemons;
    }
    return pokemons.filter((pokemon) => pokemon.name === name);
  }
);
