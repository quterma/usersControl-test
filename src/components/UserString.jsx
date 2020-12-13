import React from 'react'
import style from "./../css/UserString.module.css";

const UserString = ({ firstName, secondName, lastName }) => {
  return (
    <div className={style.container}>
      {firstName} {secondName} {lastName}
    </div>
  )
}

export default UserString
