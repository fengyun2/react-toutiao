import React from 'react'
import styles from "./index.scss";

const SearchHeader = (props) => (
  <header className={styles.header}>
    <div className={styles.toolbar}>
      <span className={styles.title}>
        <a href="javascript:;">搜索</a>
      </span>
      <span className={styles.backBtn}>
        <a href="javascript:;" onClick={props.goBack}></a>
      </span>
    </div>
  </header>
)

export default SearchHeader
