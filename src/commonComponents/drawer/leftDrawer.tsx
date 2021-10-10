import React, { ReactElement } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Typography, List, ListItem, Button, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import mainRoutes from '../../router/mainRoutes';
import AuthApi from '../../api/auth';
import { errorToast, infoToast } from '../../helpers/toast/toast';
import userStore from '../../helpers/stores/userStore';

interface ToggleHook {
	toggleMenu: boolean;
	setToggleMenu: (isEnabled: boolean) => void;
}

type RouterProp = {
	path: string;
	name: string;
	isAuth: boolean;
};

const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
	title: {
		marginTop: 10,
		flexGrow: 1,
		textAlign: 'center',
	},
	linebreak: {
		margin: 10,
	},
	link: {
		textDecoration: 'none',
		width: '100%',
		display: 'inline-block',
		padding: 10,
	},
});

const LeftDrawerer = (props: ToggleHook): ReactElement => {
	const { toggleMenu, setToggleMenu } = props;
	const classes = useStyles();
	const user = AuthApi.checkUserContext();
	const [, actions] = userStore();

	const navLinkCheck = (route: RouterProp) => {
		if (user && route.isAuth) {
			return (
				<NavLink to={route.path} className={classes.link}>
					<Typography color='textPrimary'>{route.name}</Typography>
				</NavLink>
			);
		} else if (!user && !route.isAuth) {
			return (
				<NavLink to={route.path} className={classes.link}>
					<Typography color='textPrimary'>{route.name}</Typography>
				</NavLink>
			);
		}
	};

	const signOut = async () => {
		await AuthApi.signOut().then((res) => {
			if (res.error) {
				errorToast('Something went wrong. Please try again.');
			} else {
				infoToast('See ya later!');
				actions.signOut();
			}
		});
	};

	return (
		<React.Fragment>
			<Drawer anchor={'left'} open={toggleMenu} onClose={() => setToggleMenu(!toggleMenu)}>
				<List className={classes.list}>
					<NavLink to='/' className={classes.link}>
						<Typography variant='h6' className={classes.title} color='textPrimary'>
							Test Site
						</Typography>
					</NavLink>
					<hr className={classes.linebreak} />
					<Grid container spacing={0} direction='column' alignItems='center' justifyContent='center'>
						{user && (
							<Button variant='contained' color='primary' onClick={signOut}>
								Sign Out
							</Button>
						)}
					</Grid>
					{mainRoutes.map((route, i) => (
						<ListItem key={i} button style={{ padding: 0 }}>
							{navLinkCheck(route)}
						</ListItem>
					))}
				</List>
			</Drawer>
		</React.Fragment>
	);
};

export default LeftDrawerer;
