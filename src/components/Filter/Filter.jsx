import './Filter.scss';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { fetchPokemonTypes } from '../../store/pokemonTypesSlice';
import Checkbox from '../Checkbox/Checkbox';
import { setFilterArray } from '../../store/filterArraySlice';
import { filterPokemonsByType } from '../../store/pokemonsSlice';
import { selectPokemonsByFilter } from '../../store/selectors';

function Filter() {
  const { pokemonTypes, isLoading, error } = useSelector(
    (state) => state.pokemonTypes
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonTypes());
  }, [dispatch]);

  const { filterArray } = useSelector((state) => state.filterArray);

  const filterHandler = (event) => {
    if (event.target.checked) {
      const tmp = [...filterArray, event.target.name];
      dispatch(setFilterArray(tmp));
    } else {
      const tmp = filterArray.filter((t) => t !== event.target.name);
      dispatch(setFilterArray(tmp));
    }
  };
  return (
    <section className='filter'>
      <div className='filter__wrapper'>
        <p>Filter by types: </p>
        {isLoading ? (
          <p>Loading filter</p>
        ) : error ? (
          <p>An error occurred: {error}. Can not load pokemon types</p>
        ) : (
          <>
            {pokemonTypes.map((type) => (
              <Checkbox
                item={type}
                key={type.name}
                filterHandler={filterHandler}
              />
            ))}
          </>
        )}
      </div>
    </section>
  );
}

export default Filter;
