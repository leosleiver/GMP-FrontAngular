const PROXY_CONFIG = [

{

	context : ['/api'],
	target: 'http://localhost:8080/gpm/',
	secure: false,
	loglevel: 'debug'
	
}
];

module.exports = PROXY_CONFIG;