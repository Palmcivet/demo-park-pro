const Base = {
	proUrl: "http://47.102.149.99:8000",
	devUrl: "http://localhost",
};

const url = {
	signup: "/api/signin",
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
	"Access-Control-Allow-Origin": "*",
	"Content-Type": "application/x-www-form-urlencoded",
	mode: "cors",
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
	fetch(Base.devUrl + url, {
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

const request = (url, data) => {
	let xhr = new XMLHttpRequest();
	xhr.open("post", Base.proUrl + url, true);
	xhr.setRequestHeader("content-type", "application/json");
	xhr.responseType = "application/json";
	xhr.withCredentials = true;
	xhr.timeout = 2000;

	return new Promise(
		() => {
			xhr.send(JSON.stringify(data));
			xhr.onreadystatechange = () => {
				if (xhr.readyState === 4) {
					return handleResponse(xhr.responseText);
				}
			};
		},
		(err) => {
			console.error(`Nerwork failed: ${err}`);
			return { error: { msg: "Request error." } };
		}
	);
};

export { apiType, url, post };
