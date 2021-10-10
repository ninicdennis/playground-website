import { Container, Paper } from '@material-ui/core';
import { ReactElement } from 'react';
import { JsxElement } from 'typescript';

interface ChildProp {
	children: JsxElement | ReactElement;
}

const ContentWrapper = ({ children }: ChildProp): ReactElement => {
	return (
		<Container fixed>
			<Paper style={{ height: '100%', margin: 20, padding: 20 }}>{children}</Paper>
		</Container>
	);
};

export default ContentWrapper;
