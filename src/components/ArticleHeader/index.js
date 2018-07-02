import React from 'react'
import classNames from 'classnames'
import {dateFormat} from '../../utils/tool'
import styles from './index.scss'

const ArticleHeader = (props) => (
  <div className={classNames(styles.article_header)}>
    <h1 className={styles.article_title}>{props.article.title}</h1>
    <div className={styles['article-author']}>
      <span className={styles.avatar}>
        {props.article.media_user && props.article.media_user.avatar_url && <img className={styles.avatar_image} src={props.article.media_user.avatar_url}/>}
        <span className={styles.avatar_mask}></span>
      </span>
      <span className={styles.article_info}>
        <div>
          <span className={styles['article-author-name']}>{props.article.source}</span>
        </div>
        <div>
          <span className={styles['article-publish-time']}>{dateFormat(props.article.publish_time)}</span>
        </div>
      </span>
      <a href="javascript:;" className={styles['favor-btn']}>关注</a>
    </div>
  </div>
)

export default ArticleHeader
