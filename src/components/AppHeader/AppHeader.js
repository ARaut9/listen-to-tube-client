import React from 'react';
import styles from './AppHeader.module.scss';

const AppHeader = () => {
  return (
    <header className='App-header'>
      <h1 className={styles.logo}>
        <a href='/'>Listen to Tube</a>
      </h1>
    </header>
  );
};

export default AppHeader;
