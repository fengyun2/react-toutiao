import React from "react";
import PropTypes from "prop-types";
import {withRouter} from "dva/router";
import classNames from 'classnames'
import styles from "./index.scss";
class TopMenuBar extends React.Component {
  toChannels = () => {
    this
      .props
      .history
      .push({
        pathname: "/channels",
        query: {
          page: 2,
          name: "channels"
        }
      });
  };
  changeNav = (tag) => {
    this
      .props
      .fetchNews({tag})
  }
  render() {
    const top_bar = this
      .props
      .top_bar
      .filter(item => !item.del);
    const tag = this.props.tag;
    return (
      <div className={styles.top_menu_bar}>
        <div className={styles.top_menu_more}>
          <div className={styles.list_shadow}/>
          <a href="javascript:;" className={styles.more_btn}>
            <span className={styles.cross} onClick={this.toChannels}/>
          </a>
        </div>
        <div className={styles.top_menu_list}>
          {top_bar.map(item => (
            <a
              href="javascript:;"
              className={classNames(styles.btn, {
              [styles.cur]: item.tag === tag
            })}
              key={item.id}
              onClick={() => this.changeNav(item.tag)}>
              {item.title}
            </a>
          ))}
        </div>
      </div>
    );
  }
}
TopMenuBar.propTypes = {
  top_bar: PropTypes.array.isRequired
};
export default withRouter(TopMenuBar);
