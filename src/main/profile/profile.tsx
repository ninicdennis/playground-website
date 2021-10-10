import { CircularProgress, Typography, Grid, Button } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import ContentWrapper from '../../commonComponents/contentWrapper';
import { ReactElement, useEffect, useState } from 'react';
// import userStore from '../../helpers/stores/userStore';
import AuthApi from '../../api/auth';
import BucketApi from '../../api/bucket';
import { errorToast, successToast } from '../../helpers/toast/toast';

const ProfileScreen = (): ReactElement => {
	type LoadingHook = boolean;
	type UsernameHook = string;
	type DescriptionHook = string;
	type TagHook = string;

	interface TargetElement {
		target: HTMLInputElement;
	}

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

	const Input = styled('input')({
		display: 'none',
	});

	const uploadFile = async (event: TargetElement) => {
		if (event.target.files && event.target.files !== undefined) {
			const image = event.target.files[0];
			await BucketApi.uploadImage(image).then((res) => {
				const { error, message } = res;
				if (error && message) {
					console.log(error, message);
					errorToast(message);
				} else {
					successToast('Updated Profile Image!');
				}
			});
		}
	};

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
					<label htmlFor='contained-button-file'>
						<Input accept='image/*' id='contained-button-file' multiple type='file' onChange={uploadFile} />
						<Button variant='contained' component='span'>
							Upload
						</Button>
					</label>
				</Grid>
			)}
		</ContentWrapper>
	);
};

export default ProfileScreen;
