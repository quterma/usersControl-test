import React from 'react';
import style from "./../css/Header.module.css";
import { useDispatch } from 'react-redux';
import { createUser, setMainMode, deleteUser } from '../redux/usersControlSlice';

import Search from './Search';
import Button from './Button';
import RadioPanel from './RadioPanel';

const Header = ({ mainMode }) => {
  const dispatch = useDispatch();

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
    dispatch(setMainMode({ mode: "usersList" }));    
  }

  return (
    <header className={style.container}>
      {mainMode.mode === "usersList" && <Search />}
      {mainMode.mode === "usersList" && <RadioPanel />}
      {mainMode.mode === "usersList" && <Button icon="fas fa-plus-square" onHandleClick={createNewUser} />}
      {mainMode.mode === "userPage" && <Button icon="fas fa-pen-square" onHandleClick={editThisUser} />}
      {mainMode.mode === "userPage" && <Button icon="fas fa-minus-square" onHandleClick={deleteThisUser} />}
      {mainMode.mode !== "usersList" && <Button icon="fas fa-window-close" onHandleClick={closeThisUser} />}
    </header>
  )
}

export default Header
