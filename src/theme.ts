import { ThemeOptions } from '@material-ui/core';
import common from '@material-ui/core/colors/common';
import lightBlue from '@material-ui/core/colors/lightBlue';
export const light: ThemeOptions = {
	palette: {
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
