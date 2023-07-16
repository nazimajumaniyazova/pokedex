import './Card.scss';

import { useState } from 'react';
import { Card, Tag } from 'antd';

import { Modal } from '../Modal/Modal';
import { defineTagColor } from '../../helpers/defineTagColor';

function AppCard({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Card
        title={<h3 className='card__title'>{item.name}</h3>}
        hoverable
        className='card'
        onClick={showModal}
        bodyStyle={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
        cover={
          <img
            alt={item.name}
            src={item.sprites?.front_default}
            style={{ width: '150px', margin: '0 auto' }}
          />
        }
      >
        <div className='card-property'>
          <span className='card-property__name'>Abilities:</span>
          {item.abilities?.map((ability) => (
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
          {item.types?.map((type) => (
            <Tag
              color={defineTagColor(type.type.url)}
              key={`${item.id}${type.type.name}`}
            >
              {type.type.name}
            </Tag>
          ))}
        </div>
      </Card>
      {isModalOpen && (
        <Modal
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
          itemID={item.id}
          img={item.sprites.front_default}
        />
      )}
    </>
  );
}

export { AppCard as Card };
