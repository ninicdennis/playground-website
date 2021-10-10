import { Typography, Grid, TextField, Button } from '@material-ui/core';
import ContentWrapper from '../../commonComponents/contentWrapper';
import { ReactElement, useState } from 'react';
import AuthApi from '../../api/auth';
import { errorToast, successToast } from '../../helpers/toast/toast';

const RegisterScreen = (): ReactElement => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');

	const register = async () => {
		await AuthApi.register(email, password, username).then((res) => {
			if (res.error) {
				errorToast(res.message);
			} else {
				// Do magic here!
				successToast('Signed up! Redirecting...');
			}
		});
	};
	return (
		<ContentWrapper>
			<Grid container spacing={0} direction='column' alignItems='center' justifyContent='center'>
				<Grid item xs={8}>
					<Typography variant='h4'>Register!</Typography>
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
							id='username-id'
							label='Username'
							variant='outlined'
							color='secondary'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
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
						<Button variant='contained' color='primary' onClick={register}>
							Register
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</ContentWrapper>
	);
};

export default RegisterScreen;
