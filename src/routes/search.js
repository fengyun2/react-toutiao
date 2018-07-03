import React from 'react'
import {connect} from "dva";
import classNames from 'classnames'
import styles from './search.scss'
import SearchHeader from '../components/SearchHeader'
class Search extends React.Component {
  state = {
    curSearchUrl: '/search/',
    curSearchKey: 'keyword',
    curSearchType: 'toutiao',
    showBackdrop: false,
    action_chooser_class: {
      [styles.action_chooser]: true,
      [styles.action_toutiao]: true,
      [styles.action_baidu]: false,
      [styles.action_shenma]: false
    }
  }
  goBack = () => {
    this
      .props
      .history
      .push({pathname: "/", query: {}});
  }
  componentDidMount() {
    this.getHotWords()
  }
  getHotWords() {
    this
      .props
      .dispatch({type: "search/getHotWords"});
  }
  chooseAction = (type, fromType) => {
    const searchUrls = {
      baidu: "http://m.baidu.com/s",
      toutiao: "/search/",
      shenma: "http://m.yz.sm.cn/s"
    }
    /*     const searchFroms = {
      baidu: "1007976a",
      toutiao: fromType,
      shenma: "100041"
    } */
    const searchKeys = {
      baidu: "word",
      toutiao: "keyword",
      shenma: "q"
    }
    const params = {
      showBackdrop: !this.state.showBackdrop
    }
    if (type) {
      params.curSearchKey = searchKeys[type]
      params.curSearchUrl = searchUrls[type]
      params.curSearchType = type;
    }
    this.setState(params)
  }
  render() {
    const {hot_words} = this.props.search
    return (
      <div className={styles.searchContainer}>
        <SearchHeader goBack={this.goBack}/>
        <div className={styles.search_form_box}>
          <form ref={el => this.search_form = el} className={styles.search_form}>
            <div className={styles.search_content}>
              <a
                href="javascript:;"
                className={classNames(styles.action_chooser, {
                [styles[`action_${this.state.curSearchType}`]]: true
              })}
                onClick={this.chooseAction}></a>
              <div className={styles.arrow_down}></div>
              <input
                ref={el => this.keyword = el}
                className={styles.search_input}
                name={this.state.curSearchKey}
                type="search"
                placeholder='请输入搜索关键词'/>
            </div>

            <div
              className={classNames(styles.action_navigation, {
              [styles.active]: this.state.showBackdrop
            })}>
              <div className={styles.arrow_up_shadow}></div>
              <div className={styles.arrow_up}></div>
              <ul className={styles.navigation_categories}>
                <li>
                  <a
                    href="javascript:;"
                    className={styles.toutiao}
                    onClick={() => this.chooseAction('toutiao')}>新闻</a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className={styles.shenma}
                    onClick={() => this.chooseAction('shenma')}>神马</a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className={styles.baidu}
                    onClick={() => this.chooseAction('baidu')}>百度</a>
                </li>
              </ul>
            </div>
          </form>
        </div>

        <content className={styles.search_tips}>
          <div className={styles.hot_words}>
            <ul
              className={classNames(styles.toutiao, {
              [styles.active]: this.state.curSearchKey === 'keyword' && !this.state.showBackdrop
            })}>
              {hot_words && hot_words.map((item, index) => (
                <li key={index}>
                  <a className={styles.hot_words_link} href={item.detailUrl}>{item.title}</a>
                </li>
              ))}
            </ul>
            <ul
              className={classNames(styles.shenma, {
              [styles.active]: this.state.curSearchKey === 'q' && !this.state.showBackdrop
            })}>
              {hot_words && hot_words.map((item, index) => (
                <li key={index}>
                  <a className={styles.hot_words_link} href={item.detailUrl}>{item.title}</a>
                </li>
              ))}
            </ul>
            <ul
              className={classNames(styles.baidu, {
              [styles.active]: this.state.curSearchKey === 'word' && !this.state.showBackdrop
            })}>
              {hot_words && hot_words.map((item, index) => (
                <li key={index}>
                  <a className={styles.hot_words_link} href={item.detailUrl}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.list_content}></div>
          <div className={styles.list_bottom}></div>
        </content>

        <div
          className={classNames(styles.backdrop, {
          [styles.active]: this.state.showBackdrop
        })}
          onClick={this.chooseAction}></div>
      </div>
    )
  }
}

// export default Search
export default connect(({search}) => ({search}))(Search);
