import { AddCategory } from '@/models/dtos';
import axios from '@/helpers/axios-instance';

export default {
  namespaced: true,
  state() {
    return {};
  },
  actions: {
    async addCategory(_ : any, category: AddCategory) {
      return axios.put('/categories', category);
    },
  },
};
