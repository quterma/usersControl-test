import React, { useState } from 'react';
import style from "./../css/Search.module.css";
import Button from './Button';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/usersControlSlice';


const Search = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const onHandleChange = (e) => setSearch(e.currentTarget.value);
  const onHandleKeyDown = (e) => {
    e.key === 'Enter' && updateFilter();
    e.keyCode === 27 && setSearch("");
  }

  const updateFilter = () => {
    dispatch(setFilter({ search, status: null }));
    setSearch("");
  }

  return (
    <div className={style.container}>
      <input
        role="searchbox"
        placeholder="Search user..."
        aria-label="User Search"
        className={style.input}
        value={search}
        onChange={onHandleChange}
        onKeyDown={onHandleKeyDown}
      ></input>
      <Button onHandleClick={updateFilter} icon="fas fa-search" />
    </div>
  )
}

export default Search
