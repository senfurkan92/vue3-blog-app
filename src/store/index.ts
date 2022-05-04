import { createStore } from 'vuex';
import userModule from './modules/user';
import postModule from './modules/post';
import categoryModule from './modules/category';

export default createStore({
  modules: {
    user: userModule,
    post: postModule,
    category: categoryModule,
  },
});
