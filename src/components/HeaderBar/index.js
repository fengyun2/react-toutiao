import React from "react";
import {withRouter} from "dva/router";
import classNames from "classnames";
import styles from "./index.scss";
class HeaderBar extends React.Component {
  toSearch = () => {
    this
      .props
      .history
      .push({pathname: "/search", query: {}});
  }
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
            <a
              href="javascript:;"
              className={classNames(styles.btn, styles.search)}
              onClick={this.toSearch}/>
          </div>
        </div>
      </header>
    )
  }
}

export default withRouter(HeaderBar);
