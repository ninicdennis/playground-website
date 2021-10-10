import { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness3Icon from '@material-ui/icons/Brightness3';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

interface ThemeHook {
	toggleTheme: boolean;
	setToggleTheme: (isDark: boolean) => void;
	toggleMenu: boolean;
	setToggleMenu: (isEnabled: boolean) => void;
}

const Header = (props: ThemeHook): ReactElement => {
	const { toggleTheme, setToggleTheme, toggleMenu, setToggleMenu } = props;
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					<IconButton
						edge='start'
						className={classes.menuButton}
						color='inherit'
						aria-label='menu'
						onClick={() => setToggleMenu(!toggleMenu)}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' className={classes.title} color='secondary'>
						Test Site
					</Typography>
					<Switch onChange={() => setToggleTheme(!toggleTheme)} />
					{toggleTheme ? (
						<Brightness5Icon style={{ color: '#fff' }} />
					) : (
						<Brightness3Icon style={{ color: '#fff' }} />
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
