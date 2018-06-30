export default {
  namespace: "list_article",

  state: {
    top_bar: [
      { id: 1, tag: "__all__", title: "推荐", sort: 1 },
      { id: 2, tag: "video", title: "视频", sort: 2 },
      { id: 3, tag: "news_hot", title: "热点", sort: 3 },
      { id: 4, tag: "news_society", title: "社会", sort: 4 },
      { id: 5, tag: "news_entertainment", title: "娱乐", sort: 5 },
      { id: 6, tag: "news_military", title: "军事", sort: 6 },
      { id: 7, tag: "news_tech", title: "科技", sort: 7 },
      { id: 8, tag: "news_car", title: "汽车", sort: 8 },
      { id: 9, tag: "news_sports", title: "体育", sort: 9 },
      { id: 10, tag: "news_finance", title: "财经", sort: 10 },
      { id: 11, tag: "news_world", title: "国际", sort: 11 },
      { id: 12, tag: "news_fashion", title: "时尚", sort: 12 }
    ]
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    }
  },

  effects: {},

  reducers: {}
};
