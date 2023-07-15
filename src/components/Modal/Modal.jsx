import { Modal } from 'antd';

function AppModal({
  isModalOpen,
  setIsModalOpen,
  item,
  img,
  abilities,
  types,
}) {
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {item && (
        <Modal
          title={<h3 className='card__title'>{item.name}</h3>}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <div className='card__img'>
            <img src={img} alt={item.name} />
          </div>
          <div className='card-property'>
            <span className='card-property__name'>Abilities:</span>
            {abilities.map((ability) => (
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
            {types.map((type) => (
              <span
                className='card-property__item'
                key={`${item.id}${type.type.name}`}
              >
                {type.type.name}
              </span>
            ))}
          </div>

          <div className='card-property'>
            <span className='card-property__name'>Habitat:</span>
            <span className='card-property__item'>{item.habitat.name}</span>
          </div>
          <div className='card-property'>
            <span className='card-property__name'>Color:</span>
            <span className='card-property__item'>{item.color.name}</span>
          </div>
          <div className='card-property'>
            <span className='card-property__name'>Generation:</span>
            <span className='card-property__item'>{item.generation.name}</span>
          </div>
          <div className='card-property'>
            <span className='card-property__name'>Shape:</span>
            <span className='card-property__item'>{item.shape.name}</span>
          </div>
        </Modal>
      )}
    </>
  );
}

export { AppModal as Modal };
