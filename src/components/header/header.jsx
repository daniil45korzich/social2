import React from 'react';
import h from './header.module.css';

const Header = () => {
    return (
        <div className={h.header}>
          <img src="https://автолого.рф/wp-content/uploads/bmw-logo-2020-grey.png" />
          <div className={h.logoName}>My social network</div>
        </div>
    );
}

export default Header;