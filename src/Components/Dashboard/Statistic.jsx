import { use, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";

const Statistics = () => {
  // const axiosSecure = useAxiosSecure();
  const { user } = use(AuthContext);

  // chartType: "course" | "month"
  const [chartType, setChartType] = useState("course");

  const url = useMemo(() => {
    if (chartType === "month") return "/enrolls/stats/by-month";
    return "/enrolls/stats/by-course";
  }, [chartType]);

  const { data = [], isLoading } = useQuery({
    queryKey: ["enroll-stats", chartType, user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axios.get(url, {
        params: { email: user.email },
      });

      return Array.isArray(res.data?.data)
        ? res.data.data
        : Array.isArray(res.data)
        ? res.data
        : [];
    },
  });

  if (isLoading) return <div className="p-6">Loading chart...</div>;

  return (
    <div className="bg-white rounded-2xl shadow p-5">
      <div className="flex items-center justify-between gap-3 mb-4">
        <h2 className="text-lg font-semibold">My Enroll Analytics</h2>

        <div className="flex gap-2">
          <button
            onClick={() => setChartType("course")}
            className={`px-3 py-1.5 rounded-lg text-sm border ${
              chartType === "course" ? "bg-black text-white" : "bg-white"
            }`}
          >
            By Course
          </button>
          <button
            onClick={() => setChartType("month")}
            className={`px-3 py-1.5 rounded-lg text-sm border ${
              chartType === "month" ? "bg-black text-white" : "bg-white"
            }`}
          >
            By Month
          </button>
        </div>
      </div>

      <div className="w-full h-[360px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12 }}
              interval={0}
              angle={chartType === "course" ? -15 : 0}
              height={chartType === "course" ? 60 : 30}
            />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="total" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {!data?.length && (
        <p className="text-sm text-gray-500 mt-3">No data found.</p>
      )}
    </div>
  );
};

export default Statistics;
