import React from 'react'
import style from "./../css/UserPageField.module.css";

const UserPageField = ({ propertyKey, propertyValue }) => {

  return (
    <div className={style.container}>
      <div className={style.left}>{propertyKey}:</div><div className={style.right}>{propertyValue}</div>
    </div>
  )
}

export default UserPageField
