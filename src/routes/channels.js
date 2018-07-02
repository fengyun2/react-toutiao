import React from "react";
import classNames from 'classnames'
import {connect} from "dva";
import styles from "./channels.scss";
class Channels extends React.Component {
  state = {
    showMask: false
  }
  addChannel = (id) => {
    const {top_bar_len} = this.props.list_article;
    if (top_bar_len >= 16) {
      this.setState({showMask: true})
      return false;
    }
    this
      .props
      .dispatch({type: "list_article/addChannel", id})
  }
  delChannel = (id) => {
    const {top_bar_len} = this.props.list_article;
    if (top_bar_len === 16) {
      this.setState({showMask: false})
    }
    this
      .props
      .dispatch({type: "list_article/delChannel", id})
  }
  goBack = () => {
    this
      .props
      .history
      .push({pathname: '/'});
  }
  render() {
    const {top_bar} = this.props.list_article;
    return (
      <div className={styles.channelsContainer}>
        <div className={styles.toolbar}>
          <span className={styles.title}>
            <a href="javascript:;">频道管理</a>
          </span>
          <span className={styles.backBtn}>
            <a href="javascript:;" onClick={this.goBack}></a>
          </span>
        </div>

        <div className={classNames(styles.addControl, styles.controlBlock)}>
          <span className={styles.controlTitle}>点击删除以下频道</span>
          <ul className={styles.controlDetail}>
            {top_bar.map(item => (!item.del && <li
              key={item.id}
              className={classNames(styles.channelFigure, {
              [styles.tuijian]: item.tag === '__all__'
            })}>
              <a href="javascript:;" onClick={() => this.delChannel(item.id)}>{item.title}</a>
            </li>))}

          </ul>
        </div>

        <div className={classNames(styles.addControl, styles.controlBlock)}>
          <span className={styles.controlTitle}>
            {!this.state.showMask && <span>点击添加以下频道</span>}
            {this.state.showMask && <span className={styles.mask}>最多16个频道，请先删除一些</span>}
          </span>
          <ul className={styles.controlDetail}>
            {top_bar.map(item => (item.del && <li key={item.id} className={classNames(styles.channelFigure)}>
              <a href="javascript:;" onClick={() => this.addChannel(item.id)}>{item.title}</a>
            </li>))}
          </ul>
        </div>
      </div>
    );
  }
}

// export default Channels;
export default connect(({list_article}) => ({list_article}))(Channels);
