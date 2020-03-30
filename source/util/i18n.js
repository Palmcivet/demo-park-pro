const nav = {
	park: ["Park", "停车"],
	take: ["Take", "取车"],
	info: ["Info", "我的"],
};

const tip = {
	greeting_1: ["Welcome to Park Pro", "欢迎来到 Park Pro"],
	greeting_2: ['Click "Get Order" Please', "请点击“立即预约”开始使用"],
	greeting_3: ["Fill out the form", "请填写停车信息"],
	get_order: ["Get Order", "立即预约"],
	cancel: ["Cancel", "取消"],
	confirm: ["Confirm", "确认"],
	next: ["Next", "下一步"],
	prev: ["Prev", "上一步"],
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
		choose_time_t: ["Interval:", "停车时间："],
		choose_time_u: ["Hour", "小时"],
		confirm: ["Confirm your choices", "确认您的选择"],
		please_wait: ["Scheduling, wait please", "正在为您调度车位，请稍等"],
		get_note: ["This is your note", "调度结果"],
	},
};

const auth = {
	name: ["Name", "名称"],
	email: ["Email", "邮件"],
	passwd: ["Password", "密码"],
	signup: ["Signup", "注册"],
	login: ["Signin", "登录"],
	logout: ["Logout", "注销"],
	forget_passwd: ["Forget password?", "忘记密码？"],
	no_account: ["No account?", "没有账号？"],
	empty_name: ["Empty name", "用户名为空"],
	empty_passwd: ["Empty password", "密码为空"],
	invalid_email: ["Invalid email", "格式错误"],
	error: ["Login failed", "登录失败"],
};

export { nav, tip, auth, park };
