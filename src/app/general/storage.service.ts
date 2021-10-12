import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService as StorageServiceProvider } from 'ngx-webstorage-service';

@Injectable({
	providedIn: 'root'
})
export class StorageService {

	constructor(
		@Inject(LOCAL_STORAGE) private storage: StorageServiceProvider
	) { }

	async setString(key: string, value: string) {
		await this.storage.set(key, value);
	}

	async getString(key: string): Promise<{ value: string }> {
		return (this.storage.get(key));
	}

	async setObject(key: string, value: any) {
		await this.storage.set(key, JSON.stringify(value));
	}

	async getObject(key: string): Promise<{ value: any }> {
		const ret = await this.storage.get(key);
		return JSON.parse(ret.value);
	}


	async removeItem(key: string) {
		await this.storage.remove(key);
	}

	async clear() {
		await this.storage.clear();
	}

}
