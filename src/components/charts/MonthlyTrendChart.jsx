import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export default function MonthlyTrendChart({ data, dataKey = "kg", color = "#1363DF" }) {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <CartesianGrid stroke="#06283D0F" vertical={false} />
        <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#06283D99" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 12, fill: "#06283D99" }} axisLine={false} tickLine={false} />
        <Tooltip
          contentStyle={{ borderRadius: 12, border: "1px solid #06283D14", fontSize: 13 }}
          labelStyle={{ fontWeight: 600, color: "#06283D" }}
        />
        <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={3} dot={{ r: 4, fill: color }} activeDot={{ r: 6 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
