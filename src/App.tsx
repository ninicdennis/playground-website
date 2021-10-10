import { ReactElement, useEffect } from 'react';

import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterConfig from './router';
import InitializeApi from './api/initialize';
import AuthApi from './api/auth';
import { infoToast } from './helpers/toast/toast';
import userStore from './helpers/stores/userStore';
import { BaseStructure } from './baseStructure';

new InitializeApi();

const App = (): ReactElement => {
	const [, actions] = userStore();

	useEffect(() => {
		const user = AuthApi.checkUserContext();
		if (user) {
			infoToast('Welcome back!');
			actions.setUser(user);
		}
	}, [actions]);

	return (
		<>
			<Router>
				<BaseStructure>
					<RouterConfig />
				</BaseStructure>
			</Router>
		</>
	);
};

export default App;
