import { ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';
import mainRoutes from './mainRoutes';
import type { RouteType } from './types';

const RouterConfig = (): ReactElement => {
	const RouteWithSubRoutes = (route: RouteType): ReactElement => {
		return (
			<Route
				exact
				path={route.path}
				render={(props: any) => <route.component {...props} routes={route.subRoutes} />}
			/>
		);
	};

	return (
		<Switch>
			{mainRoutes.map((route, i) => (
				<RouteWithSubRoutes key={i} {...route} />
			))}
		</Switch>
	);
};

export default RouterConfig;
