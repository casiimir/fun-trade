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

const labels = ["1D", "1W", "1M", "1Y"];

export const data = {
  labels,
  datasets: [
    {
      fill: false,
      label: "Dataset 2",
      data: labels.map(() => Math.floor(Math.random() * 100)),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
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
