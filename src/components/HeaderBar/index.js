import React from 'react'
import classNames from 'classnames'
import styles from './index.scss'
const HeaderBar = (props) => (
  <header className={styles.header}>
    <div className={styles.top_bar}>
      <div className={styles.abs_m}></div>
      <div className={styles.abs_l}>
        <a href="javascript:;" className={styles['msg-box']}>
          <div className={styles.circle}></div>
        </a>
      </div>
      <div className={styles.abs_r}>
        <a href="javascript:;" className={classNames(styles.btn, styles.search)}></a>
      </div>
    </div>
  </header>
)

export default HeaderBar
