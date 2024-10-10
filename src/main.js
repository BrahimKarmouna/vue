import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index'; // Adjust the path if necessary
import './style.css'; // Global styles (if any)
import './assets/tailwind.css'; // Tailwind CSS styles

const app = createApp(App);

app.use(router);

app.mount('#app');
