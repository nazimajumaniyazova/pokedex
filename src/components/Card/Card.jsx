import './Card.scss';
import { useState } from 'react';
import { Card, Tag, Spin } from 'antd';
import { Modal } from '../Modal/Modal';
import useFetch from '../../hooks/useFetch';
const colors = [
  'yellow',
  'magenta',
  'red',
  'volcano',
  'orange',
  'lime',
  'green',
  'cyan',
  'blue',
  'gold',
  'geekblue',
  'purple',
  'pink',
]; //13

const defineTagColor = (tagUrl) => {
  const arr = tagUrl.split('/');
  const tagId = arr[arr.length - 2];

  if (tagId < colors.length) {
    return colors[tagId];
  } else {
    return colors[Math.trunc((14 / colors.length) * 10)];
  }
};

function AppCard({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading, isError, setUrl } = useFetch();
  const showModal = (id) => {
    setIsModalOpen(true);
    setUrl(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
  };
  return (
    <>
      <Card
        title={<h3 className='card__title'>{item.name}</h3>}
        hoverable
        className='card'
        onClick={() => showModal(item.id)}
        bodyStyle={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
        cover={
          <img
            alt={item.name}
            src={item.sprites.front_default}
            style={{ width: '150px', margin: '0 auto' }}
          />
        }
      >
        <div className='card-property'>
          <span className='card-property__name'>Abilities:</span>
          {item.abilities.map((ability) => (
            <span
              className='card-property__item'
              key={`${item.id}${ability.ability.name}`}
            >
              {ability.ability.name}
            </span>
          ))}
        </div>
        <div className='card-property'>
          <span className='card-property__name'>Types:</span>
          {item.types.map((type) => (
            <Tag
              color={defineTagColor(type.type.url)}
              key={`${item.id}${type.type.name}`}
            >
              {type.type.name}
            </Tag>
          ))}
        </div>
      </Card>
      {isLoading || (
        <Modal
          setIsModalOpen={setIsModalOpen}
          item={data}
          isModalOpen={isModalOpen}
          img={item.sprites.front_default}
          abilities={item.abilities}
          types={item.types}
        />
      )}
    </>
  );
}

export { AppCard as Card };
