// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import Select from 'react-select';
// import { setFilter } from 'store/users/usersSlice';
// import { dropdownStyles } from './Dropdown.styled';
// import { useUsers } from 'hooks/useUsers';

// const options = [
//   { value: 'showAll', label: 'Show All' },
//   { value: 'follow', label: 'Follow' },
//   { value: 'followings', label: 'Followings' },
// ];

// const Dropdown = () => {
//   const { users, fetchUsers } = useUsers();
//   const dispatch = useDispatch();
//   const [noTweets, setNoTweets] = useState(false);

//   const handleFilterChange = selectedOption => {
//     if (selectedOption.value === 'showAll') {
//       setNoTweets(false);
//     } else {
//       const tweets = users.filter(user => user.value === selectedOption.value);
//       setNoTweets(tweets.length === 0);
//     }
//     dispatch(setFilter(selectedOption.value));
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, [fetchUsers]);

//   return (
//     <>
//       <Select
//         options={options}
//         onChange={handleFilterChange}
//         styles={dropdownStyles}
//       />
//       {noTweets && <p>Sorry, no tweets for your request. Try again</p>}
//     </>
//   );
// };

// export default Dropdown;

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
