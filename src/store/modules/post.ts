import { AddPost } from '@/models/dtos';
import { Post } from '@/models';
import axios from '@/helpers/axios-instance';

interface State {
  list: Post[],
}

export default {
  namespaced: true,
  state() {
    return {
      list: [],
    };
  },
  mutations: {
    setList(state: State, posts: Post[]) {
      state.list = posts;
    },
    pushPost(state: State, post: Post) {
      state.list.push(post);
    },
    removeByCategory(state: State, categoryId: number) {
      state.list = state.list.filter((x) => x.categoryId !== categoryId);
    },
    removePost(state: State, id: number) {
      state.list = state.list.filter((x) => x.id !== id);
    },
    publishPost(state: State, id: number) {
      state.list.find((x) => x.id === id)!.published = true;
    },
    depublishPost(state: State, id: number) {
      state.list.find((x) => x.id === id)!.published = false;
    },
  },
  actions: {
    async fetchPosts({ commit }: any) {
      const resp = await axios.post('/posts', {
        where: {},
        include: {
          category: true,
        },
      });
      commit('setList', resp.data);
    },
    async addPost({ commit } : any, post: AddPost) {
      const form = new FormData();
      form.append('title', post.title);
      form.append('img', post.image);
      form.append('caption', post.caption);
      form.append('content', post.content);
      form.append('authorId', `${post.authorId}`);
      form.append('categoryId', `${post.categoryId}`);
      const result = await axios.put('posts', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return result;
    },
    async deletePost({ commit } : any, id : number) {
      const resp = await axios.delete(`/posts/${id}`);
      if (resp.data) {
        commit('removePost', id);
      }
      return resp;
    },
    async publishPost({ commit } : any, id : number) {
      const resp = await axios.patch(`/posts/${id}`, {
        published: true,
      });
      if (resp.data) {
        commit('publishPost', id);
      }
      return resp;
    },
    async depublishPost({ commit } : any, id : number) {
      const resp = await axios.patch(`/posts/${id}`, {
        published: false,
      });
      if (resp.data) {
        commit('depublishPost', id);
      }
      return resp;
    },
  },
};
