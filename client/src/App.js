import "./App.css";
import CustomTable from "./components/Table";
import { useEffect, useState } from "react";
import CBarGraph from "./components/CustomBarGraph";
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

function App() {
  const [data, setData] = useState([]);
  // const [dataSlice, setDataSlice] = useState([]);

  useEffect(() => {
    async function loadData() {
      var response = await fetch("http://localhost:8000/");
      const d = await response.json();
      setData(d);
      // setDataSlice(d.slice(1, d.length));

      // console.log(data);
    }
    loadData();
    // getData();
    console.log(data);
  }, []);
  return (
    <div className="App">
      <h1>Dashboard</h1>
      {data.length ? <CustomTable data={data} /> : ""}
      {data.length ? (
        <CBarGraph data={data.slice(1, data.length)} />
      ) : (
        <p>No data si</p>
      )}
    </div>
  );
}

export default App;
