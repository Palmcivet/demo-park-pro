import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import { Auth } from "./Auth";

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}));

const IconLabelButtons = () => {
	const classes = useStyles();

	return (
		<div>
			<Button
				variant="contained"
				color="primary"
				className={classes.button}
				endIcon={<Icon>send</Icon>}
			>
				Send
			</Button>
			<Auth />
		</div>
	);
};

const Info = () => {
	return (
		<>
			<IconLabelButtons />
		</>
	);
};

export { Info };
