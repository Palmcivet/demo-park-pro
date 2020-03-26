var verify_token = '/api/verifytoken/';
var token = localStorage.getItem('token');
var rest;
$.ajax({
	type: 'POST',
	url: 'http://localhost:8000' + verify_token,
	data: {
		token: token,
		require: 'get_wallet',
	},
	success: function (result) {
		console.log(result);
		rest = result.balance;
		document.getElementsByTagName("p")[0].innerText = '余额：' + rest + '元'
	},
	error: function (data) {
		alert('请登录或注册后重试!')
	},
});