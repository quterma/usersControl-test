import React from 'react';
import style from "./../css/RadioPanel.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, selectFilter } from '../redux/usersControlSlice';
import Button from './Button';

const RadioPanel = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const status = filter.status;
  
  const updateFilter = (e) => {
    const status = e.currentTarget.title;
    dispatch(setFilter({ status, search: null }));
  }

  return (
    <div className={style.container}>
      <Button caption="all" onHandleClick={updateFilter} disabled={status === "all"}/>
      <div className={style.divider}></div>
      <Button caption="clients" onHandleClick={updateFilter} disabled={status === "clients"}/>
      <div className={style.divider}></div>
      <Button caption="admins" onHandleClick={updateFilter} disabled={status === "admins"}/>
      <div className={style.divider}></div>
      <Button caption="partners" onHandleClick={updateFilter} disabled={status === "partners"}/>
    </div>
  )
}

export default RadioPanel
