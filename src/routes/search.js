import React from 'react'
import classNames from 'classnames'
import styles from './search.scss'
import SearchHeader from '../components/SearchHeader'
class Search extends React.Component {
  render() {
    return (
      <div className={styles.searchContainer}>
        <SearchHeader/>
        <div className={styles.search_form_box}>
          <form className={styles.search_form}>
            <div className={styles.search_content}>
              <a
                href="javascript:;"
                className={classNames(styles.action_chooser, styles.action_toutiao)}></a>
              <div className={styles.arrow_down}></div>
              <input
                className={styles.search_input}
                name='keyword'
                type="search"
                placeholder='请输入搜索关键词'/>
            </div>

            <div className={styles.action_navigation}>
              <div className={styles.arrow_up_shadow}></div>
              <div className={styles.arrow_up}></div>
              <ul className={styles.navigation_categories}>
                <li>
                  <a href="javascript:;" className={styles.toutiao}>新闻</a>
                </li>
                <li>
                  <a href="javascript:;" className={styles.shenma}>神马</a>
                </li>
                <li>
                  <a href="javascript:;" className={styles.baidu}>百度</a>
                </li>
              </ul>
            </div>
          </form>
        </div>

        <content className={styles.search_tips}>
          <div className={styles.hot_words}>
            <ul className={styles.toutiao}>
              <li>
                <a className={styles.hot_words_link} href="javascript:;">苹果新设备</a>
              </li>
            </ul>
          </div>
          <div className={styles.list_content}></div>
          <div className={styles.list_bottom}></div>
        </content>
      </div>
    )
  }
}

export default Search
