import './MainContent.scss';

import AppList from '../AppList/AppList';
import Filter from '../Filter/Filter';

function MainContent() {
  return (
    <main className='main'>
      <Filter />
      <AppList />
    </main>
  );
}

export default MainContent;
