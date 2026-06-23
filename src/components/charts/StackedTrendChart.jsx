import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";

export default function StackedTrendChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <CartesianGrid stroke="#06283D0F" vertical={false} />
        <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#06283D99" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 12, fill: "#06283D99" }} axisLine={false} tickLine={false} />
        <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #06283D14", fontSize: 13 }} />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Bar dataKey="plastic" stackId="a" fill="#1363DF" name="Plastic" radius={[0, 0, 0, 0]} />
        <Bar dataKey="ghostNets" stackId="a" fill="#0CCE6B" name="Ghost Nets" />
        <Bar dataKey="other" stackId="a" fill="#47B5FF" name="Other" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
