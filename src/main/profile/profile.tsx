import { Typography } from '@material-ui/core';
import ContentWrapper from '../../commonComponents/contentWrapper';
import { ReactElement } from 'react';
import userStore from '../../helpers/stores/userStore';

const ProfileScreen = (): ReactElement => {
	const [state, action] = userStore();
	console.log(state);
	return (
		<ContentWrapper>
			<Typography>Profile!</Typography>
		</ContentWrapper>
	);
};

export default ProfileScreen;
