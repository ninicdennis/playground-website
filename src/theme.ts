import { ThemeOptions } from '@material-ui/core';
import common from '@material-ui/core/colors/common';
import lightBlue from '@material-ui/core/colors/lightBlue';
export const light: ThemeOptions = {
	palette: {
		background: {
			default: '#FAF9F6',
		},
		type: 'light',
		primary: {
			main: lightBlue[500],
		},
		secondary: {
			main: common.white,
		},
		text: {
			primary: common.black,
		},
	},
};
export const dark: ThemeOptions = {
	palette: {
		background: {
			default: '#303030',
		},
		type: 'dark',
		primary: {
			main: lightBlue[500],
		},
		secondary: {
			main: common.white,
		},
		text: {
			primary: '#FFFFF0',
			secondary: '#fff',
		},
	},
};
