import { Bar } from "react-charts-2";
import {
  Chart,
  BarElement,
  Tooltip,
  LinearScale,
  CategoryScale,
} from "chart.js";

Chart.register(BarElement, Tooltip, LinearScale, CategoryScale);

export const StarRatingsChart = ({ starCounts, width, height }) => {
  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 0,
      },
    },
    responsive: false,
    scales: {
      x: {
        stacked: true,
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        mode: "y",
        callbacks: {
          label: (item) => {
            const label = labels[item.datasetIndex];
            console.log(starCounts, label)
            return `${label}: ${starCounts[label][4 - item.dataIndex]}`;
          },
        },
      },
    },
  };

  const data = {
    labels: ["☆☆☆☆☆", "☆☆☆☆", "☆☆☆", "☆☆", "☆"],
    datasets: [],
  };

  let labels = Object.keys(starCounts);
  let numSets = labels.length;
  for (let i = 0; i < numSets; i++) {
    const label = labels[i];
    let series;
    if (i < numSets - 1) {
      series = starCounts[label].map(
        (v, j) => v - starCounts[labels[i + 1]][j]
      );
    } else {
      series = [...starCounts[label]];
    }
    data.datasets.push({
      label,
      data: series.reverse(),
      backgroundColor: `rgba(255, 195, 0, ${Math.pow(0.5, numSets - 1 - i)})`,
    });
  }

  const ratings = labels.map((label) => {
    const data = starCounts[label];
    let count = data[0] + data[1] + data[2] + data[3] + data[4];
    let rating = "0.0";
    if (count > 0) {
      rating = (
        (data[0] + data[1] * 2 + data[2] * 3 + data[3] * 4 + data[4] * 5) /
        count
      ).toFixed(1);
    }
    return { label, rating, count };
  });

  return (
    <div className="star-ratings-chart" style={{ width, height }}>
      <table>
        <tbody>
          <tr>
            {ratings.map((r) => (
              <td key={r.label}>
                <h2>
                  {r.rating}
                  <small> ({r.count})</small>
                </h2>
                <p>{r.label}</p>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <Bar
        options={options}
        data={data}
        width={width - 50}
        height={height - 50}
      />
    </div>
  );
};
