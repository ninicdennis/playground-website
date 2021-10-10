import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography, Avatar, Grid } from '@material-ui/core';
import dayjs from 'dayjs';
import { ReactElement } from 'react';

const useStyles = makeStyles({
	root: {
		width: '15vw',
		padding: 10,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 24,
	},
	pos: {
		marginBottom: 12,
	},
});

interface ProfileProps {
	userdata: {
		username?: string;
		created_at?: Date;
		profile_url?: string;
		tag?: string;
	};
}
const ProfileCard = ({ userdata }: ProfileProps): ReactElement => {
	const classes = useStyles();
	const src =
		'https://bbifqeumgnbyweddmbru.supabase.in/storage/v1/object/sign/avatar/5a26d58b-d6a9-4631-ad3b-06707c15ab86/profile.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXIvNWEyNmQ1OGItZDZhOS00NjMxLWFkM2ItMDY3MDdjMTVhYjg2L3Byb2ZpbGUucG5nIiwiaWF0IjoxNjMzODk0NDMxLCJleHAiOjE5NDkyNTQ0MzF9.JTFi6EGWt8Kre0t3cO4HoFHkzfefectD-yde8ZguC70';

	return (
		<Card className={classes.root} variant='outlined'>
			<Grid container spacing={0} direction='column' alignItems='center' justifyContent='center'>
				<Avatar src={src} style={{ width: 100, height: 100 }}>
					{userdata.username?.charAt(0)}
				</Avatar>
				<Typography className={classes.title} color='textPrimary' gutterBottom>
					{userdata.username}
				</Typography>
				<Typography variant='subtitle2'>Joined: {dayjs(userdata.created_at).format('YYYY-MM-DD')}</Typography>
				<Typography variant='subtitle2'>{userdata.tag}</Typography>
			</Grid>
		</Card>
	);
};

export default ProfileCard;
