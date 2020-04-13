import React from "react";
import { info } from "../../util/i18n";

const Bill = (props) => {
	const { lang, bill_list } = props;
	mdui.mutation();
	if (bill_list === []) {
		get_order();
	}

	if (bill_list.length === 0) {
		return (
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
				{info.bill_list.empty[lang]}
			</div>
		);
	} else {
		return (
			<div className="mdui-table-fluid">
				<table className="mdui-table mdui-table-hoverable">
					<thead>
						<tr>
							<th style={{ padding: "4px 6px" }}>
								{info.bill_list.bill_no[lang]}
							</th>
							<th style={{ padding: "4px 6px" }}>
								{info.bill_list.date[lang]}
							</th>
							<th style={{ padding: "4px 6px" }}>
								{info.bill_list.size[lang]}
							</th>
							<th style={{ padding: "4px 6px" }}>
								{info.bill_list.amount[lang]}
							</th>
							<th style={{ padding: "4px 6px" }}>
								{info.bill_list.staus[lang]}
							</th>
						</tr>
					</thead>
					<tbody>
						{bill_list.map((item, i) => (
							<tr key={i}>
								<td style={{ padding: "4px 6px" }}>{item[0]}</td>
								<td style={{ padding: "4px 6px" }}>{item[1]}</td>
								<td style={{ padding: "4px 6px" }}>{item[2]}</td>
								<td style={{ padding: "4px 6px" }}>{item[3]}</td>
								<td style={{ padding: "4px 6px" }}>{item[4]}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
};

export { Bill };
