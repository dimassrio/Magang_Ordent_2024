import { createApp } from 'vue';
import { createPinia } from 'pinia';
import myPiniaPlugin from './plugins/piniaPlugin.ts';

const app = createApp({});
const pinia = createPinia();

// Gunakan plugin
pinia.use(myPiniaPlugin);

app.use(pinia);
app.mount('#app');
