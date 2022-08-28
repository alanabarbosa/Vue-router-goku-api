import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import LoadingComponent from './components/LoadingComponent.vue'


const app = createApp(App);

app.component('LoadingComponent', LoadingComponent);
app.use(router).mount('#app')
