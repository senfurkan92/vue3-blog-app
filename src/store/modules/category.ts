import { AddCategory } from '@/models/dtos';
import { Category } from '@/models';
import axios from '@/helpers/axios-instance';

interface State {
  list: Category[],
}

export default {
  namespaced: true,
  state() {
    return {
      list: null,
    };
  },
  mutations: {
    setList(state: State, categories: Category[]) {
      state.list = categories;
    },
    pushCategory(state: State, category: Category) {
      state.list.push(category);
    },
  },
  actions: {
    async fetchCategories({ commit } : any) {
      const resp = await axios.post('/categories', {
        where: {},
      });
      console.log(resp.data);
      commit('setList', resp.data);
    },
    async addCategory({ commit } : any, category: AddCategory) {
      const resp = await axios.put('/categories', category);
      if (resp.data) {
        commit('pushCategory', resp.data);
      }
      return resp;
    },
  },
};
