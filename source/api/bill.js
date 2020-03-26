var verify_token = "/api/verifytoken/";
var token = localStorage.getItem("token");
if (null === token) {
	alert("请先登录或注册账户");
	window.location.replace("http://localhost:8000" + "shezhi.html");
}
$.ajax({
	type: "POST",
	url: "http://localhost:8000" + verify_token,
	data: {
		token: token,
		require: "get_order",
	},
	success: function(result) {
		console.log(result);
		var data = result.data;
		for (i = 0; i < data.length; i++) {
			console.log(i);
			get_orders(data[i][0], data[i][1], data[i][2], data[i][3], data[i][4], i);
		}
	},
	error: function(data) {
		alert("请登录或注册后重试!");
	},
});
function get_orders(
	orders_num,
	orders_date,
	orders_car_size,
	orders_price,
	orders_status,
	num
) {
	if (1 === orders_status) {
		orders_status = "支付成功";
	} else {
		orders_status = "未支付";
	}
	var space = $("<div></div>");
	var title = $("<div class='title' id=title" + num + "></div>");
	var title1 = $("<div class='title1' id=sub" + num + "></div>").text(
		"订单号：" + orders_num
	);
	var info = $("<div class='info' id=info" + num + "></div>");
	var time = $("<p></p>").text("订单时间：" + orders_date);
	var size = $("<p></p>").text("车型：" + orders_car_size);
	var price = $("<p></p>").text("金额：" + orders_price);
	var status = $("<p></p>").text("支付状态：" + orders_status);
	$(".content").append(title);
	$("#title" + num).append(title1);
	$("#sub" + num).append(info);
	$("#info" + num).append(time, size, price, status);
}
