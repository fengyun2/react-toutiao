import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "dva/router";
import styles from "./index.scss";
class TopMenuBar extends React.Component {
  toChannels = () => {
    this.props.history.push({
      pathname: "/channels",
      query: {
        page: 2,
        name: "channels"
      }
    });
  };
  render() {
    const top_bar = this.props.top_bar;
    return (
      <div className={styles.top_menu_bar}>
        <div className={styles.top_menu_more}>
          <div className={styles.list_shadow} />
          <a href="javascript:;" className={styles.more_btn}>
            <span className={styles.cross} onClick={this.toChannels} />
          </a>
        </div>
        <div className={styles.top_menu_list}>
          {top_bar.map(item => (
            <a href="javascript:;" className={styles.btn} key={item.id}>
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
