import React from "react";
import Paper from "@material-ui/core/Paper";
import Zoom from "@material-ui/core/Zoom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Step } from "../component/Step";
import { Auth } from "./Auth";

const formStyle = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
		bottom: "calc(50px + 80px)",
		position: "fixed",
		left: "50%",
		transform: "translateX(-50%)",
	},
}));

const parkStyles = makeStyles((theme) => ({
	root: {
		height: 450,
	},
	container: {
		display: "flex",
	},
	paper: {
		margin: theme.spacing(1),
	},
}));

// const FormCloze = React.forwardRef((props, ref) => {
// 	const classes = formStyles();

// 	return (
// 		<div className={classes.container} ref={ref}>
// 			<Zoom in={checked}>
// 				<Paper elevation={4} className={classes.paper}>
// 					<Step />
// 				</Paper>
// 			</Zoom>
// 		</div>
// 	);
// });

const Park = () => {
	const classes = parkStyles();
	const ref = React.createRef();

	return (
		<Button
			variant="contained"
			color="primary"
			size="large"
			className={classes.button}
			// component={FormCloze}
		>
			立即预约
		</Button>
	);
};

export { Park };
