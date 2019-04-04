import React, { Component } from "react";
import Grid from "./components/Grid/Grid";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./App.css";

class App extends Component {
	printers = [
		{
			title: "1. 3D-Printer",
			img:
				"https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Distribution/2018/01/09/goods_img_big-v1/20180109121635_60388.jpg"
		},
		{
			title: "2. 3D-Printer",
			img:
				"https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Distribution/2018/01/09/goods_img_big-v1/20180109121635_60388.jpg"
		},
		{
			title: "3. 3D-Printer",
			img:
				"https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Distribution/2018/01/09/goods_img_big-v1/20180109121635_60388.jpg"
		},
		{
			title: "4. 3D-Printer",
			img:
				"https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Distribution/2018/01/09/goods_img_big-v1/20180109121635_60388.jpg"
		},
		{
			title: "5. 3D-Printer",
			img:
				"https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Distribution/2018/01/09/goods_img_big-v1/20180109121635_60388.jpg"
		},
		{
			title: "6. 3D-Printer",
			img:
				"https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Distribution/2018/01/09/goods_img_big-v1/20180109121635_60388.jpg"
		}
	];

	state = {
		printerList: [
			...this.printers.map((printer) => {
				return {
					...printer,
					pause: false,
					timeRemaining: 0
				};
			})
		]
	};

	constructor(props) {
		super(props);
		this.timeInterval = setInterval(this.timerAction, 1000);
	}

	timerAction = () => {
		const newPrinterList = this.state.printerList.map((el) => {
			return {
				...el,
				timeRemaining: el.timeRemaining > 0 ? (el.pause ? el.timeRemaining : el.timeRemaining - 1) : 0
			};
		});

		this.setState({
			printerList: newPrinterList
		});
	};

	delete = (index) => {
		let newPrinterList = [ ...this.state.printerList ];
		newPrinterList[index].timeRemaining = 0;
		this.setState({
			printerList: newPrinterList
		});
	};

	swapInput = (index, bool) => {
		let newPrinterList = [ ...this.state.printerList ];
		newPrinterList[index].input = bool;
		this.setState({
			printerList: newPrinterList
		});
	};

	updateTime = (index, time) => {
		let newPrinterList = [ ...this.state.printerList ];
		newPrinterList[index].timeRemaining = time;
		this.setState({
			printerList: newPrinterList
		});
	};

	pauseTimer = (index) => {
		let newPrinterList = [ ...this.state.printerList ];
		newPrinterList[index].pause = !newPrinterList[index].pause;
		this.setState({
			printerList: newPrinterList
		});
	};

	render() {
		return (
			<Grid
				handleSwapInput={this.swapInput}
				handleUpdateTime={this.updateTime}
				handlePauseTimer={this.pauseTimer}
				printerList={this.state.printerList}
				handleDelete={this.delete}
			/>
		);
	}
}

export default App;
