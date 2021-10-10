import HomeScreen from '../main/home';
import LoginScreen from '../main/login';
import RegisterScreen from '../main/register';
import type { MainRouteType } from './types';

const mainRoutes: MainRouteType = [
	{
		name: 'Login',
		path: '/login',
		component: LoginScreen,
	},
	{
		name: 'Register',
		path: '/register',
		component: RegisterScreen,
	},
	{
		name: 'Home',
		path: '/',
		component: HomeScreen,
	},
];

export default mainRoutes;
