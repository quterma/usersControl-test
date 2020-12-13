import React from 'react';
import UserString from './UserString';
import { useSelector } from 'react-redux';
import { selectFilter, selectUsers } from '../redux/usersControlSlice';

const UserList = () => {
  const filter = useSelector(selectFilter);
  const users = useSelector(selectUsers);

  // filtering and mapping users
  function filterUsers(obj, value) {
    function filterByStatus(status) {
      return Object.keys(obj).reduce((acc, val) => obj[val].status === status ? { ...acc, [val]: obj[val] } : acc, {});
    }
    function filterBySearch(search) {
      return Object.keys(obj).reduce((acc, val) => Object.values(obj[val]).map(v => String(v).toLowerCase()).includes(search) ? { ...acc, [val]: obj[val] } : acc, {});
    }
    if (value.search) return filterBySearch(value.search);
    if (value.status === "all") return obj;
    if (value.status) return filterByStatus(value.status);
    return [];
  }
  const filtered = filterUsers(users, filter);
  const mapped = Object.keys(filtered).map(userId => {
    const { firstName, secondName, lastName } = filtered[userId];
    return <UserString key={userId} id={userId} firstName={firstName} secondName={secondName} lastName={lastName} />
  });
  

  return mapped;
}

export default UserList;
