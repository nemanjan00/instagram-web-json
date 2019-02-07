const api = require("./");

api.getUser("dzimiks").then((data) => {
	console.log(data);
});

