import React, { useEffect } from 'react';
import './AppList.scss';
import useFetch from '../../hooks/useFetch';
import { Card, List } from 'antd';

function AppList() {
  const { data, isLoading, isError, setUrl } = useFetch(
    'https://pokeapi.co/api/v2/pokemon-species'
  );

  return (
    <section className='card-list'>
      <div className='card-list__wrapper'>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Card title={item.name}>Card content</Card>
            </List.Item>
          )}
        />
      </div>
    </section>
  );
}

export default AppList;
