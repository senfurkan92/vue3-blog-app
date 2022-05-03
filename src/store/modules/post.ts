import { AddPost } from '@/models/dtos';

export default {
  namespaced: true,
  state() {
    return {};
  },
  actions: {
    async addPost(_ : any, post: AddPost) {
      console.log(post);
    },
  },
};
