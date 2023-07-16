import './Filter.scss';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPokemonTypes } from '../../store/pokemonTypesSlice';
import Checkbox from '../Checkbox/Checkbox';
import { filterPokemonsByType } from '../../store/pokemonsSlice';

function Filter() {
  const { pokemonTypes, isLoading, error } = useSelector(
    (state) => state.pokemonTypes
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonTypes());
  }, [dispatch]);

  const [selectedTypes, setSelectedTypes] = useState([]);

  const filterHandler = (event) => {
    const nextSelectedTypes = event.target.checked
      ? [...selectedTypes, event.target.name]
      : selectedTypes.filter((t) => t !== event.target.name);
    setSelectedTypes(nextSelectedTypes);
    dispatch(filterPokemonsByType(selectedTypes));
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
