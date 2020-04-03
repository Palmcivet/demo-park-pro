import React, { useState } from "react";
import { auth } from "../../util/i18n";
import "./style.less";

const Login = (props) => {
	const { lang, login } = props;
	const [email, seteEail] = useState("");
	const [passwd, setPasswd] = useState("");

	return (
		<>
			<div className="textfield login" id="tran">
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
						type="password"
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
					onClick={() => login(email, passwd)}
				>
					{auth.login[lang]}
				</button>
			</div>
		</>
	);
};

export { Login };
