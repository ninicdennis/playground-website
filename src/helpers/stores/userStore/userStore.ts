import { createStore, createHook } from 'react-sweet-state';
const UserStore = createStore({
	initialState: {
		user: null,
	},
	actions: {
		setUser:
			(user) =>
			({ setState }) => {
				setState({ user });
			},
	},
	name: 'USER_STORE',
});

const userHook = createHook(UserStore);
export default userHook;
