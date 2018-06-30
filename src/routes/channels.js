import React from "react";
import styles from "./channels.scss";
class Channels extends React.Component {
  render() {
    console.log("====================================");
    console.log(this.props.location.query);
    console.log("====================================");
    return (
      <div className={styles.channelsContainer}>
        <h2>频道管理</h2>
      </div>
    );
  }
}

export default Channels;
