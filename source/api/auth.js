const url = {
	signup: "/api/signup",
	login: "/api/login",
	other: "/api/verifytoken",
};

const headers = new Headers({
	Accept: "application/json",
	"Content-Type": "application/json",
	mode: "cors",
});

const handleResponse = (response) => {
	if (response.status < 500) {
		return response.json();
	} else {
		console.error(`Request failed. Message = ${response.statusText}`);
		return { error: { msg: "Server error." } };
	}
};

const post = (url, data) =>
	fetch(url, {
		method: "POST",
		body: JSON.stringify(data),
		credentials: "include",
		headers: headers,
	})
		.then((response) => handleResponse(response))
		.catch((err) => {
			console.error(`Request failed. Message = ${err}`);
			return { error: { msg: "Request failed." } };
		});

export { url, post };
