import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { creator as authCreator } from "../../store/auth";
import { selector as sysSelector, creator as sysCreator } from "../../store/system";

const TakeView = (props) => {
	const { lang } = props;

	return (
		<div>
			<div
				style={{
					position: "absolute",
					left: "50%",
					top: "50%",
					transform: "translate(-50%,-50%)",
					fontSize: "25px",
					textAlign: "center",
					wordBreak: "break-word",
				}}
			>
				<div>{lang === 1 ? "该功能尚未开通" : "Your Car was Gone"}</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		lang: sysSelector.getLang(state),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		...bindActionCreators(authCreator, dispatch),
		...bindActionCreators(sysCreator, dispatch),
	};
};
const Take = connect(mapStateToProps, mapDispatchToProps)(TakeView);

export { Take };
