import React, { useState, useEffect } from 'react';
import style from "./../css/Main.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { activateEditMode, selectFilter, selectEditMode, selectUsers } from '../redux/usersControlSlice';
import UserList from './UserList';

const Main = () => {
  
  return (
    <main className={style.container}>
      <UserList />
    </main>
  )
}

export default Main
