import React, { useState } from "react";
import { auth } from "../../util/i18n";
import "./style.less";

const Signin = (props) => {
	const { lang, signin, setError } = props;
	const [email, setEail] = useState("");
	const [passwd, setPasswd] = useState("");

	return (
		<>
			<div className="textfield signin" id="tran">
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
						if (
							email === "" ||
							!/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(
								email
							)
						) {
							setError(auth.invalid_email);
						} else {
							signin(email, passwd);
						}
					}}
				>
					{auth.signin[lang]}
				</button>
			</div>
		</>
	);
};

export { Signin };
