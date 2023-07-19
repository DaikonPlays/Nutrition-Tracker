import React from 'react';
import styles from '@/styles/styles.module.css';

function MyComponent() {
  return (
    <div className={`${styles.container} ${styles.customBackground}`}>
      <h1 className={styles.title}>Hello, Next.js!</h1>
      <p className={styles.text}>This is a nutrition tracking website.</p>
    </div>
  );
};

export default MyComponent;
