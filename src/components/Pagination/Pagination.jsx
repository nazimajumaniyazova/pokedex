import { useSelector } from 'react-redux';
import './Pagination.scss';

import { Pagination } from 'antd';

const ITEMS_PER_PAGE = [10, 20, 50];
const itemRender = (_, type, originalElement) => {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
};

function AppPagination() {
  return (
    <div className='pagination'>
      <div className='pagination__wrapper'>
        <Pagination
          total={100}
          itemRender={itemRender}
          pageSizeOptions={ITEMS_PER_PAGE}
        />
      </div>
    </div>
  );
}

export { AppPagination as Pagination };
