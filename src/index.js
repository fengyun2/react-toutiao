import dva from "dva";
import "amfe-flexible";
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import "./styles/index.scss";
import "./index.css";

import 'moment/locale/zh-cn';

// 1. Initialize
const app = dva({
  onReducer: (combineReducer) => {
    return persistReducer({
      key: 'redux-storage',
      // whitelist: ['BASE'],
      keyPrefix: 'toutiao-',
      debug: process.env.NODE_ENV === 'development',
      storage,
      stateReconciler: hardSet
    }, combineReducer)
  }
});

// 2. Plugins app.use({});

// 3. Model app.model(require('./models/example').default);
app.model(require("./models/list_article").default);
app.model(require("./models/search").default);

// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");
// persistStore(app._store)
