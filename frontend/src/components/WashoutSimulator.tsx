import { useState } from "react";

export default function WashoutSimulator() {
  const [pm, setPm] = useState(100);
  const [rain, setRain] = useState(10);
  const [dur, setDur] = useState(2);
  const [result, setResult] = useState<number | null>(null);

  async function run() {
    const url = `/api/washout?pm25=${pm}&rain_mm=${rain}&duration_h=${dur}`;
    const res = await fetch(url);
    const json = await res.json();
    setResult(json.final);
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="space-y-3">
        <label className="block">
          Initial PM₂.₅&nbsp;(µg/m³)
          <input type="number" value={pm} onChange={e => setPm(+e.target.value)}
                 className="w-full rounded border px-2 py-1" />
        </label>
        <label className="block">
          Rainfall Intensity (mm h⁻¹)
          <input type="number" value={rain} onChange={e => setRain(+e.target.value)}
                 className="w-full rounded border px-2 py-1" />
        </label>
        <label className="block">
          Duration (hours)
          <input type="number" value={dur} onChange={e => setDur(+e.target.value)}
                 className="w-full rounded border px-2 py-1" />
        </label>
        <button onClick={run}
                className="bg-sky-600 text-white px-4 py-2 rounded shadow">
          Simulate
        </button>
      </div>

      <div className="flex items-center justify-center text-3xl font-semibold">
        {result !== null ? `${result} µg/m³` : "← Enter values & run"}
      </div>
    </div>
  );
}
