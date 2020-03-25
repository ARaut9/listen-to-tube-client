import React from 'react';
import styles from './AudioMetadata.module.scss';
import PlaceholderThumb from '../../assets/thumb.png';

const AudioMetadata = () => {
  return (
    <div className={styles.container}>
      <img
        src={PlaceholderThumb}
        alt='video thumbnail'
        className={styles.thumb}
      />
      <h2 className={styles.title}>[No Song Playing]</h2>
      <h3 className={styles.author}>[Unknown]</h3>
    </div>
  );
};

export default AudioMetadata;
