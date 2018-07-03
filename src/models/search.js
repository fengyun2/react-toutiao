import * as SearchService from '../services/search'
export default {
  namespace : "search",
  state : {
    hot_words: []
  },
  effects : {
    *getHotWords({
      payload = {}
    }, {select, call, put}) {
      try {
        const {data} = yield call(SearchService.getHotWords);
        yield put({type: 'saveHotWords', payload: {
            data
          }})
      } catch (error) {}

    }
  },
  reducers : {
    saveHotWords(state, {
      payload: {
        data: hot_words
      }
    }) {

      return {
        ...state,
        hot_words
      };
    }
  }
}
