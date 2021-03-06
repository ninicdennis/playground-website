import { FunctionComponent } from 'react';

export type RouteType = {
	name: string;
	path: string;
	component: FunctionComponent;
	isAuth: boolean;
	subRoutes?: {
		name: string;
		path: string;
		component: FunctionComponent;
	}[];
};

export type MainRouteType = {
	name: string;
	path: string;
	component: FunctionComponent;
	isAuth: boolean;
	subRoutes?: {
		name: string;
		path: string;
		component: FunctionComponent;
	}[];
}[];
