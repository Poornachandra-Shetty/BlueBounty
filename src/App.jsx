import { Routes, Route } from "react-router-dom";
import AppShell from "./components/layout/AppShell";
import Landing from "./pages/Landing";
import FishermanDashboard from "./pages/FishermanDashboard";
import WasteSubmission from "./pages/WasteSubmission";
import Analytics from "./pages/Analytics";
import Rewards from "./pages/Rewards";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<FishermanDashboard />} />
        <Route path="/submit" element={<WasteSubmission />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
}
