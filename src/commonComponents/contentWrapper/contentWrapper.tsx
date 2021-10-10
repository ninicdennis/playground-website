import { Container, Paper } from '@material-ui/core';
import { ReactElement, ReactNode } from 'react';

interface ChildProp {
	children: ReactNode;
}

const ContentWrapper = ({ children }: ChildProp): ReactElement => {
	return (
		<Container fixed>
			<Paper style={{ height: '100%', margin: 20, padding: 20 }} variant='outlined'>
				{children}
			</Paper>
		</Container>
	);
};

export default ContentWrapper;
