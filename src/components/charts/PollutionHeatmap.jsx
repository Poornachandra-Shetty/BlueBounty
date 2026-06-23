import { MapContainer, TileLayer, CircleMarker, Tooltip as LeafletTooltip } from "react-leaflet";
import hotspots from "../../data/hotspots.json";

const severityColor = {
  High: "#FF7A5C",
  Medium: "#47B5FF",
  Low: "#0CCE6B",
};

const severityRadius = {
  High: 22,
  Medium: 16,
  Low: 11,
};

export default function PollutionHeatmap() {
  return (
    <MapContainer
      center={[16.5, 73.6]}
      zoom={6}
      style={{ height: "420px", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {hotspots.map((h) => (
        <CircleMarker
          key={h.id}
          center={[h.lat, h.lng]}
          radius={severityRadius[h.severity]}
          pathOptions={{
            color: severityColor[h.severity],
            fillColor: severityColor[h.severity],
            fillOpacity: 0.45,
            weight: 2,
          }}
        >
          <LeafletTooltip direction="top">
            <div className="text-xs">
              <p className="font-semibold">{h.name}</p>
              <p>Severity: {h.severity}</p>
              <p>{h.wasteKg.toLocaleString()} kg · {h.dominant}</p>
            </div>
          </LeafletTooltip>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
