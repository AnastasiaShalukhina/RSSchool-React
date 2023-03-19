import React from 'react';
import { Link } from 'react-router-dom';

import styles from './mainHeader.module.scss';

function MainHeader() {
  const headerClass: string = styles.header;
  const headerWrapperClass: string = styles.headerWrapper;

  return (
    <>
      <header className={headerClass}>
        <div className={headerWrapperClass}>
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
        </div>
      </header>
    </>
  );
}

export default MainHeader;
