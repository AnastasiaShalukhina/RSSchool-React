import React from 'react';

import styles from './mainHeader.module.scss';

function MainHeader() {
  const headerClass: string = styles.header;
  const headerWrapperClass: string = styles.headerWrapper;

  return (
    <>
      <header className={headerClass}>
        <div className={headerWrapperClass}>
          <a href="/">Home</a>
          <a href="/about">About us</a>
        </div>
      </header>
    </>
  );
}

export default MainHeader;
