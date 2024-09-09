import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear"

dayjs.extend(weekOfYear);


const app = createApp(App)
app.mount('#app')
