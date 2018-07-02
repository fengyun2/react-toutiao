import React from "react";
import PropTypes from "prop-types";
import {connect} from "dva";
import classNames from "classnames";
import {dateFormat} from '../utils/tool'
import styles from "./IndexPage.scss";
import HeaderBar from "../components/HeaderBar";
import TopMenuBar from "../components/TopMenuBar";
class IndexPage extends React.Component {
  componentDidMount() {
    this.fetchNews({tag: '__all__'});
  }

  fetchNews = (params = {}) => {
    this
      .props
      .dispatch({type: "list_article/getNews", payload: params});
  }
  renderListImage(item) {
    let ListImageHtml = '';
    if (item.has_image && item.image_list.length) {
      ListImageHtml = `<div className={styles.list_image}>
        <ul className='clearfix'>`;
      item
        .image_list
        .forEach((img_item, index) => {
          ListImageHtml += "<li key=" + index + " className={styles.list_img_holder}><img src={" + img_item.url + "} /></li>"
        })
      ListImageHtml += '</ul></div>';
    }
    return ListImageHtml
  }
  render() {
    const {top_bar, news, tag} = this.props.list_article;
    return (
      <div className={styles.indexContainer}>
        <HeaderBar/>

        <div className={styles.main}>
          <TopMenuBar top_bar={top_bar} tag={tag} fetchNews={this.fetchNews}/>
          <span/>
          <div className={styles.content}>
            <div className={styles["feed-list-container"]}>
              <div className={styles.list_content}>
                {news.map((item, index) => (
                  <section
                    className={classNames(styles.has_actions, {
                    [styles.middle_mode]: item.image_url
                  })}
                    key={index}>
                    <a href="javascript:;" className={classNames(styles.article_link, "clearfix")}>
                      <div
                        className={classNames(styles.item_detail, {
                        [styles.desc]: item.image_url
                      })}>
                        <h3
                          className={classNames(styles.title, "dotdot", "line3", styles["image-margin-right"])}>
                          {item.title}
                        </h3>
                        {item.has_image && item.image_list.length
                          ? (
                            <div className={styles.list_image}>
                              <ul className='clearfix'>
                                {item
                                  .image_list
                                  .map((img_item, index) => (
                                    <li key={index} className={styles.list_img_holder}><img src={img_item.url}/></li>
                                  ))}
                              </ul>
                            </div>
                          )
                          : null}
                        {item.large_mode && item.large_image_url && (
                          <div
                            className={classNames(styles.list_img_holder_large, styles.list_img_holder_large_fix)}>
                            <img src={item.large_image_url}/>
                          </div>
                        )}
                        <div className={styles.item_info}>

                          {item.label && item.label !== '广告' && (
                            <span className={classNames(styles.stick_label, styles.space)}>
                              {item.label}
                            </span>
                          )}
                          {item.hot === 1 && (
                            <span className={classNames(styles.hot_label, styles.space)}>
                              热
                            </span>
                          )}
                          {item.label === '广告' && (
                            <span className={classNames(styles.stick_label, styles.space)}>广告</span>
                          )}
                          <span className={classNames(styles.src, styles.space)}>
                            {item.media_name}
                          </span>
                          <span className={classNames(styles.cmt, styles.space)}>
                            评论 {item.comment_count}
                          </span>
                          <span className={styles.time}>{dateFormat(item.datetime)}</span>
                        </div>
                      </div>
                      {item.image_url && (
                        <div className={styles.list_img_holder}>
                          <img src={item.image_url}/>
                        </div>
                      )}
                    </a>
                  </section>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

IndexPage.propTypes = {
  list_article: PropTypes.object.isRequired
};

/* function mapStateTopProps(state) {
  const { news, tag, has_more } = state.list_article
  return {
    news,
    tag,
    has_more
  }
} */

export default connect(({list_article}) => ({list_article}))(IndexPage);
