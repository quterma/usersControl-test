import React from 'react';
import style from "./../css/UserPage.module.css";
import UserPageField from './UserPageField';

const UserPage = ({ user }) => {
  
  const mapped = Object.keys(user).map((propertyKey, i) => {
    // need to add some sorting ===========================================================
    const propertyValue = user[propertyKey];
    const key = String(i) + propertyKey;
    return <UserPageField key={key} propertyKey={propertyKey} propertyValue={propertyValue} />
  });
  
  return (
    <ul className={style.container}>
      {mapped}
    </ul>
  )
}

export default UserPage;
