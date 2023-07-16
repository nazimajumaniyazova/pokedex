import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Modal, Spin } from 'antd';

import { fetchPokemonData } from '../../store/pokemonDataSlice';

function AppModal({ setIsModalOpen, isModalOpen, itemID, img }) {
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { pokemonData, isLoading, error } = useSelector(
    (state) => state.pokemonData
  );
  console.log(pokemonData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonData(itemID));
  }, [itemID, dispatch]);

  const getModalTitle = () => {
    if (isLoading === false && error === null) {
      return pokemonData.name;
    }
    return '';
  };
  return (
    <>
      <Modal
        title={<h3 className='card__title'>{getModalTitle()}</h3>}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        {isLoading ? (
          <Spin size='large' className='spin' />
        ) : error ? (
          <p>An error occurred: {error}. Please update the page</p>
        ) : (
          <>
            <div className='card__img'>
              <img src={img} alt={pokemonData.name} />
            </div>
            <div className='card-property'>
              <span className='card-property__name'>Habitat:</span>
              <span className='card-property__item'>
                {pokemonData.habitat.name}
              </span>
            </div>
            <div className='card-property'>
              <span className='card-property__name'>Growth rate:</span>
              <span className='card-property__item'>
                {pokemonData.growth_rate.name}
              </span>
            </div>
            <div className='card-property'>
              <span className='card-property__name'>Color:</span>
              <span className='card-property__item'>
                {pokemonData.color.name}
              </span>
            </div>
            <div className='card-property'>
              <span className='card-property__name'>Generation:</span>
              <span className='card-property__item'>
                {pokemonData.generation.name}
              </span>
            </div>
            <div className='card-property'>
              <span className='card-property__name'>Shape:</span>
              <span className='card-property__item'>
                {pokemonData.shape.name}
              </span>
            </div>
          </>
        )}
      </Modal>
    </>
  );
}

export { AppModal as Modal };
