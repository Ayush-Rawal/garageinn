import axios from 'axios'

const api = axios.create({
	// Your ngrok or hotel url that redirects to jsonserver
	baseURL: 'http://ea28f699.ngrok.io',

	// transformResponse: function (response) {
	// 	return response.data
	// }
})
module.exports = api