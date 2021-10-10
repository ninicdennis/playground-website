import LoginScreen from '../main/login';
import RegisterScreen from '../main/register';
import ProfileScreen from '../main/profile';
import type { MainRouteType } from './types';

const mainRoutes: MainRouteType = [
	{
		name: 'Login',
		path: '/login',
		component: LoginScreen,
		isAuth: false,
	},
	{
		name: 'Register',
		path: '/register',
		component: RegisterScreen,
		isAuth: false,
	},
	{
		name: 'Profile',
		path: '/profile',
		component: ProfileScreen,
		isAuth: true,
	},
];

export default mainRoutes;
