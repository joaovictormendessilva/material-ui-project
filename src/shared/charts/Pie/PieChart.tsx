import { Chart as ChartJS, ArcElement, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Legend);

const data = {
  labels: ['Feitas'],
  datasets: [
    {
      data: [12, 19],
      backgroundColor: [
        '#00788d',
        '#b9b9b9de',
      ],
      borderWidth: 1,
    },
  ],
};

export function PieChart() {
  return <Pie data={data} />;
}
