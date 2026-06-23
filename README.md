# BlueBounty 🌊

AI-powered Blue Economy platform that rewards fishermen for bringing marine
plastic waste and ghost nets back to shore instead of discarding them at sea.

## Features

* 🌊 **Marine Waste Recovery** – Enables fishermen to report and deposit marine waste such as plastics and ghost nets collected during fishing operations.

* 🤖 **AI-Based Waste Classification** – Uses AI to automatically identify and classify the type of waste uploaded by fishermen.

* ⚖️ **IoT Smart Collection Centers** – Automatically measures and records the quantity of waste using IoT devices.

* 🎁 **Digital Reward System** – Rewards fishermen with points based on the type and quantity of waste collected.

* 📈 **Fish Market Intelligence** – Provides market trends and price insights to help fishermen maximize profits.

* 🗺️ **Coastal Pollution Heatmaps** – Visualizes pollution hotspots using geo-tagged waste collection data.

* 📊 **Analytics Dashboard** – Displays waste statistics, pollution trends, and contribution analytics for authorities.

* 🏆 **Leaderboard & Gamification** – Encourages participation through rankings, badges, and achievement milestones.

* 📍 **Geo-Tagged Waste Tracking** – Tracks the location of collected waste for better coastal management.

* 📱 **Responsive Web Platform** – Provides an intuitive and user-friendly interface for fishermen and administrators.


## Stack
- React 19 + Vite
- Tailwind CSS v4
- Recharts (charts)
- Leaflet + react-leaflet (pollution heatmap)
- lucide-react (icons)
- react-router-dom (routing)

## Run locally
```bash
npm install
npm run dev
```
Then open the printed local URL (typically http://localhost:5173).

## Build
```bash
npm run build
npm run preview
```

## Pages
- `/` — Landing page (hero, problem, how it works, impact stats, features, partners, CTA)
- `/dashboard` — Fisherman dashboard (profile, stats, history, leaderboard, chart)
- `/submit` — Waste submission form with simulated AI classification
- `/analytics` — Pollution analytics dashboard with Leaflet heatmap & charts
- `/rewards` — Rewards marketplace (redeem points for vouchers/gear)
- `/admin` — Admin dashboard (centers, approval queue, activity feed)

