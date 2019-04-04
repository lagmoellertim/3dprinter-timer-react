import React from "react";
import { Col, Row } from "antd";
import TimerCard from "./Card/TimerCard";

const Grid = (props) => {
	return (
		<div
			style={{
				background: "#ECECEC",
				padding: "30px",
				height: "100vh"
			}}
		>
			<Row gutter={16} type="flex" justify="center" align="top">
				{props.printerList.map((el, i) => {
					return (
						<Col key={i} xs={12} sm={8} md={8} lg={4} style={{ marginBottom: "30px" }}>
							<TimerCard index={i} {...props} {...el} />
						</Col>
					);
				})}
			</Row>
		</div>
	);
};

export default Grid;
