import React from "react";
import Paper from "@material-ui/core/Paper";
import Zoom from "@material-ui/core/Zoom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Step } from "../container/Step";

const appStyles = makeStyles((theme) => ({
	root: {
		height: 450,
	},
	container: {
		display: "flex",
	},
	paper: {
		margin: theme.spacing(1),
	},
	button: {
		margin: theme.spacing(1),
		bottom: "calc(50px + 80px)",
		position: "fixed",
		left: "50%",
		transform: "translateX(-50%)",
	},
}));

const Park = () => {
	const classes = appStyles();
	const [checked, setChecked] = React.useState(false);

	return (
		<>
			<div className={classes.root}>
				<div className={classes.container}>
					<Zoom in={checked}>
						<Paper elevation={4} className={classes.paper}>
							<Step />
						</Paper>
					</Zoom>
				</div>
			</div>

			<Button
				variant="contained"
				color="primary"
				size="large"
				className={classes.button}
				onClick={() => setChecked((checked) => !checked)}
			>
				立即预约
			</Button>
		</>
	);
};

export { Park };
