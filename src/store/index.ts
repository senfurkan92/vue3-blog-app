import { createStore } from 'vuex';
import userModule from './modules/user';
import postModule from './modules/post';

export default createStore({
  modules: {
    user: userModule,
    post: postModule,
  },
});
