import { createStore, createHook } from 'react-sweet-state';
import AuthApi from '../../../api/auth';
import { errorToast } from '../../toast/toast';
const UserStore = createStore({
	initialState: {
		user: null,
		data: null,
	},
	actions: {
		setUser:
			(user) =>
			({ setState }) => {
				AuthApi.getUserInformation().then((res: any) => {
					const { error } = res;
					if (error) {
						errorToast(error.message);
					} else {
						setState({ user, data: res });
					}
				});
			},
		signOut:
			() =>
			({ setState }) => {
				setState({ user: null, data: null });
			},
	},

	name: 'USER_STORE',
});

const userHook = createHook(UserStore);
export default userHook;
