import InitializeApi from './initialize';

class BucketApi extends InitializeApi {
	async uploadImage(file: any) {
		const user = this.supabase.auth.user();
		if (user) {
			// const { data, error } = await this.supabase.storage.from('avatar').update(`${user.id}`, file);
			// console.log(data);
			// return { data, error, message: error?.message };
			const { data, error } = await this.supabase.storage
				.from('avatar')
				.upload(`${user.id}/profile.png`, file, { cacheControl: '3600', upsert: false });
			if (error) {
				return { error: true, message: error.message };
			} else {
				return { data };
			}
		} else {
			return { error: true, message: 'No User Found' };
		}
	}
}

export default new BucketApi();
