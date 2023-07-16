import './Checkbox.scss';

import { useState } from 'react';

import { Tag } from 'antd';

import { defineTagColor } from '../../helpers/defineTagColor';

function Checkbox({ item, filterHandler }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked((prev) => !prev);
    filterHandler(e);
  };
  return (
    <label htmlFor={item.name}>
      <Tag
        color={
          isChecked
            ? `${defineTagColor(item.url)}-inverse`
            : defineTagColor(item.url)
        }
        className='filter__tag'
      >
        {item.name}
      </Tag>
      <input
        type='checkbox'
        name={item.name}
        id={item.name}
        className='filter__checkbox'
        onChange={(e) => handleCheckboxChange(e)}
      />
    </label>
  );
}

export default Checkbox;
