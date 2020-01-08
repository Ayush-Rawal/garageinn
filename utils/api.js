import axios from 'axios'

const api = axios.create({
	baseURL: 'http://localhost:3001',

	transformResponse: function (response) {
		return response.data
	}
})
module.exports = api