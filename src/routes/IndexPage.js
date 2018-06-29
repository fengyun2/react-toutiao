import React from 'react';
import {connect} from 'dva';
import styles from './IndexPage.scss';
import HeaderBar from '../components/HeaderBar'
function IndexPage() {
  return (
    <div className={styles.indexContainer}>
      <HeaderBar/>
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
