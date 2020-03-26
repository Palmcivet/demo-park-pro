function submit() {
	var verify_token = '/api/verifytoken/';
	var token = localStorage.getItem('token');
	var content = document.getElementById("label3").value;
	console.log(token);
	console.log(content);
	$.ajax(
		{
			type: 'POST',
			url: 'http://localhost:8000' + verify_token,
			data: {
				token: token,
				require: 'add_letter',
				content: content,
			},
			success: function (result) {
				console.log(result);
				alert("提交成功");
			},
			error: function (data) {
				alert('请登录或注册后重试')
			},
		});
}