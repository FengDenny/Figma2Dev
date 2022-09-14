import React, { useState } from "react";
import "./Mobile.scss";

export default function MobileMenu(props) {
  return (
    <>
      <div className='d-flex-row justify-space-between'>
        <h2 className='menu-header'>{props.header}</h2>
        <button className='btn-close' onClick={props.close}>
          Close
        </button>
      </div>
      <nav className='nav-mobile '>
        <ul className='nav-mobile-ul'>
          {props.data.map((data) => {
            const { id, link, ahref } = data;
            return (
              <li className='nav-mobile-li' key={id}>
                <a href={ahref}>{link}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className='btn-nav d-flex-row justify-space-between'>
        <button className='btn-left' onClick={props.leftBtnClick}>
          {props.leftBtn}
        </button>
        <button className='btn-right' onClick={props.rightBtnClick}>
          {props.rightBtn}
        </button>
      </div>
    </>
  );
}
