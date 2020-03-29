import React, { useState } from "react";
import { auth } from "../../config/i18n";
import "./style.less";

const Singup = (props) => {
	const { lang, signup } = props;
	const [name, seteName] = useState("");
	const [email, seteEail] = useState("");
	const [passwd, setPasswd] = useState("");

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
						onChange={(e) => seteName(e.target.value)}
					/>
					<div className="mdui-textfield-error">{auth.empty_name[lang]}</div>
				</div>
				<div className="mdui-textfield mdui-textfield-floating-label">
					<label className="mdui-textfield-label">{auth.email[lang]}</label>
					<input
						className="mdui-textfield-input"
						type="email"
						required
						value={email}
						onChange={(e) => seteEail(e.target.value)}
					/>
					<div className="mdui-textfield-error">{auth.invalid_email[lang]}</div>
				</div>
				<div className="mdui-textfield mdui-textfield-floating-label">
					<label className="mdui-textfield-label">{auth.passwd[lang]}</label>
					<input
						className="mdui-textfield-input"
						type="text"
						pattern="^.*(?=.{6,})(?=.*[a-z])(?=.*[A-Z]).*$"
						required
						value={passwd}
						onChange={(e) => setPasswd(e.target.value)}
					/>
					<div className="mdui-textfield-error">{auth.empty_passwd[lang]}</div>
				</div>
			</div>
			<div className="btn">
				<button
					className="mdui-btn mdui-btn-raised mdui-ripple"
					onClick={() => {
						signup(name, email, passwd);
						console.log(name, email, passwd);
					}}
				>
					{auth.login[lang]}
				</button>
			</div>
		</>
	);
};

export { Singup };
