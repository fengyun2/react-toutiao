// import {persistStore} from 'redux-persist'
import * as listArticleService from "../services/list_article";
export default {
  namespace : "list_article",

  state : {
    top_bar: [
      {
        id: 1,
        tag: "__all__",
        title: "推荐",
        sort: 1,
        del: false
      }, {
        id: 2,
        tag: "video",
        title: "视频",
        sort: 2,
        del: false
      }, {
        id: 3,
        tag: "news_hot",
        title: "热点",
        sort: 3,
        del: false
      }, {
        id: 4,
        tag: "news_society",
        title: "社会",
        sort: 4,
        del: false
      }, {
        id: 5,
        tag: "news_entertainment",
        title: "娱乐",
        sort: 5,
        del: false
      }, {
        id: 6,
        tag: "news_military",
        title: "军事",
        sort: 6,
        del: false
      }, {
        id: 7,
        tag: "news_tech",
        title: "科技",
        sort: 7,
        del: false
      }, {
        id: 8,
        tag: "news_car",
        title: "汽车",
        sort: 8,
        del: false
      }, {
        id: 9,
        tag: "news_sports",
        title: "体育",
        sort: 9,
        del: false
      }, {
        id: 10,
        tag: "news_finance",
        title: "财经",
        sort: 10,
        del: false
      }, {
        id: 11,
        tag: "news_world",
        title: "国际",
        sort: 11,
        del: false
      }, {
        id: 12,
        tag: "news_fashion",
        title: "时尚",
        sort: 12,
        del: false
      }, {
        id: 13,
        tag: 'news_game',
        title: '游戏',
        sort: 13,
        del: true
      }, {
        id: 14,
        tag: 'news_travel',
        title: '旅游',
        sort: 14,
        del: true
      }, {
        id: 15,
        tag: 'news_history',
        title: '历史',
        sort: 15,
        del: true
      }, {
        id: 16,
        tag: 'news_discovery',
        title: '探索',
        sort: 16,
        del: true
      }, {
        id: 17,
        tag: 'news_food',
        title: '美食',
        sort: 17,
        del: true
      }, {
        id: 18,
        tag: 'news_baby',
        title: '育儿',
        sort: 18,
        del: true
      }, {
        id: 19,
        tag: 'news_regimen',
        title: '养生',
        sort: 19,
        del: true
      }, {
        id: 20,
        tag: 'news_story',
        title: '故事',
        sort: 20,
        del: true
      }, {
        id: 21,
        tag: 'news_essay',
        title: '美文',
        sort: 21,
        del: true
      }
    ],
    tag: "__all__",
    top_bar_len: 12,
    has_more: true,
    news: [],
    cur_article: {}
  },

  subscriptions : {
    setup({dispatch, history}) {
      // eslint-disable-line
    }
  },

  effects : {
    *getNews({
      payload = {}
    }, {select, call, put}) {
      let {data} = yield call(listArticleService.getNews, payload);
      const {load_more} = payload;
      if (load_more) {
        const news = yield select(state => state.list_article.news)
        data = [
          ...news,
          ...data
        ]
      }
      yield put({
        type: "save",
        payload: {
          data,
          ...payload
        }
      });
    },
    *getArticle({
      id = null
    }, {call, put}) {
      const {data} = yield call(listArticleService.getArticle, id)
      yield put({type: 'saveArticle', payload: {
          data
        }})
    },
    *addChannel({
      id = null
    }, {select, call, put}) {
      const top_bar = yield select(state => state.list_article.top_bar)
      let top_bar_len = yield select(state => state.list_article.top_bar_len)
      if (top_bar_len >= 16) {
        return false
      }
      top_bar.some(item => {
        if (item.id === id) {
          item.del = false;
          return true
        }
        return false
      });
      top_bar_len++;
      yield put({
        type: 'saveTopBar',
        payload: {
          data: top_bar,
          top_bar_len
        }
      })
    },
    *delChannel({
      id = null
    }, {select, call, put}) {
      const top_bar = yield select(state => state.list_article.top_bar)
      let top_bar_len = yield select(state => state.list_article.top_bar_len)
      top_bar.some(item => {
        if (item.id === id) {
          item.del = true;
          return true
        }
        return false
      });
      top_bar_len > 0 && top_bar_len--;
      yield put({
        type: 'saveTopBar',
        payload: {
          data: top_bar,
          top_bar_len
        }
      })
    }
  },

  reducers : {
    save(state, {
      payload: {
        data: news,
        tag,
        has_more
      }
    }) {
      return {
        ...state,
        news,
        tag,
        has_more
      };
    },
    saveArticle(state, {
      payload: {
        data: cur_article
      }
    }) {
      return {
        ...state,
        cur_article
      };
    },
    saveTopBar(state, {
      payload: {
        data: top_bar,
        top_bar_len
      }
    }) {
      return {
        ...state,
        top_bar,
        top_bar_len
      }
    },
    saveTag(state, {
      payload: {
        data: tag
      }
    }) {
      return {
        ...state,
        tag
      }
    }
  }
};
