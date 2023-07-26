import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";
/* import Skeleton from "./Skeleton"; */ //implementazione futura skeleton loader

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
);

const HistoryChart = ({ id }) => {
	const [loading, setLoading] = useState(true);
	const [coinChartData, setCoinChartData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=2`
				);
				const data = await response.json();
				const formattedData = data.prices.map((value) => ({
					x: value[0],
					y: value[1].toFixed(2),
				}));
				setCoinChartData(formattedData);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching data:", error);
				setLoading(false);
			}
		};
		fetchData();
	}, [id]);

	if (loading) {
		return <p>Loading chart data...</p>; // skeleton here
	}

	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: false,
				position: "",
			},
			title: {
				display: false,
				text: "Chart.js Line Chart",
			},
		},
	};

	const data = {
		labels: coinChartData.map((value) => moment(value.x).format("MMM DD")),
		datasets: [
			{
				fill: true,
				label: id,
				data: coinChartData.map((val) => val.y),
				borderColor: "rgb(53, 162, 235)",
				backgroundColor: "rgba(53, 162, 235, 0.5)",
			},
		],
	};

	return (
		<div>
			<Line options={options} data={data} />
		</div>
	);
};

export default HistoryChart;
