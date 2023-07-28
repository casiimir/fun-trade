import styles from "./index.module.scss";
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
import { Line } from "react-chartjs-2";

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

export const options = {
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

const labels = ["1Y", "1M", "1W", "1D"];

export const data = {
	labels,
	datasets: [
		{
			fill: false,
			label: "",
			data: labels.map(() => Math.floor(Math.random() * 100)),
			colore: "#6e6e6e",
			borderColor: "#212020",
			backgroundColor: "#6e6e6e",
		},
	],
};

const Chart = () => {
	return (
		<div className={styles.Chart}>
			<Line options={options} data={data} />
		</div>
	);
};

export default Chart;
