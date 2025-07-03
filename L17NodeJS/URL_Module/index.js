const url = require('url');
let address = "https://www.google.com";
let parsedUrl = url.parse(address, true);
console.log(parsedUrl.href);
console.log(parsedUrl.protocol);
console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query);
console.log(parsedUrl.auth);



console.log(url.format(parsedUrl));
console.log(url.parse(address));
console.log(url.parse(address, true));
console.log(url.parse(address, false));
console.log(url.parse(address, false, true));
console.log(url.parse(address, true, true));
