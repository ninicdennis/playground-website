import { CircularProgress, Typography, Grid } from '@material-ui/core';
import ContentWrapper from '../../commonComponents/contentWrapper';
import { ReactElement, useEffect, useState } from 'react';
// import userStore from '../../helpers/stores/userStore';
import AuthApi from '../../api/auth';
import { errorToast } from '../../helpers/toast/toast';

const ProfileScreen = (): ReactElement => {
	type LoadingHook = boolean;
	type UsernameHook = string;
	type DescriptionHook = string;
	type TagHook = string;

	const [loading, setLoading] = useState<LoadingHook>(true);
	const [username, setUsername] = useState<UsernameHook>('');
	const [description, setDescription] = useState<DescriptionHook>('');
	const [tag, setTag] = useState<TagHook>('');
	//! This will get moved, as this should be in the api / state management, not here.
	// ! This is loading every time the drawer button gets pressed, probably should look into...
	useEffect(() => {
		AuthApi.getUserInformation().then((res) => {
			const { username, description, tag, error } = res;
			if (error) {
				errorToast(error.message);
			} else {
				setUsername(username);
				setDescription(description);
				setTag(tag);
				setLoading(false);
			}
		});
	}, []);
	return (
		<ContentWrapper>
			{loading ? (
				<Grid
					container
					spacing={0}
					direction='column'
					alignItems='center'
					justifyContent='center'
					style={{ minHeight: '40vh' }}
				>
					<CircularProgress />
					<Typography>Loading...</Typography>
				</Grid>
			) : (
				<Grid style={{ minHeight: '40vh' }}>
					<Typography variant='h4'>Profile!</Typography>
					<Typography>Username: {username}</Typography>
					<Typography>Tag: {tag}</Typography>
					<Typography>Description: {description}</Typography>
					<Typography>IMAGE GOES SOMEWHERE HERE</Typography>
				</Grid>
			)}
		</ContentWrapper>
	);
};

export default ProfileScreen;
