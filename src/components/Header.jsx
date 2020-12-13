import React from 'react';
import style from "./../css/Header.module.css";
import { useDispatch } from 'react-redux';
import { createUser } from '../redux/usersControlSlice';

import Search from './Search';
import Button from './Button';
import RadioPanel from './RadioPanel';

const Header = () => {
  const dispatch = useDispatch();
  const createNewUser = () => {
    dispatch(createUser());
  }
  return (
    <header className={style.container}>
      <Search />
      <RadioPanel />
      <Button icon="fas fa-plus-square" onHandleClick={createNewUser}/>
    </header>
  )
}

export default Header
