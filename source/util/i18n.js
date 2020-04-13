const sys = {
	park: ["Park", "停车"],
	take: ["Take", "取车"],
	info: ["Info", "我的"],
	rest: ["Balance:", "钱包余额"],
	balance: ["Balance: ", "钱包余额："],
	bill: ["Your Bill", "历史订单"],
	feedback: ["Feed Back", "反馈问题"],
	about: ["About Us", "关于我们"],
	recharge: ["Recharge", "充值"],
};

const tip = {
	greeting_1: ["Welcome to Park Pro", "欢迎来到 Park Pro"],
	greeting_2: ['Click "Get Order" Please', "请点击“立即预约”开始使用"],
	greeting_3: ["Order Place", "预约车位"],
	get_order: ["Get Order", "立即预约"],
	confirm: ["Confirm", "确认"],
	cancel: ["Cancel", "取消"],
	back: ["Back", "返回"],
	wait: ["Wait", "请稍等"],
	next: ["Next", "下一步"],
	prev: ["Prev", "上一步"],
};

const auth = {
	name: ["Name", "名称"],
	email: ["Email", "邮箱"],
	phone: ["Phone", "手机号"],
	passwd: ["Password", "密码"],
	signup: ["Signup", "注册"],
	signin: ["Signin", "登录"],
	signout: ["Signout", "退出登录"],
	forget_passwd: ["Forget Password", "忘记密码"],
	no_account: ["Goto Signup", "注册账号"],
	empty_name: ["Empty name", "用户名为空"],
	empty_passwd: ["Empty password", "密码为空"],
	invalid_phone: ["Iinvalid phone", "手机号错误"],
	invalid_email: ["Invalid email", "邮箱错误"],
};

const park = {
	model: {
		small: ["Small", "小型车"],
		middle: ["Middle", "中型车"],
		large: ["Large", "大型车"],
	},
	prompt: {
		intro: ["Reference Value", "参 考 数 值"],
		choose_model: ["Your model:", "您的车型："],
		price_pay: ["Parking fee:", "需停车费："],
		confirm: ["Confirm your choices", "请确认您的选择"],
		please_wait: ["Scheduling, wait please", "正在为您调度车位，请稍等"],
		get_note: ["This is your note", "调度结果"],
	},
};

const info = {
	bill_list: {
		bill_no: ["Number", "订单号"],
		date: ["Date", "订单时间"],
		size: ["Car Size", "车型"],
		amount: ["Amount", "金额"],
		staus: ["Status", "支付状态"],
		empty: ["You do not have parking bill", "您还没有停车记录"],
	},
	feedback: {
		submit: ["Submit", "提交"],
		input: ["Your suggestins here.", "请输入您的意见或建议"],
	},
};

const notify = {
	getting_order: ["Getting bills", "订单记录请求中"],
	get_order_failed: ["Get bill failed", "获取历史订单失败"],
	signin_failed: ["signin failed", "登录失败"],
	signup_failed: ["signup failed", "注册失败"],
	feedback_failed: ["Feedback failed", "反馈失败"],
	feedback_success: ["Feedback Success", "反馈成功"],
	empty_content: ["Empty Content", "内容为空"],
	pay_failed: ["Pay failed", "支付失败"],
};

export { sys, tip, park, auth, info, notify };
