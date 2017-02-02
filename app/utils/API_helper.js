import axios from 'axios';

const GOOGLE_API_KEY = 'AIzaSyD6oH4QLY6CugbCXIkEW1tlcLavOaCxl9I';
const ROOT_URL = "https://swish-api-srosenshein.c9users.io/api";

export function getAllCourts() {
	return axios.get(`${ROOT_URL}/courts`);
}