import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Stats() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    document.title = "KeenKeeper | Stats";

    const timeline = JSON.parse(localStorage.getItem("timeline")) || [];

    const callCount = timeline.filter((item) => item.type === "call").length;
    const textCount = timeline.filter((item) => item.type === "text").length;
    const videoCount = timeline.filter((item) => item.type === "video").length;

    setChartData([
      { name: "Text", value: textCount },
      { name: "Call", value: callCount },
      { name: "Video", value: videoCount },
    ]);
  }, []);

  const COLORS = ["#7c3aed", "#064e3b", "#31a66a"];

  return (
    <section className="min-h-screen bg-[#f8fafc] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900">
          Friendship Analytics
        </h1>

        <div className="mt-6 rounded-lg bg-white p-6 shadow-sm">
          <h2 className="text-base font-bold text-emerald-900">
            By Interaction Type
          </h2>

          <div className="mx-auto mt-6 h-[280px] w-full max-w-md">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={70}
                  outerRadius={105}
                  paddingAngle={5}
                  cornerRadius={12}
                  animationDuration={900}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={entry.name} fill={COLORS[index]} />
                  ))}
                </Pie>

                <Tooltip />

                <Legend
                  verticalAlign="bottom"
                  iconType="circle"
                  iconSize={8}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}