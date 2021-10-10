import InitializeApi from './initialize';

class AuthApi extends InitializeApi {
	async register(email: string, password: string, username: string) {
		const { data: userData, error: userError } = await this.supabase
			.from('user_data')
			.select()
			.filter('username', 'eq', username);
		if (userError) {
			return { error: true, message: userError.message };
		} else if (userData) {
			if (userData.length > 0) {
				return { error: true, message: 'Username is already taken!' };
			}
		}
		const { user, session, error } = await this.supabase.auth.signUp({ email, password });
		if (error) {
			return { error: true, message: error.message };
		} else {
			const { error: postError } = await this.supabase.from('user_data').insert([{ id: user?.id, username }]);
			if (postError) {
				return { error: true, message: postError.message };
			}

			return { user, session };
		}
	}
	async login(email: string, password: string) {
		const { user, session, error } = await this.supabase.auth.signIn({ email, password });
		if (error) {
			return { error: true, message: error.message };
		} else {
			return { user, session };
		}
	}
	checkUserContext() {
		return this.supabase.auth.user();
	}
	async signOut() {
		const { error } = await this.supabase.auth.signOut();
		if (error) {
			return { error: true, message: error.message };
		} else {
			return { success: true };
		}
	}
	async getUserInformation() {
		const user = await this.supabase.auth.user();
		if (!user) {
			return { error: true, message: 'No user found.' };
		} else {
			const { data, error } = await this.supabase.from('user_data').select().filter('id', 'eq', user.id);
			if (error) {
				return { error: true, message: error.message };
			} else if (data) {
				return data[0];
			}
		}
	}
}

export default new AuthApi();
