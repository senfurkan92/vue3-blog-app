import { AxiosResponse } from 'axios';
import axios from '../../helpers/axios-instance';
import { SignInDto, SignUpDto } from '../../models/dtos';

interface ActiveUser {
  id: number,
  createAt: Date,
  updateAt: Date,
  isActive: boolean,
  emailConfirmed: boolean,
  email: string
}

interface State {
  activeUser?: ActiveUser,
}

export default {
  state() {
    return {
      activeUser: null,
    };
  },
  getters: {
    isAuthenticated(state: State) {
      return state.activeUser;
    },
  },
  mutations: {
    setActiveUser(state: State, payload: ActiveUser) {
      state.activeUser = payload;
    },
  },
  actions: {
    async signUp({ commit }: any, payload: SignUpDto) : Promise<AxiosResponse<ActiveUser>> {
      const resp = await axios.put('/users', payload);
      if (resp.data) {
        commit('setActiveUser', resp.data);
      }
      return resp;
    },
    async signIn({ commit }: any, payload: SignInDto) : Promise<AxiosResponse<ActiveUser>> {
      const resp = await axios.post('/users/login', payload);
      if (resp.data) {
        commit('setActiveUser', resp.data);
      }
      return resp;
    },
  },
  namespaced: true,
};
