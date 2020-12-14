import React from 'react';
import style from "./../css/Header.module.css";
import { useDispatch } from 'react-redux';
import { createUser, setMainMode, deleteUser, selectUsers } from '../redux/usersControlSlice';
import Search from './Search';
import Button from './Button';
import RadioPanel from './RadioPanel';
import { useSelector } from 'react-redux';

const Header = ({ mainMode }) => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  // usersList mode
  const createNewUser = () => {
    dispatch(createUser());    
  }

  // userPage view
  const editThisUser = () => {
    dispatch(setMainMode({ mode: "userForm" }));    
  }
  const deleteThisUser = () => {
    dispatch(setMainMode({ mode: "usersList" }));    
    dispatch(deleteUser());    
  }
  // userPage and userForm view
  const closeThisUser = () => {
    if (!users[mainMode.id].login) dispatch(deleteUser()); 
    dispatch(setMainMode({ mode: "usersList" }));    
  }

  return (
    <header className={style.container}>
      {mainMode.mode === "usersList" && <Search />}
      {mainMode.mode === "usersList" && <RadioPanel />}
      {mainMode.mode === "usersList" && <Button icon="fas fa-plus-square" onHandleClick={createNewUser} big />}
      {mainMode.mode === "userPage" && <Button icon="fas fa-pen-square" onHandleClick={editThisUser} big />}
      {mainMode.mode === "userPage" && <Button icon="fas fa-minus-square" onHandleClick={deleteThisUser} big />}
      {mainMode.mode !== "usersList" && <Button icon="fas fa-window-close" onHandleClick={closeThisUser} big />}
    </header>
  )
}

export default Header
