import { ReactElement, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { dark, light } from './theme';
import Header from './commonComponents/header';
import LeftDrawerer from './commonComponents/drawer';
import './App.css';
import { ToastContainer } from 'react-toastify';

type ThemeHook = boolean;
type DrawerHook = boolean;

export const BaseStructure = (): ReactElement => {
	const [toggleTheme, setToggleTheme] = useState<ThemeHook>(false);
	const [toggleMenu, setToggleMenu] = useState<DrawerHook>(false);
	const theme = createTheme(toggleTheme ? light : dark);

	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header
					toggleTheme={toggleTheme}
					setToggleTheme={setToggleTheme}
					toggleMenu={toggleMenu}
					setToggleMenu={setToggleMenu}
				/>
				<LeftDrawerer toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
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
