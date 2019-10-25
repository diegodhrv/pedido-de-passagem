import Administrativo from './components/administrativo/Administrativo.vue';
import Home from './components/home/Home.vue';

export const routes = [
	{path: '', name: 'home', component: Home},
	{path: '/administrativo', name: 'administrativo', component: Administrativo},
	{path: '*', component: Home}

];