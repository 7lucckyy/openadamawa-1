
import React from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2"
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
  BarElement,
	PointElement,
	LineElement,
  ArcElement,
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
  BarElement,
  ArcElement,
	Title,
	Tooltip,
  Filler,
	Legend,
);

export const LineChart = (props) => {
  const { labels, series, title } = props

  const data = {
    labels,
    datasets: [{
      label: title,
      data: series,
      fill: false,
      lineTension: 0.5,
      borderColor: "red"
    },
  ]
  };
  const options = {
    scales: {
      y: { 
        // min: 0, max: 100,
        grid: {display: true}
      },
      x: { grid: {display: true}}
    },
    // animations: {
    //   tension: {
    //     duration: 1000,
    //     easing: 'linear', //easeInOutBounce
    //     from: 1,
    //     to: 0,
    //     loop: true
    //   }
    // },
		responsive: true,
    plugins: {
      legend: {
        position: "bottom"
      },
      title: {
        display: false,
        fontSize: 18,
        position: "top",
        text: `Total Projects/LGA`
      },
    },
    pointBackgroundColor: "black"
	};

  return (
    <Line data={data} options={options}/>
  );
};

export const CircleChart = (props) => {
  const { series = [], labels = [], colors=["blue", "red", "green", "indigo"] } = props;
  
  const data = {
    labels,
    datasets: [{
      data: series,
      backgroundColor: ["#262B40", "#f5b759", "#cd632g", "#1B998B"]
    }],
  }
  const options = {
		responsive: true,
		plugins: {
			legend: {display: false, position: "top"},
		},
	};

  return (
    <Doughnut data={data} options={options}/>
  );
};

export const BarChart = (props) => {
  const { title, labels = [], series = [] } = props;
  
  const data = {
    labels,
    datasets:  [{
      label: title,
      data: series,
      fill:false,
      barThickness: 5,
      // categoryPercentage: 0.7,
      // barPercentage: 0.5,
      backgroundColor: "Blue"
    }]
  }
  const options = {
		responsive: true,
		plugins: {
			legend: {display: true, position: "bottom"},
			title: {display: false, text: `Sales Chart`},
		},
	};

  return (
    <Bar data={data} options={options}/>
  );
};

export const AreaChart = (props) => {
  const { labels, series, title } = props

  const data = {
    labels,
    datasets: [{
      label: title,
      data: series,
      fill: 'origin',
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      lineTension: 0.5,
    },
  ]
  };
  const options = {
		responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        fontSize: 18,
        position: "bottom",
        // text: `Total Projects/LGA`
      },
    },
    pointBackgroundColor: "black"
	};

  return (
    <Line data={data} options={options}/>
  );
};