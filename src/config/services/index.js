// @flow
import axios from 'axios';

const Axios = () => {
	let instance = axios.create();
	instance.defaults.headers.common['Content-Type'] = 'application/json';
	instance.interceptors.response.use(
		response => {
			return response;
		},
		error => {
			let code,
				status,
				message = '';
			if (error.response) {
				code = error.response.status;
				status = error.response.statusText;
				message = error.response.data.detail
					? error.response.data.detail
					: error.response.data.title
					? error.response.data.title
					: error.response.data.message
					? error.response.data.message
					: error.response.statusText;
			} else {
				code = status = message = error.message;
			}
			let errorData = {
				code,
				status,
				message,
			};
			throw errorData;
		}
	);
	return instance;
};
const execString = (str: string) => {
	return str.replace(matches => matches[1].toUpperCase());
};

class API {
	constructor() {
		this.endpoints = {};
	}

	createEntities(arrayOfEntity) {
		const MultipleEndpoints = arrayOfEntity.join('/');
		const name = execString(MultipleEndpoints);
		this.endpoints['entities'] = this.createBasicCRUDEndpoints({ name });
	}

	createBasicCRUDEndpoints({ name }) {
		let endpoints = {};

		let resourceURL = `https://api.exchangeratesapi.io/${name}`;
		endpoints.getAll = () => Axios().get(resourceURL);

		endpoints.getOne = (config: null) => Axios().get(`${resourceURL}`, config);

		endpoints.create = (config: null) => Axios().post(resourceURL, config);

		endpoints.update = (config: null) => Axios().put(resourceURL, config);

		endpoints.updateById = (id: number, config: null) => axios.put(`${resourceURL}/${id}`, config);

		endpoints.delete = (id: number, config: null) => axios.delete(`${resourceURL}/${id}`, config);

		return endpoints;
	}
}

export const Setup = new API();
