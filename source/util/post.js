const url = {
	signup: "/api/signup",
	login: "/api/login",
	other: "/api/verifytoken",
};

const apiType = {
	feedback: "add_letter",
	get_order: "get_order",
	add_order: "add_order",
};

const headers = new Headers({
	Accept: "application/json",
	"Content-Type": "application/json",
	mode: "cors",
});

const handleResponse = (response) => {
	if (response.status < 400) {
		return response.json();
	} else {
		console.error(`Server error: ${response.statusText}`);
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
			console.error(`Nerwork failed: ${err}`);
			return { error: { msg: "Request error." } };
		});

export { apiType, url, post };
