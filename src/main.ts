import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek"
import weekOfYear from "dayjs/plugin/weekOfYear"

dayjs.extend(isoWeek);
dayjs.extend(weekOfYear);


const app = createApp(App)
app.mount('#app')
