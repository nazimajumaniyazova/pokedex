import './MainContent.scss';

import Filter from '../Filter/Filter';
import { Pagination } from '../Pagination/Pagination';
import CardList from '../CardList/CardList';

function MainContent() {
  return (
    <main className='main'>
      <Filter />
      <CardList />
      <Pagination />
    </main>
  );
}

export default MainContent;
