import React, { useEffect, useState, useRef } from 'react';
import './AppList.scss';
import useFetch from '../../hooks/useFetch';
import { Card, List, Tag } from 'antd';

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

function AppList() {
  const [itemsArr, setItemsArr] = useState([]);
  const { data, isLoading, isError, setUrl } = useFetch(
    'https://pokeapi.co/api/v2/pokemon'
  );

  const mounted = useRef(false);

  useEffect(() => {
    const func = async () => {
      if (data) {
        for (let item of data) {
          const r = await fetch(item.url);
          const m = await r.json();
          setItemsArr((current) => [...current, m]);
        }
      }
    };

    if (mounted.current) {
      func();
    }
    mounted.current = true;
  }, [data]);
  return (
    <section className='card-list'>
      <div className='card-list__wrapper'>
        {isLoading && <p>Loading...</p>}
        {isLoading || (
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
            dataSource={itemsArr}
            renderItem={(item) => (
              <List.Item>
                <Card
                  title={item.name}
                  hoverable
                  bodyStyle={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                  cover={
                    <img
                      alt='example'
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
              </List.Item>
            )}
          />
        )}
      </div>
    </section>
  );
}

export default AppList;
