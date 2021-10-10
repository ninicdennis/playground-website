import { Typography } from '@material-ui/core';
import ContentWrapper from '../../commonComponents/contentWrapper';
import { ReactElement } from 'react';

const HomeScreen = (): ReactElement => {
	return (
		<ContentWrapper>
			<Typography>Hello!</Typography>
		</ContentWrapper>
	);
};

export default HomeScreen;
