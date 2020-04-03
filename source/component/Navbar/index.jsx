import React from "react";
import { sys } from "../../util/i18n";
import { Link } from "react-router-dom";
import "./style.less";

const Navbar = (props) => {
	const { lang } = props;

	return (
		<div className="mdui-bottom-nav navbar">
			<Link to="/park" className="mdui-bottom-nav-active">
				<i className="mdui-icon material-icons">local_parking</i>
				<label>{sys.park[lang]}</label>
			</Link>
			<Link to="/take">
				<i className="mdui-icon material-icons">directions_car</i>
				<label>{sys.take[lang]}</label>
			</Link>
			<Link to="/info">
				<i className="mdui-icon material-icons">perm_identity</i>
				<label>{sys.info[lang]}</label>
			</Link>
		</div>
	);
};

export { Navbar };
