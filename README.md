# 🌊 Paddleboard Risk Tool – Frontend

A responsive React web application that visualises real-time environmental conditions and classifies paddleboarding risk levels at Swansea Beach.

This project is part of a dissertation titled:

**“Development of a Non-Compensatory Risk Classification System for Paddleboarding at Swansea Beach”**

---

## 🚀 Features

- 🌦️ Real-time environmental data (wind, waves, tide, temperature)
- 🚦 Traffic-light risk classification (LOW / MEDIUM / HIGH / VERY HIGH)
- 📊 Component-level risk breakdown
- 🌍 Location-based data (Swansea Beach)
- 🔄 Data quality indicators:
  - Live data
  - Cached data
  - Fallback data
- 📱 Fully responsive UI (mobile-first design)
- 🎨 Clean, modern interface using Tailwind CSS

---

## 🧠 How It Works

The frontend fetches processed environmental data from a FastAPI backend and visualises:

- Wind speed & direction
- Wave height
- Tidal flow
- Water temperature
- Tide state & next tide event

The backend applies a rule-based classification algorithm to produce a simplified **risk level** for novice users.

---

## 🛠️ Tech Stack

- **React (Vite)**
- **Tailwind CSS**
- **Lucide React Icons**
- **Fetch API**

---
