import React, { Component } from "react";
import { Login } from "../component/Login/Login";
const logo = require("../../static/meta/logo.png");

const Auth = (props) => {
	return (
		<div>
			<img src={logo.default}></img>
			<div>
				<Login />
			</div>
		</div>
	);
};

export { Auth };
