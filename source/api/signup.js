const add_users_api = "/api/addUsers/"
function change_readonly(number) {
	var temp = Number(number)
	if (temp == 1) {
		document.getElementById("label1").removeAttribute("readonly");
		document.getElementById("label2").readOnly = "readonly";
		document.getElementById("label3").readOnly = "readonly";
	}
	if (temp == 2) {
		document.getElementById("label1").readOnly = "readonly";
		document.getElementById("label2").removeAttribute("readonly");
		document.getElementById("label3").readOnly = "readonly";
	}
	if (temp == 3) {
		document.getElementById("label1").readOnly = "readonly";
		document.getElementById("label2").readOnly = "readonly";
		document.getElementById("label3").removeAttribute("readonly");
	}

}
function submit() {
	var name = document.getElementById("label1").value;
	var email = document.getElementById("label2").value;
	var phone = document.getElementById("label3").value;
	if ("" === name || "" === email || "" === phone) {
		alert("请检查输入！");
		return 0;
	}
	$.ajax({
		type: 'POST',
		url: 'http://localhost:8000' + add_users_api,
		data: {
			users_name: name,
			users_email: email,
			users_phone: phone
		},
		success: function (data) {
			if (200 === data.code) {
				alert("注册成功！");
				localStorage.setItem("token", data.token);
			} else {
				alert("注册失败，请在检查网络后重试！");
			}
		},
		error: function (data) {
			alert("注册失败，请在检查网络后重试！")
		},
	});
};