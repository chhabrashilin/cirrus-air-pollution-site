import { motion } from "framer-motion";
import CityChart from "./components/CityChart";
import MapView from "./components/MapView";
import WashoutSimulator from "./components/WashoutSimulator";

export default function App() {
  return (
    <main className="text-gray-900 dark:text-gray-100">
      <header className="bg-sky-600 text-white p-8 mb-6 shadow-lg">
        <h1 className="text-4xl font-bold mb-1">SkyWash</h1>
        <p className="text-lg font-light">
          Interactive insights on urban air pollution & cloud-seeding wash-out
        </p>
      </header>

      <motion.section
        className="max-w-5xl mx-auto px-4 mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4">PM₂.₅ Snapshot (2024)</h2>
        <CityChart />
      </motion.section>

      <motion.section
        className="max-w-5xl mx-auto px-4 mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4">
          Global Hotspots – Interactive Map
        </h2>
        <MapView />
      </motion.section>

      <motion.section
        className="max-w-5xl mx-auto px-4 mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4">
          Wash-Out Simulator
        </h2>
        <WashoutSimulator />
      </motion.section>

      <footer className="text-center text-xs py-6 opacity-70">
        Data: WHO & OpenAQ — Visuals © 2025 SkyWash
      </footer>
    </main>
  );
}
