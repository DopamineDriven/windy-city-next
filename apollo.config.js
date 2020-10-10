module.exports = {
	client: {
		service: {
			name: 'wpengine',
			url: process.env.WORDPRESS_API_URL,
			skipSSLValidation: true
		}
	}
};
