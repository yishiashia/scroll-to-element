const scrollToElement = require('./src');

if (typeof window !== 'undefined') {
	window.scrollToElement = scrollToElement;
}

module.exports = scrollToElement;
