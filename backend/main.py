from fastapi import FastAPI, Query
from typing import List
import json, math, os

app = FastAPI(title="SkyWash API")

# --- data --------------------------------------------------------------------
with open(os.path.join(os.path.dirname(__file__),
                       "..",
                       "frontend",
                       "src",
                       "data",
                       "cities.json")) as f:
    CITIES = json.load(f)

# --- routes ------------------------------------------------------------------
@app.get("/api/cities")
def list_cities() -> List[dict]:
    """Return PM2.5 data for all cities"""
    return CITIES

@app.get("/api/washout")
def washout(pm25: float = Query(..., gt=0),
            rain_mm: float = Query(..., gt=0),
            duration_h: float = Query(..., gt=0)):
    """
    Simple wash-out model: exponential scavenging.
    C_final = C_initial * exp(-k * rainfall)
    k ≈ 0.08 mm⁻¹  for urban PM2.5 (literature median)
    """
    k = float(os.getenv("WASHOUT_COEFF", "0.08"))
    rainfall = rain_mm * duration_h
    final = pm25 * math.exp(-k * rainfall)
    return {"initial": pm25, "rainfall_mm": rainfall, "final": round(final, 1)}
