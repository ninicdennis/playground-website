import InitializeApi from './initialize';

class AuthApi extends InitializeApi {
	async register(email: string, password: string, username: string) {
		const { user, session, error } = await this.supabase.auth.signUp({ email, password });
		if (error) {
			return { error: true, message: error.message };
		} else {
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
}

export default new AuthApi();
