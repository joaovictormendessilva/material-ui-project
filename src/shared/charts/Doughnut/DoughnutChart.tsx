import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Pago', 'Faltando'],
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

export function DoughnutChart() {
  return <Doughnut data={data} />;
}
