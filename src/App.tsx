import { ReactElement, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { dark, light } from './theme';
import Header from './commonComponents/header';
import LeftDrawerer from './commonComponents/drawer';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterConfig from './router';

type ThemeHook = boolean;
type DrawerHook = boolean;

const App = (): ReactElement => {
	const [toggleTheme, setToggleTheme] = useState<ThemeHook>(false);
	const [toggleMenu, setToggleMenu] = useState<DrawerHook>(false);
	const theme = createTheme(toggleTheme ? light : dark);
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
			</ThemeProvider>
		</>
	);
};

export default App;
