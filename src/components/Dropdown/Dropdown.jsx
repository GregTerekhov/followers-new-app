import React from 'react';
import Select from 'react-select';
import { useUsers } from 'hooks/useUsers';
import { dropdownStyles } from './Dropdown.styled';

const options = [
  { value: 'showAll', label: 'Show All' },
  { value: 'follow', label: 'Follow' },
  { value: 'followings', label: 'Followings' },
];

const Dropdown = () => {
  const { handleFilterChange } = useUsers();

  return (
    <>
      <Select
        options={options}
        onChange={handleFilterChange}
        styles={dropdownStyles}
      />
    </>
  );
};

export default Dropdown;
