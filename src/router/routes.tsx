import { ReactElement } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import mainRoutes from './mainRoutes';
import type { RouteType } from './types';
import AuthApi from '../api/auth';

import HomeScreen from '../main/home';
import NotFound from '../main/notFound';

const RouterConfig = (): ReactElement => {
	const user = AuthApi.checkUserContext();

	const RouteWithSubRoutes = (route: RouteType): ReactElement => {
		if (route.isAuth && !user) {
			return <Redirect to='/' />;
		} else if (!route.isAuth && user) {
			return <Redirect to='/' />;
		} else {
			return (
				<Route
					exact
					path={route.path}
					render={(props: any) => <route.component {...props} routes={route.subRoutes} />}
				/>
			);
		}
	};

	return (
		<Switch>
			{mainRoutes.map((route, i) => (
				<RouteWithSubRoutes key={i} {...route} />
			))}
			<Route exact path='/' component={HomeScreen} />
			<Route path='*' component={NotFound} />
		</Switch>
	);
};

export default RouterConfig;
