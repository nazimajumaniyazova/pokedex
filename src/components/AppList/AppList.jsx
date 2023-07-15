import React, { useEffect, useState, useRef } from 'react';
import './AppList.scss';
import useFetch from '../../hooks/useFetch';
import { List } from 'antd';
import { Card } from '../Card/Card';

function AppList() {
  const [itemsArr, setItemsArr] = useState([]);
  const { data, isLoading } = useFetch('https://pokeapi.co/api/v2/pokemon');

  const mounted = useRef(false);

  useEffect(() => {
    const func = async () => {
      if (data) {
        for (let item of data.results) {
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
    <>
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

export default AppList;
