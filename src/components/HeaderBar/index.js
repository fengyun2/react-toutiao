import React from "react";
import classNames from "classnames";
import styles from "./index.scss";
class HeaderBar extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.top_bar}>
          <div className={styles.abs_m}>
            <a href="#" className={classNames(styles.refresh_title, styles.btn)}/>
            <div className={styles["refreshBtn-container"]}>
              <i className={styles.refresh_btn}/>
            </div>
          </div>
          <div className={styles.abs_l}>
            <a href="javascript:;" className={styles["msg-box"]}>
              <div className={styles.circle}/>
            </a>
          </div>
          <div className={styles.abs_r}>
            <a href="javascript:;" className={classNames(styles.btn, styles.search)}/>
          </div>
        </div>
      </header>
    )
  }
}

export default HeaderBar;
