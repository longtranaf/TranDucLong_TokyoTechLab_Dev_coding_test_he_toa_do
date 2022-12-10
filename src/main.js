import Vue from 'vue'
import App from './App.vue'
import './index.css'
import { router } from "@/routes";
import VCalendar from 'v-calendar';
import moment from 'moment';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false
    // Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
    componentPrefix: 'v', // Use <vc-calendar /> instead of <v-calendar />
});
Vue.use(Antd);

Vue.filter('formatMinute', (value) => {
    if (value) {
        return Number(value) / 60000
    }
});

Vue.filter('formatDate', (value) => {
    if (value) {
        return moment(value).format('YYYY/MM/DD hh:mm')
    }
});

Vue.filter('formatDays', (value) => {
    if (value) {
        return moment(value).format('YYYY/MM/DD')
    }
});

Vue.filter('formatHour', (value) => {
    if (value) {
        return moment(value).format('hh:mm')
    }
});
Vue.filter('formatMiliseconds', (value) => {
    if (value) {
        return moment(value).format('x')
    }
});
Vue.filter('formatNumber', function(value) {
    if (typeof value !== "number") {
        return value;
    }
    return value.toLocaleString('vn-VN');
})

new Vue({
    render: h => h(App),
    router: router
}).$mount('#app')