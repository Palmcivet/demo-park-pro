document.getElementById("yuyue").addEventListener("click", function(event) {
	$.ajax({
		type: "POST",
		url: "http://localhost:8000" + verify_token,
		data: {
			token: token,
			car_size: car_size,
			price: price,
			status: 1,
			require: "add_order",
		},
		success: function(data) {
			if (200 === data.code) {
				alert("支付成功！");
			} else {
				alert("支付失败，请在检查网络后重试！");
			}
		},
		error: function(data) {
			alert("支付失败，请在检查网络后重试！");
		},
	});
});
