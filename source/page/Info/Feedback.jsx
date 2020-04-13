import React, { useState } from "react";
import { info, notify } from "../../util/i18n";

const Feedback = (props) => {
	const { lang, feedback, setError } = props;
	const [feed, setFeed] = useState("");

	return (
		<div className="feed">
			<div className="mdui-textfield">
				<textarea
					className="mdui-textfield-input"
					rows="4"
					value={feed}
					onChange={(e) => setFeed(e.target.value)}
					placeholder={info.feedback.input[lang]}
				></textarea>
			</div>
			<button
				className="mdui-btn mdui-ripple"
				style={{ color: "#3f51b5" }}
				onClick={() => {
					if (feed === "" || feed === "\n") {
						setError(notify.empty_content);
					} else {
						feedback(feed);
						console.log(feed);
					}
				}}
			>
				{info.feedback.submit[lang]}
			</button>
		</div>
	);
};

export { Feedback };
