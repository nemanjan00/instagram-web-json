const request = require("request");

module.exports = {
	getUser: (username) => {
		return new Promise((resolve, reject) => {
			request.get("https://www.instagram.com/" + username + "/", (err, _, body) => {
				if(err){
					reject(err);
				}

				let json = body.split("window._sharedData = ");

				if(json.length > 1){
					json = json[1];

					json = json.split(";</script>");

					if(json.length > 1){
						json = json[0];

						resolve(JSON.parse(json));
					} else {
						reject("Something changed on instagram? ");
					}
				} else {
					reject("Something changed on instagram? ");
				}
			});
		});
	}
}

