import React from 'react';
import styles from './URLForm.module.scss';
import { Icon } from '@iconify/react';
import magnifyIcon from '@iconify/icons-mdi/magnify';

const URLForm = () => {
  return (
    <form className={styles.urlForm}>
      <div className={styles.inputContainer}>
        <input
          type='text'
          className={styles.urlInput}
          placeholder='Search or Enter URL of YouTube video'
        />
        <button type='submit' className={styles.submitBtn}>
          <Icon icon={magnifyIcon} />
        </button>
      </div>
    </form>
  );
};

export default URLForm;
