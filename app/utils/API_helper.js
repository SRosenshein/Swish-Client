import axios from 'axios';

const GOOGLE_API_KEY = 'AIzaSyCQxA40Hlnqldx3_wF_dyeiLHnYh996ARE';
const ROOT_URL = "https://swish-api-srosenshein.c9users.io/api";

export function getAllCourts() {
	return axios.get(`${ROOT_URL}/courts`);
}

export function createCourt(props) {
	return axios.post(`${ROOT_URL}/courts`, props);
}