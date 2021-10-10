import { Container, Paper } from '@material-ui/core';
import { ReactElement } from 'react';

const ContentWrapper = ({ children }: any): ReactElement => {
	// TODO: Figure out what the proper type is for this
	return (
		<Container fixed>
			<Paper style={{ height: '100%', margin: 20, padding: 20 }}>{children}</Paper>
		</Container>
	);
};

export default ContentWrapper;
