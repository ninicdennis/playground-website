import ContentWrapper from '../../commonComponents/contentWrapper';
import { ReactElement } from 'react';
import userStore from '../../helpers/stores/userStore';
import ProfileCard from '../../commonComponents/profileCard';

const HomeScreen = (): ReactElement => {
	const [state] = userStore();

	return <ContentWrapper>{state.data !== null && <ProfileCard userdata={state.data} />}</ContentWrapper>;
};

export default HomeScreen;
