import React from "react";
import PropTypes from "prop-types";
import { connect } from "dva";
import classNames from "classnames";
import styles from "./IndexPage.scss";
import HeaderBar from "../components/HeaderBar";
import TopMenuBar from "../components/TopMenuBar";
class IndexPage extends React.Component {
  componentDidMount() {
    this.fetchNews();
  }

  fetchNews(params = {}) {
    this.props.dispatch({
      type: "list_article/getNews",
      payload: params
    });
  }

  render() {
    const { top_bar, news, has_more } = this.props.list_article;
    console.log("====================================");
    console.log("news: ", news);
    console.log("====================================");
    return (
      <div className={styles.indexContainer}>
        <HeaderBar />

        <div className={styles.main}>
          <TopMenuBar top_bar={top_bar} />
          <span />
          <div className={styles.content}>
            <div className={styles["feed-list-container"]}>
              <div className={styles.list_content}>
                {news.map((item, index) => (
                  <section
                    className={classNames(
                      styles.has_actions,
                      styles.middle_mode
                    )}
                    key={index}
                  >
                    <a
                      href="javascript:;"
                      className={classNames(styles.article_link, "clearfix")}
                    >
                      <div
                        className={classNames(styles.item_detail, styles.desc)}
                      >
                        <h3
                          className={classNames(
                            styles.title,
                            "dotdot",
                            "line3",
                            styles["image-margin-right"]
                          )}
                        >
                          {item.title}
                        </h3>
                        <div className={styles.item_info}>
                          <span
                            className={classNames(
                              styles.stick_label,
                              styles.space
                            )}
                          >
                            置顶
                          </span>
                          <span
                            className={classNames(styles.src, styles.space)}
                          >
                            {item.media_name}
                          </span>
                          <span
                            className={classNames(styles.cmt, styles.space)}
                          >
                            评论 {item.comment_count}
                          </span>
                          <span className={styles.time}>{item.datetime}</span>
                        </div>
                      </div>
                      <div className={styles.list_img_holder}>
                        <img src="https://p3.pstatp.com/list/pgc-image/1530323372889f6fabab981" />
                      </div>
                    </a>
                  </section>
                ))}
                {/* <section
                  className={classNames(styles.has_actions, styles.middle_mode)}
                >
                  <a
                    href="javascript:;"
                    className={classNames(styles.article_link, "clearfix")}
                  >
                    <div
                      className={classNames(styles.item_detail, styles.desc)}
                    >
                      <h3
                        className={classNames(
                          styles.title,
                          "dotdot",
                          "line3",
                          styles["image-margin-right"]
                        )}
                      >
                        习近平眼中的合格党员
                      </h3>
                      <div className={styles.item_info}>
                        <span
                          className={classNames(
                            styles.stick_label,
                            styles.space
                          )}
                        >
                          置顶
                        </span>
                        <span className={classNames(styles.src, styles.space)}>
                          人民网
                        </span>
                        <span
                          className={classNames(styles.cmt, styles.space)}
                        />
                      </div>
                    </div>
                    <div className={styles.list_img_holder}>
                      <img src="https://p3.pstatp.com/list/pgc-image/1530323372889f6fabab981" />
                    </div>
                  </a>
                </section> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
/* function IndexPage({ dispatch, list_article }) {
  const { top_bar } = list_article;
  return (
    <div className={styles.indexContainer}>
      <HeaderBar />

      <div className={styles.main}>
        <TopMenuBar top_bar={top_bar} />
        <span />
        <div className={styles.content}>
          <div className={styles["feed-list-container"]}>
            <div className={styles.list_content}>
              <section
                className={classNames(styles.has_actions, styles.middle_mode)}
              >
                <a
                  href="javascript:;"
                  className={classNames(styles.article_link, "clearfix")}
                >
                  <div className={classNames(styles.item_detail, styles.desc)}>
                    <h3
                      className={classNames(
                        styles.title,
                        "dotdot",
                        "line3",
                        styles["image-margin-right"]
                      )}
                    >
                      习近平眼中的合格党员
                    </h3>
                    <div className={styles.item_info}>
                      <span
                        className={classNames(styles.stick_label, styles.space)}
                      >
                        置顶
                      </span>
                      <span className={classNames(styles.src, styles.space)}>
                        人民网
                      </span>
                      <span className={classNames(styles.cmt, styles.space)} />
                    </div>
                  </div>
                  <div className={styles.list_img_holder}>
                    <img src="https://p3.pstatp.com/list/pgc-image/1530323372889f6fabab981" />
                  </div>
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} */

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

export default connect(({ list_article }) => ({ list_article }))(IndexPage);
