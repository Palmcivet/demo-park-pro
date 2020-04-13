const Base = {
	proUrl: "http://47.102.149.99:8000",
	devUrl: "http://localhost",
};

const url = {
	signin: "/api/signin",
	signup: "/api/signup",
	other: "/api/verifytoken",
};

const apiType = {
	feedback: "add_letter",
	get_order: "get_order",
	add_order: "add_order",
};

const headers = new Headers({
	"Content-Type": "application/x-www-form-urlencoded",
});

const handleResponse = (response) => {
	if (response.status < 400) {
		console.log(response);
		return response.json();
	} else {
		console.error(`Server error: ${response.statusText}`);
		return { error: { msg: "Server error." } };
	}
};

const post = (url, data) =>
	fetch(Base.proUrl + url, {
		method: "POST",
		body: JSON.stringify(data),
		credentials: "include",
		headers: headers,
		mode: "cors",
	})
		.then((response) => handleResponse(response))
		.catch((err) => {
			console.error(`Nerwork failed: ${err}`);
			return { error: { msg: "Request error." } };
		});

export { apiType, url, post };
