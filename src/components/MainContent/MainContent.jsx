import './MainContent.scss';

import AppList from '../AppList/AppList';
import Filter from '../Filter/Filter';
import { Pagination } from '../Pagination/Pagination';

function MainContent() {
  return (
    <main className='main'>
      <Filter />
      <AppList />
      <Pagination />
    </main>
  );
}

export default MainContent;
