import React from 'react'
import style from "./../css/UserPageField.module.css";

const UserPageField = ({ propertyKey, propertyValue }) => {

  return (
    <li className={style.container}>
      {propertyKey}: {propertyValue}
    </li>
  )
}

export default UserPageField
