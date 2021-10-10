import { ReactElement, useEffect, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { dark, light } from './theme';
import Header from './commonComponents/header';
import LeftDrawerer from './commonComponents/drawer';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterConfig from './router';
import InitializeApi from './api/initialize';
import AuthApi from './api/auth';
import { ToastContainer } from 'react-toastify';
import { infoToast } from './helpers/toast/toast';
import userStore from './helpers/stores/userStore';

new InitializeApi();
type ThemeHook = boolean;
type DrawerHook = boolean;

const App = (): ReactElement => {
	const [toggleTheme, setToggleTheme] = useState<ThemeHook>(false);
	const [toggleMenu, setToggleMenu] = useState<DrawerHook>(false);
	const theme = createTheme(toggleTheme ? light : dark);
	const [, actions] = userStore();

	useEffect(() => {
		const user = AuthApi.checkUserContext();
		if (user) {
			infoToast('Welcome back!');
			actions.setUser(user);
		}
	}, []);
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router>
					<Header
						toggleTheme={toggleTheme}
						setToggleTheme={setToggleTheme}
						toggleMenu={toggleMenu}
						setToggleMenu={setToggleMenu}
					/>
					<LeftDrawerer toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
					<RouterConfig />
				</Router>
				<ToastContainer
					position='bottom-left'
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			</ThemeProvider>
		</>
	);
};

export default App;
