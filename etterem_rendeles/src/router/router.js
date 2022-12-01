import { createWebHistory, createRouter} from 'vue-router';
import Restaurant from '../components/RestaruantView.vue';
import Serving from '../components/ServingView.vue';

const history = createWebHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            name : 'Home',
            component : Restaurant
        },
        {
            path: '/ordered',
            name : 'Finish Order',
            component : Serving
        }
    ]
});

export default router;