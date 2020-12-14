import React from 'react'
import { useDispatch } from 'react-redux';
import { setMainMode } from '../redux/usersControlSlice';
import style from "./../css/UserString.module.css";

const UserString = ({ id, firstName, secondName, lastName }) => {
  const dispatch = useDispatch();

  const openThisUser = () => {
    dispatch(setMainMode({ mode: "userPage", id }));    
  }

  return (
    <div className={style.container} onDoubleClick={openThisUser}>
      {firstName} {secondName} {lastName}
    </div>
  )
}

export default UserString
