import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CBarGraph = ({ data }) => {
  console.log(data);
  //   const d = data.slice(1, data.length);
  //   console.log(d);
  const d = [...data];
  return (
    <div>
      <h3>Graph</h3>
      <BarChart width={500} height={300} data={d}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Work Efficiency" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default CBarGraph;
