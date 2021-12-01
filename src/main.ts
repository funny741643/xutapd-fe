import { createApp } from 'vue';
import naive from './plugins/naive';
import App from './App.vue';

createApp(App)
.use(naive)
.mount('#app');
