import React, { useState } from 'react';
import styles from './AppHeader.module.scss';
import URLForm from '../URLForm/URLForm';
import { Icon } from '@iconify/react';
import musicCircle from '@iconify/icons-mdi/music-circle';
import magnifyIcon from '@iconify/icons-mdi/magnify';
import closeIcon from '@iconify/icons-mdi/close';

const AppHeader = ({ query, handleQueryChange, handleSubmit }) => {
  const mq = window.matchMedia('(max-width: 768px)');
  const [formMinimized, setFormMinimized] = useState(true);

  const LOGO = (
    <h1 className={styles.logo}>
      <a href='/'>
        <Icon icon={musicCircle} className={styles.icon} />
        Listen to Tube
      </a>
    </h1>
  );

  const URLFORM = (
    <URLForm
      query={query}
      handleSubmit={handleSubmit}
      handleQueryChange={handleQueryChange}
    />
  );

  const DESKTOP = [LOGO, URLFORM];

  const MOBILE = (
    <>
      {formMinimized ? (
        <>
          {LOGO}
          <button onClick={() => setFormMinimized(false)}>
            <Icon icon={magnifyIcon} className={styles.icon} />
          </button>
        </>
      ) : (
        <>
          <button onClick={() => setFormMinimized(true)}>
            <Icon icon={closeIcon} className={styles.icon} />
          </button>
          {URLFORM}
        </>
      )}
    </>
  );

  return (
    <header className='App-header'>{mq.matches ? MOBILE : DESKTOP}</header>
  );
};

export default AppHeader;
