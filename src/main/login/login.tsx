import { Typography, Grid, TextField, Button } from '@material-ui/core';
import ContentWrapper from '../../commonComponents/contentWrapper';
import { ReactElement, useState } from 'react';
import AuthApi from '../../api/auth';
import 'react-toastify/dist/ReactToastify.css';
import { errorToast, successToast } from '../../helpers/toast/toast';
import userStore from '../../helpers/stores/userStore';

const LoginScreen = (): ReactElement => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [, actions] = userStore();

	const login = async () => {
		if (password.length === 0) {
			errorToast('Please enter a password!');
		} else {
			await AuthApi.login(email, password).then((res) => {
				if (res.error) {
					errorToast(res.message);
				} else {
					successToast('Logged in!');
					actions.setUser(res.user);
				}
			});
		}
	};
	return (
		<ContentWrapper>
			<Grid container spacing={0} direction='column' alignItems='center' justifyContent='center'>
				<Grid item xs={8}>
					<Typography variant='h4'>Log in!</Typography>
				</Grid>
				<Grid
					container
					spacing={4}
					direction='column'
					alignItems='center'
					justifyContent='center'
					style={{ marginTop: 20 }}
				>
					<Grid item xs={8}>
						<TextField
							id='email-id'
							label='Email'
							variant='outlined'
							color='secondary'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Grid>
					<Grid item xs={8}>
						<TextField
							id='pw-id'
							label='Password'
							type='password'
							variant='outlined'
							color='primary'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Grid>
					<Grid item xs={8}>
						<Button variant='contained' color='primary' onClick={login}>
							Register
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</ContentWrapper>
	);
};

export default LoginScreen;
