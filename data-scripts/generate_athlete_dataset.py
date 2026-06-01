"""
Synthetic Athlete Performance Dataset Generator
================================================
Generates realistic CMJ / IMTP measurement data for sport science demos.

- Athletes: ~150 across 7 sports
- Measurements: ~6,500+ over 12 months
- Personal data: hashed IDs, no real names stored
- Distributions: based on published sport science literature

Usage:
    pip install faker numpy pandas
    python generate_athlete_dataset.py

Output:
    athletes.csv       — athlete registry (no PII)
    measurements.csv   — CMJ / IMTP time series
"""

import hashlib
import random
from datetime import date, timedelta

import numpy as np
import pandas as pd
from faker import Faker

fake = Faker("es_AR")
rng = np.random.default_rng(42)
random.seed(42)

# CMJ (cm) and IMTP (N) reference norms per sport
# Source: Turner et al. 2020, Comfort et al. 2019, Lum et al. 2020
SPORTS: dict[str, dict] = {
    "Fútbol":     {"cmj": (42, 6),   "imtp": (1_800, 300), "n": 35},
    "Rugby":      {"cmj": (45, 7),   "imtp": (2_200, 350), "n": 25},
    "Atletismo":  {"cmj": (50, 8),   "imtp": (2_000, 300), "n": 20},
    "Hockey":     {"cmj": (38, 5),   "imtp": (1_700, 250), "n": 20},
    "Natación":   {"cmj": (35, 5),   "imtp": (1_600, 250), "n": 20},
    "Basketball": {"cmj": (55, 8),   "imtp": (1_900, 300), "n": 20},
    "Vóley":      {"cmj": (58, 7),   "imtp": (1_850, 280), "n": 10},
}

START_DATE = date(2025, 1, 1)
END_DATE   = date(2025, 12, 31)


def hash_id(raw: str) -> str:
    return "ATH" + hashlib.sha256(raw.encode()).hexdigest()[:6].upper()


# ── Build athlete registry ────────────────────────────────────────────────────

athletes: list[dict] = []
for sport, cfg in SPORTS.items():
    for _ in range(cfg["n"]):
        raw_name = fake.name()
        athletes.append(
            {
                "athlete_id": hash_id(raw_name + sport),
                "sport":      sport,
                "age":        random.randint(17, 35),
                "gender":     random.choice(["M", "F"]),
            }
        )


# ── Generate measurements ─────────────────────────────────────────────────────

measurements: list[dict] = []

for ath in athletes:
    cfg       = SPORTS[ath["sport"]]
    base_cmj  = float(rng.normal(*cfg["cmj"]))
    base_imtp = float(rng.normal(*cfg["imtp"]))

    n_sessions = random.randint(18, 30)

    for _ in range(n_sessions):
        eval_date = START_DATE + timedelta(
            days=random.randint(0, (END_DATE - START_DATE).days)
        )

        # Fatigue modelled as multiplicative noise around baseline
        fatigue = float(rng.normal(1.0, 0.07))

        # CMJ measurement
        jump_h = max(15.0, base_cmj * fatigue + float(rng.normal(0, 1.5)))
        measurements.append(
            {
                "measurement_id": f"M{len(measurements):06d}",
                "athlete_id":     ath["athlete_id"],
                "sport":          ath["sport"],
                "eval_date":      eval_date.isoformat(),
                "exercise_type":  "CMJ",
                "jump_height_cm": round(jump_h, 2),
                "max_force_n":    None,
            }
        )

        # IMTP measurement
        force = max(500.0, base_imtp * fatigue + float(rng.normal(0, 30)))
        measurements.append(
            {
                "measurement_id": f"M{len(measurements):06d}",
                "athlete_id":     ath["athlete_id"],
                "sport":          ath["sport"],
                "eval_date":      eval_date.isoformat(),
                "exercise_type":  "IMTP",
                "jump_height_cm": None,
                "max_force_n":    round(force, 1),
            }
        )


# ── Save CSVs ─────────────────────────────────────────────────────────────────

df_athletes     = pd.DataFrame(athletes)
df_measurements = pd.DataFrame(measurements)

df_athletes.to_csv("athletes.csv", index=False)
df_measurements.to_csv("measurements.csv", index=False)

print(f"✓ Athletes:     {len(df_athletes)}")
print(f"✓ Measurements: {len(df_measurements)}")
print(f"✓ Sports:       {df_athletes['sport'].nunique()}")
print(f"✓ Date range:   {START_DATE} → {END_DATE}")
print()
print("CMJ stats (cm):")
cmj = df_measurements[df_measurements["exercise_type"] == "CMJ"]["jump_height_cm"]
print(f"  mean={cmj.mean():.1f}  std={cmj.std():.1f}  min={cmj.min():.1f}  max={cmj.max():.1f}")
print()
print("IMTP stats (N):")
imtp = df_measurements[df_measurements["exercise_type"] == "IMTP"]["max_force_n"]
print(f"  mean={imtp.mean():.0f}  std={imtp.std():.0f}  min={imtp.min():.0f}  max={imtp.max():.0f}")
