import React from "react";
import "./Footer.scss";
import {
  footerHeader,
  footerNavigation,
  footerNavigationAbout,
  footerNavigationConnected,
} from "../../data/footer";

export default function Footer() {
  return (
    <footer className='footer-container'>
      <div className='container desktop'>
        <div className='footer-header'>
          {footerHeader.map((data) => (
            <div key={data.id}>
              <img src={require(`../../img/${data.logo}`)} alt={data.name} />
              <h3>{data.name}</h3>
              <h5>{data.address}</h5>
              <p>
                <span>Phone: </span>
                {data.phone}
              </p>
              <p>
                <span>Email: </span>
                {data.email}
              </p>
            </div>
          ))}
        </div>
        <div className='footer-navigation'>
          <h3> Navigation</h3>
          <ul>
            {footerNavigation.map((data) => (
              <li key={data.id}>
                <a href={data.ahref}>{data.link}</a>
              </li>
            ))}
          </ul>
        </div>{" "}
        <div className='footer-about'>
          <h3> About</h3>
          <ul>
            {footerNavigationAbout.map((data) => (
              <li key={data.id}>
                <a href={data.ahref}>{data.link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className='footer-connected'>
          <h3> Stay Connected</h3>
          <ul>
            {footerNavigationConnected.map((data) => (
              <li key={data.id}>
                <img
                  className={data.id === 2 && "twitter"}
                  src={require(`../../img/${data.icon}`)}
                  alt={data.link}
                />
                <a href={data.ahref}>{data.link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className='footer-copyright'>
          <h3>Copyright© 2022. Siphome Smart home LLC. </h3>
        </div>
      </div>
    </footer>
  );
}
