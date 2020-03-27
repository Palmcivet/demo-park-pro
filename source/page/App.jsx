import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ParkCar from "@material-ui/icons/LocalParking";
import TakeCar from "@material-ui/icons/DriveEta";
import MyInfo from "@material-ui/icons/PermIdentityOutlined";
import { nav } from "../config/i18n";
import { Info } from "./Info";
import { Park } from "./Park";
import { Take } from "./Take";

const useStyles = makeStyles({
	root: {
		width: "100vw",
		height: "50px",
		bottom: 0,
		position: "fixed",
	},
});

const App = () => {
	const lang = 1;
	const classes = useStyles();
	const [value, setValue] = React.useState(1);

	return (
		<>
			{value === 1 ? <Park /> : value === 2 ? <Take /> : <Info />}

			<BottomNavigation
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
				showLabels
				className={classes.root}
			>
				<BottomNavigationAction
					label={nav.park[lang]}
					value={1}
					icon={<ParkCar />}
				/>
				<BottomNavigationAction
					label={nav.take[lang]}
					value={2}
					icon={<TakeCar />}
				/>
				<BottomNavigationAction
					label={nav.info[lang]}
					value={3}
					icon={<MyInfo />}
				/>
			</BottomNavigation>
		</>
	);
};

export { App };
