import React, { useState } from "react";
import { info } from "../../util/i18n";

const Feedback = (props) => {
	const { lang, feedback } = props;
	const [feed, setFeed] = useState("");

	return (
		<div className="feed">
			<div className="mdui-textfield">
				<textarea
					className="mdui-textfield-input"
					rows="4"
					value={feed}
					onChange={(e) => setFeed(e.value)}
					placeholder={info.feedback.input[lang]}
				></textarea>
			</div>
			<button
				className="mdui-btn mdui-ripple"
				style={{ color: "#3f51b5" }}
				onClick={() => feedback(feed)}
			>
				{info.feedback.submit[lang]}
			</button>
		</div>
	);
};

export { Feedback };
