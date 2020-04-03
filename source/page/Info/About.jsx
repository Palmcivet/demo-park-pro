import React from "react";
const palmcivet = require("../../../static/image/palmcivet.png");
const mrbelieve = require("../../../static/image/mrbelieve.png");

const About = () => {
	return (
		<div className="about">
			<div>
				<label className="mdui-list-item mdui-ripple">
					<div className="mdui-list-item-avatar">
						<img src={mrbelieve} />
					</div>
					<div className="mdui-list-item-content">Mr.BelieVe</div>
				</label>
				<label className="mdui-list-item mdui-ripple">
					<div className="mdui-list-item-avatar">
						<img src={palmcivet} />
					</div>
					<div className="mdui-list-item-content">Palm Civet</div>
				</label>
			</div>
			<div>
				{/* Web Front End */}
				<div className="mdui-chip">
					<span className="mdui-chip-title">React</span>
				</div>
				<div className="mdui-chip">
					<span className="mdui-chip-title">Webpack</span>
				</div>
				<div className="mdui-chip">
					<span className="mdui-chip-title">Less</span>
				</div>
				<div className="mdui-chip">
					<span className="mdui-chip-title">Redux</span>
				</div>
				<div className="mdui-chip">
					<span className="mdui-chip-title">React Router</span>
				</div>

				{/* Back Front End */}
				<div className="mdui-chip">
					<span className="mdui-chip-title">Vue</span>
				</div>
				<div className="mdui-chip">
					<span className="mdui-chip-title">Axios</span>
				</div>

				{/* Server Back End */}
				<div className="mdui-chip">
					<span className="mdui-chip-title">Python</span>
				</div>
				<div className="mdui-chip">
					<span className="mdui-chip-title">Django</span>
				</div>
				<div className="mdui-chip">
					<span className="mdui-chip-title">MySQL</span>
				</div>
				<div className="mdui-chip">
					<span className="mdui-chip-title">Nginx</span>
				</div>
			</div>
		</div>
	);
};

export { About };
