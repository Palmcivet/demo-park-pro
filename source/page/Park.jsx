import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { tip } from "../config/i18n";
import { Steps } from "../component/Steps";
import { selector as authSelector, creator as authCreator } from "../store/auth";
import { selector as sysSelector, creator as sysCreator } from "../store/system";

const ParkView = (props) => {
	const { lang, isShow } = props;

	return (
		<div className="park">
			{isShow ? (
				<>
					<div className="banner">
						<img src={require("../../static/image/banner.png")}></img>
					</div>
					<div className="greeting">
						{tip.greeting_1[lang]}
						<br />
						{tip.greeting_2[lang]}
					</div>
					<button
						className="mdui-btn mdui-btn-raised mdui-ripple"
						onClick={() => props.toggleShow()}
						style={{
							backgroundColor: "#3f51b5",
							borderRadius: "3px",
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
				</>
			) : (
				<Steps {...props} />
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		lang: sysSelector.getLang(state),
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
