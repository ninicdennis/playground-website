import React, { ReactElement } from 'react';

import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import mainRoutes from '../../router/mainRoutes';

interface ToggleHook {
	toggleMenu: boolean;
	setToggleMenu: (isEnabled: boolean) => void;
}

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

	return (
		<React.Fragment>
			<Drawer anchor={'left'} open={toggleMenu} onClose={() => setToggleMenu(!toggleMenu)}>
				<List className={classes.list}>
					<Typography variant='h6' className={classes.title}>
						Stylish Automotive
					</Typography>
					<hr className={classes.linebreak} />

					{mainRoutes.map((route, i) => (
						<ListItem key={i} button style={{ padding: 0 }}>
							<NavLink to={route.path} className={classes.link}>
								<Typography color='textPrimary'>{route.name}</Typography>
							</NavLink>
						</ListItem>
					))}
				</List>
			</Drawer>
		</React.Fragment>
	);
};

export default LeftDrawerer;
