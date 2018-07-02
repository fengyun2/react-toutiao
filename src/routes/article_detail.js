import React from 'react'
import classNames from 'classnames'
import {connect} from "dva";
import styles from './article_detail.scss'
import ArticleHeader from '../components/ArticleHeader'
class ArticleDetail extends React.Component {
  componentDidMount() {
    const {id} = this.props.match.params
    if (id) {
      this
        .props
        .dispatch({type: "list_article/getArticle", id: id});
    }
  }
  render() {
    const {
      cur_article = {}
    } = this.props.list_article
    return (
      <div styles={styles['weixin-container']}>
        <article className={classNames(styles.article, styles['padding-side'])}>
          <ArticleHeader article={cur_article}/>
          <div
            id="article_content"
            className={styles.article_content}
            dangerouslySetInnerHTML={{
            __html: cur_article.content
          }}></div>
        </article>
      </div>
    )
  }
}

// export default ArticleDetail;
export default connect(({list_article}) => ({list_article}))(ArticleDetail);
