import { AxiosResponse } from 'axios';
import axios from '../../helpers/axios-instance';
import { SignInDto, SignUpDto } from '../../models/dtos';

interface ActiveUser {
  id: number,
  isActive: boolean,
  emailConfirmed: boolean,
  email: string,
  token: string,
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
    async tokenCheck({ commit }: any) : Promise<void> {
      const token = sessionStorage.getItem('UserToken');
      if (token) {
        const resp = await axios.get('/users/token/check', {
          headers: {
            authorization: token,
          },
        });
        resp.data.token = token;
        commit('setActiveUser', resp.data);
      }
    },
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
        sessionStorage.setItem('UserToken', resp.data.token);
      }
      return resp;
    },
  },
  namespaced: true,
};
