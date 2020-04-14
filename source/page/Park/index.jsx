import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { tip } from "../../util/i18n";
import { Steps } from "../../component/Steps";
import { selector as authSelector, creator as authCreator } from "../../store/auth";
import { selector as sysSelector, creator as sysCreator } from "../../store/system";
const banner = require("../../../static/image/banner.png");
import "./style.less";

const ParkView = (props) => {
	const { lang, isShow } = props;
	document.getElementById("content").style.visibility = "hidden";

	return (
		<div className="park">
			<div
				className="banner"
				style={{
					transform: isShow ? "translate(-50%, -300px)" : "translateX(-50%)",
				}}
			>
				<img src={banner}></img>
			</div>
			<div
				className="greeting"
				style={{
					bottom: "260px",
					transform: isShow ? "translate(-50%, 160px)" : "translateX(-50%)",
				}}
			>
				<Steps {...props} />
				{isShow ? tip.greeting_3[lang] : tip.greeting_1[lang]}
				<br />
				{isShow ? null : tip.greeting_2[lang]}
			</div>
			<button
				className="mdui-btn mdui-btn-raised mdui-ripple"
				onClick={() => props.toggleShow()}
				style={{
					backgroundColor: "#3f51b5",
					borderRadius: "3px",
					bottom: "140px",
					left: "50%",
					position: "absolute",
					transform: isShow ? "translate(-50%, 250px)" : "translateX(-50%)",
				}}
			>
				<div
					style={{
						margin: "5px",
						color: "white",
						fontSize: "19px",
						textAlign: "center",
						fontWeight: "400",
					}}
				>
					{tip.get_order[lang]}
				</div>
			</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		lang: sysSelector.getLang(state),
		balance: authSelector.getBalance(state),
		isShow: sysSelector.getShow(state),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		...bindActionCreators(authCreator, dispatch),
		...bindActionCreators(sysCreator, dispatch),
	};
};

const Park = connect(mapStateToProps, mapDispatchToProps)(ParkView);

export { Park };
