import React from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { setFilter } from 'store/users/usersSlice';
import { dropdownStyles } from './Dropdown.styled';

const options = [
  { value: 'showAll', label: 'Show All' },
  { value: 'follow', label: 'Follow' },
  { value: 'followings', label: 'Followings' },
];

const Dropdown = () => {
  const dispatch = useDispatch();

  const handleFilterChange = selectedOption => {
    dispatch(setFilter(selectedOption.value));
  };

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
