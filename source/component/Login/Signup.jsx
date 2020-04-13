import React, { useState } from "react";
import { auth } from "../../util/i18n";
import "./style.less";

const Singup = (props) => {
	const { lang, signup, setError } = props;
	const [name, setName] = useState("");
	const [email, setEail] = useState("");
	const [passwd, setPasswd] = useState("");
	const [phone, setPhone] = useState("");

	return (
		<>
			<div className="textfield signup" id="tran">
				<div className="mdui-textfield mdui-textfield-floating-label">
					<label className="mdui-textfield-label">{auth.name[lang]}</label>
					<input
						className="mdui-textfield-input"
						type="text"
						required
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="mdui-textfield mdui-textfield-floating-label">
					<label className="mdui-textfield-label">{auth.email[lang]}</label>
					<input
						className="mdui-textfield-input"
						type="email"
						required
						value={email}
						onChange={(e) => setEail(e.target.value)}
					/>
				</div>
				<div className="mdui-textfield mdui-textfield-floating-label">
					<label className="mdui-textfield-label">{auth.phone[lang]}</label>
					<input
						className="mdui-textfield-input"
						type="tel"
						required
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
				</div>
				<div className="mdui-textfield mdui-textfield-floating-label">
					<label className="mdui-textfield-label">{auth.passwd[lang]}</label>
					<input
						className="mdui-textfield-input"
						type="password"
						required
						value={passwd}
						onChange={(e) => setPasswd(e.target.value)}
					/>
				</div>
			</div>
			<div className="btn">
				<button
					className="mdui-btn mdui-btn-raised mdui-ripple"
					onClick={() => {
						if (name === "") {
							setError(auth.empty_name);
						} else if (
							email === "" ||
							!/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(
								email
							)
						) {
							setError(auth.invalid_email);
						} else if (passwd === "") {
							setError(auth.empty_passwd);
						} else if (phone === "" || !/^([1-9])([0-9]+)/.test(phone)) {
							setError(auth.invalid_phone);
						} else {
							signup(name, email, phone, passwd);
						}
					}}
				>
					{auth.signup[lang]}
				</button>
			</div>
		</>
	);
};

export { Singup };
