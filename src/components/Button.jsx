import React from 'react'
import style from "./../css/Button.module.css";

// "fas fa-pen-square" edit
// "fas fa-plus-square" add
// "fas fa-minus-square" delete
// "fas fa-window-close" close
// "fas fa-search" search

const Button = ({ onHandleClick, icon, caption, disabled, big }) => {

  return (
    <button title={caption} className={`${style.container} ${disabled && style.disabled}`} onClick={onHandleClick}>
      {icon && <i className={`${style.icon} ${icon} ${big && style.big}`}></i>}
      {caption && caption}
    </button>
  )
}

export default Button
