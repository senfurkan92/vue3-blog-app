import { createApp } from 'vue';
import router from '@/router';
import store from '@/store';
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue';
import './registerServiceWorker';
import './assets/css/index.css';
import 'flowbite';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueSweetalert2);
app.mount('#app');
