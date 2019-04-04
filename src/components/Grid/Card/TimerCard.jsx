import React from "react";
import { TimePicker } from "antd";
import moment from "moment";
import { Card, Icon } from "antd";

const { Meta } = Card;

const TimerCard = (props) => {
	const date = new Date(null);
	date.setSeconds(props.timeRemaining);
	const timeString = date.toISOString().substr(11, 8);

	function updateTime(_, timeString) {
		props.handleUpdateTime(props.index, timeString.split(":").reduce((acc, time) => 60 * acc + +time));
	}

	return (
		<Card
			cover={<img src={props.img} />}
			actions={[
				<Icon
					type={props.pause ? "caret-right" : "pause"}
					onClick={() => props.handlePauseTimer(props.index)}
				/>,
				<Icon type="delete" onClick={() => props.handleDelete(props.index)} />
			]}
			bordered={false}
		>
			<Meta
				title={props.title}
				description={
					props.input ? (
						<TimePicker
							onChange={updateTime}
							defaultOpenValue={moment(timeString, "HH:mm:ss")}
							onOpenChange={() => props.handleSwapInput(props.index, false)}
							open={props.input}
						/>
					) : (
						<h3
							onClick={() => props.handleSwapInput(props.index, true)}
							style={{
								color: props.timeRemaining === 0 ? "#5cd121" : props.pause ? "#ea0909" : null,
								fontSize: 22
							}}
						>
							{timeString}
						</h3>
					)
				}
			/>
		</Card>
	);
};

export default TimerCard;
