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
    removeCategory(state: State, id: number) {
      state.list = state.list.filter((x) => x.id !== id);
    },
  },
  actions: {
    async fetchCategories({ commit } : any) {
      const resp = await axios.post('/categories', {
        where: {},
      });
      commit('setList', resp.data);
    },
    async addCategory({ commit } : any, category: AddCategory) {
      const resp = await axios.put('/categories', category);
      if (resp.data) {
        commit('pushCategory', resp.data);
      }
      return resp;
    },
    async deleteCategory({ commit } : any, id : number) {
      const resp = await axios.delete(`/categories/${id}`);
      if (resp.data) {
        commit('removeCategory', id);
      }
      console.log(resp);
      return resp;
    },
  },
};
