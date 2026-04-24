# SUP Safer - Paddleboard Risk Tool

A responsive React web application that visualises real-time environmental conditions and classifies paddleboarding risk levels at Swansea Beach.

This project is part of the dissertation:

**“Development of a Non-Compensatory Risk Classification System for Paddleboarding at Swansea Beach”**

## Features

- Real-time environmental data, including wind, waves, tide, and temperature.
- Traffic-light risk classification: **LOW**, **MEDIUM**, **HIGH**, and **VERY HIGH**.
- Component-level risk breakdown.
- Location-based environmental data for **Swansea Beach**.
- Data quality indicators:
  - Live data
  - Cached data
  - Fallback data
- Fully responsive UI with a mobile-first design.
- Clean, modern interface built with Tailwind CSS.

## Setup

### Requirements
- Node.js 18+ (or your actual version)
- npm

### Installation
```bash
npm install
```

### Environment variables
Create a `.env` file in the project root:

```env
VITE_API_URL=http://localhost:8000
```

### Run
```bash
npm run dev
```

### Notes
- The frontend depends on the backend API being available. If tou are not using the hosted service, you will need to change the request URL to access the web service locally.
- If the backend runs on a different port or host, update `VITE_API_URL`.
- Restart the development server after changing `.env`.

## How It Works

The frontend fetches processed environmental data from a FastAPI backend and visualises:

- Wind speed and direction
- Wave height
- Tidal flow
- Water temperature
- Tide state and next tide event

The backend applies a rule-based classification algorithm to generate a simplified **risk level** for novice users.

## Tech Stack

- **React (Vite)**
- **Tailwind CSS**
- **Lucide React Icons**
- **Fetch API**