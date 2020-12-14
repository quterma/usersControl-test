import React from 'react';
import style from "./../css/Main.module.css";
import { useSelector } from 'react-redux';
import { selectUsers } from '../redux/usersControlSlice';
import UsersList from './UsersList';
import UserPage from './UserPage';
import UserForm from './UserForm';

const Main = ({ mainMode }) => {
  const users = useSelector(selectUsers);
  const userId = mainMode.id && mainMode.id;
  
  return (
    <main className={style.container}>
      {mainMode.mode === "usersList" && <UsersList users={users} />}
      {mainMode.mode === "userPage" && <UserPage user={users[userId]} />}
      {mainMode.mode === "userForm" && <UserForm user={users[userId]} />}
    </main>
  )
}

export default Main
