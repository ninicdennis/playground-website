import { Typography, Grid } from '@material-ui/core';
import ContentWrapper from '../../commonComponents/contentWrapper';
import { ReactElement } from 'react';

const NotFoundScreen = (): ReactElement => {
	return (
		<ContentWrapper>
			<Grid
				container
				spacing={0}
				direction='column'
				alignItems='center'
				justifyContent='center'
				style={{ minHeight: '50vh' }}
			>
				<Typography variant='h2'>Page not found!</Typography>
				<Typography variant='subtitle1'>No need to worry, you will find your way back I hope!</Typography>
				<Typography variant='subtitle1'>For now, relax and take a break!</Typography>
			</Grid>
		</ContentWrapper>
	);
};

export default NotFoundScreen;
