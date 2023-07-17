import './CardList.scss';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Spin } from 'antd';

import { Card } from '../Card/Card';
import { fetchPokemons } from '../../store/pokemonsSlice';
import { selectPokemons, selectPokemonsByFilter } from '../../store/selectors';

function CardList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemons({}));
  }, [dispatch]);
  const { isLoading, error } = useSelector((state) => state.pokemons);
  const pokemons = useSelector(selectPokemonsByFilter);

  return (
    <>
      <section className='card-list'>
        <div className='card-list__wrapper'>
          {isLoading ? (
            <Spin size='large' className='spin' />
          ) : error ? (
            <p>{error}</p>
          ) : (
            <List
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 4,
                xxl: 3,
              }}
              dataSource={pokemons}
              renderItem={(item) => (
                <List.Item>
                  <Card item={item} />
                </List.Item>
              )}
            />
          )}
        </div>
      </section>
    </>
  );
}

export default CardList;
