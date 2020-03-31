import React from "react";
import { Info } from "../../page/Info";
import { Park } from "../../page/Park";
import { Take } from "../../page/Take";
import { sys } from "../../util/i18n";
import "./style.less";

const Navbar = (props) => {
	const { lang } = props;
	const [value, setValue] = React.useState(3);

	return (
		<>
			{value === 1 ? <Park /> : value === 2 ? <Take /> : <Info />}
			<div className="mdui-bottom-nav navbar">
				<a className="mdui-bottom-nav-active" onClick={() => setValue(1)}>
					<i className="mdui-icon material-icons">local_parking</i>
					<label>{sys.park[lang]}</label>
				</a>
				<a onClick={() => setValue(2)}>
					<i className="mdui-icon material-icons">directions_car</i>
					<label>{sys.take[lang]}</label>
				</a>
				<a onClick={() => setValue(3)}>
					<i className="mdui-icon material-icons">perm_identity</i>
					<label>{sys.info[lang]}</label>
				</a>
			</div>
		</>
	);
};

export { Navbar };
