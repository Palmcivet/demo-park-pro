import React, { useState } from "react";
import { auth } from "../config/i18n";

const Login = (props) => {
	const [email, seteEail] = useState("");
	const [passwd, setPasswd] = useState("");

	return (
		<>
			<div className="mdui-textfield mdui-textfield-floating-label">
				<label className="mdui-textfield-label">{auth.email[1]}</label>
				<input
					className="mdui-textfield-input"
					type="email"
					required
					value={email}
					onChange={(e) => seteEail(e.target.value)}
				/>
				<div className="mdui-textfield-error">{auth.invalid_email[1]}</div>
			</div>

			<div className="mdui-textfield mdui-textfield-floating-label">
				<label className="mdui-textfield-label">{auth.passwd[1]}</label>
				<input
					className="mdui-textfield-input"
					type="text"
					required
					value={passwd}
					onChange={(e) => setPasswd(e.target.value)}
				/>
				<div className="mdui-textfield-error">{auth.error[1]}</div>
			</div>

			<button
				className="mdui-btn mdui-btn-raised mdui-ripple"
				onClick={() => console.log(email, passwd)}
			>
				{auth.login[1]}
			</button>
		</>
	);
};

export { Login };
