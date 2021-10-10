import { Typography, Grid, TextField, Button } from '@material-ui/core';
import ContentWrapper from '../../commonComponents/contentWrapper';
import { ReactElement } from 'react';

const RegisterScreen = (): ReactElement => {
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
						<TextField id='email-id' label='Email' variant='outlined' color='secondary' />
					</Grid>
					<Grid item xs={8}>
						<TextField id='pw-id' label='Password' type='password' variant='outlined' color='primary' />
					</Grid>
					<Grid item xs={8}>
						<Button variant='contained' color='primary'>
							Register
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</ContentWrapper>
	);
};

export default RegisterScreen;
