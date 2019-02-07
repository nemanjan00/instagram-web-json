const api = require("./");

api.getUser("_programmers.life").then((data) => {
	console.log(data);
});

