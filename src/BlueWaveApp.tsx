import React, { useState, useEffect, useRef } from "react";

export interface Vessel {
  id: string;
  name: string;
  imo: string;
  status: "In service" | "In port" | "Delayed";
  origin: string;
  destination: string;
  originCode: string;
  destCode: string;
  progress: number; // 0 - 100
  eta: string;
  departedDate: string;
  speedKnots: number;
  heading: string;
  headingDeg: number;
  locationName: string;
  coords: { x: number; y: number }; // Relative map coordinates 0 - 1000
  teuCapacity: number;
  currentTeu: number;
  cargoType: string;
  vesselClass: string;
  waveHeight: string;
  fuelEfficiency: string;
  alert?: string;
  waypoints: { name: string; date: string; status: "completed" | "current" | "upcoming"; coords: { x: number; y: number } }[];
}

const FLEET_DATA: Vessel[] = [
  {
    id: "vessel-aurora",
    name: "MV Aurora Star",
    imo: "9824056",
    status: "In service",
    origin: "Singapore",
    destination: "Rotterdam",
    originCode: "SGP",
    destCode: "RTM",
    progress: 41,
    eta: "Oct 16, 14:30 UTC",
    departedDate: "Oct 02, 06:15 UTC",
    speedKnots: 18.4,
    heading: "270° W",
    headingDeg: 270,
    locationName: "Arabian Sea · Off Oman Basin",
    coords: { x: 535, y: 395 },
    teuCapacity: 24000,
    currentTeu: 21850,
    cargoType: "Electronics, Automotives & Cold Chain Pharma",
    vesselClass: "Ultra Large Container Vessel (ULCV)",
    waveHeight: "1.8m Moderate",
    fuelEfficiency: "95.4% Optimal burn rate",
    waypoints: [
      { name: "Port of Singapore (PSA)", date: "Oct 02 · Departed", status: "completed", coords: { x: 740, y: 470 } },
      { name: "Port of Colombo (SLPA)", date: "Oct 07 · Passed", status: "completed", coords: { x: 625, y: 440 } },
      { name: "Arabian Sea Transit", date: "Oct 09 · Live Position", status: "current", coords: { x: 535, y: 395 } },
      { name: "Suez Canal Southern Entrance", date: "Oct 12 · Convoy Slot #4", status: "upcoming", coords: { x: 445, y: 320 } },
      { name: "Strait of Gibraltar", date: "Oct 14 · Transit", status: "upcoming", coords: { x: 330, y: 280 } },
      { name: "Rotterdam World Gateway", date: "Oct 16 · Estimated Berth", status: "upcoming", coords: { x: 360, y: 200 } },
    ],
  },
  {
    id: "vessel-nordic",
    name: "MV Nordic Wave",
    imo: "9741289",
    status: "In service",
    origin: "Singapore",
    destination: "Hamburg",
    originCode: "SGP",
    destCode: "HAM",
    progress: 24,
    eta: "Oct 21, 09:00 UTC",
    departedDate: "Oct 05, 11:40 UTC",
    speedKnots: 19.1,
    heading: "285° NW",
    headingDeg: 285,
    locationName: "Bay of Bengal · East of Andaman",
    coords: { x: 670, y: 430 },
    teuCapacity: 20500,
    currentTeu: 19200,
    cargoType: "Machinery & Consumer Goods",
    vesselClass: "Post-Panamax Container Carrier",
    waveHeight: "2.4m Swell",
    fuelEfficiency: "92.8% Eco-speed",
    waypoints: [
      { name: "Port of Singapore", date: "Oct 05 · Departed", status: "completed", coords: { x: 740, y: 470 } },
      { name: "Bay of Bengal", date: "Oct 09 · Live Position", status: "current", coords: { x: 670, y: 430 } },
      { name: "Port of Hamburg", date: "Oct 21 · Estimated", status: "upcoming", coords: { x: 375, y: 195 } },
    ],
  },
  {
    id: "vessel-atlantic",
    name: "MV Atlantic Crest",
    imo: "9618420",
    status: "In service",
    origin: "Singapore",
    destination: "Antwerp",
    originCode: "SGP",
    destCode: "ANR",
    progress: 9,
    eta: "Oct 24, 18:20 UTC",
    departedDate: "Oct 08, 02:00 UTC",
    speedKnots: 17.8,
    heading: "260° W",
    headingDeg: 260,
    locationName: "Strait of Malacca · Northwest Bound",
    coords: { x: 715, y: 460 },
    teuCapacity: 18200,
    currentTeu: 17400,
    cargoType: "Industrial Raw Materials & Chemicals",
    vesselClass: "New Panamax",
    waveHeight: "0.9m Calm",
    fuelEfficiency: "96.1% High",
    waypoints: [
      { name: "Port of Singapore", date: "Oct 08 · Departed", status: "completed", coords: { x: 740, y: 470 } },
      { name: "Strait of Malacca", date: "Oct 09 · Live Position", status: "current", coords: { x: 715, y: 460 } },
      { name: "Port of Antwerp", date: "Oct 24 · Estimated", status: "upcoming", coords: { x: 355, y: 205 } },
    ],
  },
  {
    id: "vessel-gulf",
    name: "MV Gulf Pioneer",
    imo: "9522104",
    status: "In port",
    origin: "Singapore",
    destination: "Dubai",
    originCode: "SGP",
    destCode: "DXB",
    progress: 83,
    eta: "Oct 11, 04:00 UTC",
    departedDate: "Sep 28, 14:00 UTC",
    speedKnots: 0.0,
    heading: "At Berth 4",
    headingDeg: 0,
    locationName: "Jebel Ali Port · Berth #04",
    coords: { x: 545, y: 345 },
    teuCapacity: 15400,
    currentTeu: 15400,
    cargoType: "Automotive Units & Heavy Machinery",
    vesselClass: "Panamax Container Carrier",
    waveHeight: "0.2m Harbor Calm",
    fuelEfficiency: "Shore Power Connected",
    waypoints: [
      { name: "Port of Singapore", date: "Sep 28 · Departed", status: "completed", coords: { x: 740, y: 470 } },
      { name: "Jebel Ali (Dubai)", date: "Oct 09 · At Berth", status: "current", coords: { x: 545, y: 345 } },
    ],
  },
  {
    id: "vessel-southern",
    name: "MV Southern Star",
    imo: "9831122",
    status: "In service",
    origin: "Singapore",
    destination: "Sydney",
    originCode: "SGP",
    destCode: "SYD",
    progress: 68,
    eta: "Oct 13, 22:00 UTC",
    departedDate: "Oct 01, 19:30 UTC",
    speedKnots: 20.2,
    heading: "140° SE",
    headingDeg: 140,
    locationName: "Timor Sea · Approaching Darwin Basin",
    coords: { x: 810, y: 560 },
    teuCapacity: 16800,
    currentTeu: 15900,
    cargoType: "Consumer Retail & Electronics",
    vesselClass: "Post-Panamax",
    waveHeight: "1.4m Light Chop",
    fuelEfficiency: "94.0% Optimal",
    waypoints: [
      { name: "Port of Singapore", date: "Oct 01 · Departed", status: "completed", coords: { x: 740, y: 470 } },
      { name: "Timor Sea", date: "Oct 09 · Live Position", status: "current", coords: { x: 810, y: 560 } },
      { name: "Port of Sydney", date: "Oct 13 · Estimated", status: "upcoming", coords: { x: 890, y: 640 } },
    ],
  },
  {
    id: "vessel-eastern",
    name: "MV Eastern Dawn",
    imo: "9794301",
    status: "In service",
    origin: "Singapore",
    destination: "Felixstowe",
    originCode: "SGP",
    destCode: "FXT",
    progress: 56,
    eta: "Oct 18, 16:00 UTC",
    departedDate: "Oct 03, 08:00 UTC",
    speedKnots: 18.0,
    heading: "275° W",
    headingDeg: 275,
    locationName: "Red Sea · South of Jeddah",
    coords: { x: 465, y: 345 },
    teuCapacity: 21000,
    currentTeu: 20100,
    cargoType: "Textiles, Solar Panels & EV Batteries",
    vesselClass: "ULCV",
    waveHeight: "1.2m Moderate",
    fuelEfficiency: "93.6% Eco",
    waypoints: [
      { name: "Port of Singapore", date: "Oct 03 · Departed", status: "completed", coords: { x: 740, y: 470 } },
      { name: "Red Sea", date: "Oct 09 · Live Position", status: "current", coords: { x: 465, y: 345 } },
      { name: "Port of Felixstowe", date: "Oct 18 · Estimated", status: "upcoming", coords: { x: 350, y: 195 } },
    ],
  },
  {
    id: "vessel-han",
    name: "MV Han River",
    imo: "9448831",
    status: "Delayed",
    origin: "Busan",
    destination: "Singapore",
    originCode: "PUS",
    destCode: "SGP",
    progress: 12,
    eta: "Oct 27, 12:00 UTC",
    departedDate: "Oct 07, 16:00 UTC",
    speedKnots: 6.2,
    heading: "210° SW (Holding)",
    headingDeg: 210,
    locationName: "East China Sea · Sheltered near Jeju",
    coords: { x: 805, y: 330 },
    teuCapacity: 14000,
    currentTeu: 13200,
    cargoType: "Semiconductor Equipment & Display Panels",
    vesselClass: "Panamax",
    waveHeight: "4.8m Heavy Typhoon Swell",
    fuelEfficiency: "Reduced Engine Speed (Safety Protocol)",
    alert: "Typhoon Koinu advisory: Vessel maintaining safe standoff speed under maritime safety directive.",
    waypoints: [
      { name: "Port of Busan", date: "Oct 07 · Departed", status: "completed", coords: { x: 825, y: 310 } },
      { name: "East China Sea", date: "Oct 09 · Weather Delay", status: "current", coords: { x: 805, y: 330 } },
      { name: "Port of Singapore", date: "Oct 27 · Revised ETA", status: "upcoming", coords: { x: 740, y: 470 } },
    ],
  },
];

export default function BlueWaveApp() {
  const [activeTab, setActiveTab] = useState<"fleet-map" | "shipment-overview" | "port-ops">("fleet-map");
  const [selectedVesselId, setSelectedVesselId] = useState<string>("vessel-aurora");
  const [filterStatus, setFilterStatus] = useState<"all" | "In service" | "In port" | "Delayed">("all");
  const [showWeatherRadar, setShowWeatherRadar] = useState<boolean>(true);
  const [showTradeRoutes, setShowTradeRoutes] = useState<boolean>(true);
  const [showPortLabels, setShowPortLabels] = useState<boolean>(true);
  const [telemetryDrawerOpen, setTelemetryDrawerOpen] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isPlayingVoyage, setIsPlayingVoyage] = useState<boolean>(false);
  const [scrubberProgress, setScrubberProgress] = useState<number>(41);
  const [utcTime, setUtcTime] = useState<string>("");

  const mapContainerRef = useRef<HTMLDivElement>(null);

  // Live UTC Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(
        now.toUTCString().replace("GMT", "UTC")
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scrubber animation playback
  useEffect(() => {
    if (!isPlayingVoyage) return;
    const interval = setInterval(() => {
      setScrubberProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 250);
    return () => clearInterval(interval);
  }, [isPlayingVoyage]);

  const selectedVessel = FLEET_DATA.find((v) => v.id === selectedVesselId) || FLEET_DATA[0];

  const filteredFleet = FLEET_DATA.filter((v) => {
    const matchesStatus = filterStatus === "all" ? true : v.status === filterStatus;
    const matchesSearch =
      v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.origin.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPanOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleResetView = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  const handleFocusVessel = (vessel: Vessel) => {
    setSelectedVesselId(vessel.id);
    setScrubberProgress(vessel.progress);
    // Center map around vessel
    const targetX = (500 - vessel.coords.x) * zoomLevel * 0.5;
    const targetY = (350 - vessel.coords.y) * zoomLevel * 0.5;
    setPanOffset({ x: targetX, y: targetY });
  };

  return (
    <div className="bw-app-shell">
      {/* Top Application Header */}
      <header className="bw-topbar">
        <div className="bw-brand-block">
          <div className="bw-logo-mark">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M2 12c.6.5 1.2.5 1.8 0 1.2-1 2.4-1 3.6 0 1.2 1 2.4 1 3.6 0 1.2-1 2.4-1 3.6 0 1.2 1 2.4 1 3.6 0 1.2-1 2.4-1 3.6 0 .6-.5 1.2-.5 1.8 0" />
              <path d="M2 17c.6.5 1.2.5 1.8 0 1.2-1 2.4-1 3.6 0 1.2 1 2.4 1 3.6 0 1.2-1 2.4-1 3.6 0 1.2 1 2.4 1 3.6 0 1.2-1 2.4-1 3.6 0 .6-.5 1.2-.5 1.8 0" />
            </svg>
          </div>
          <div className="bw-brand-text">
            <span className="bw-title">BlueWave</span>
            <span className="bw-badge">FLEET OS</span>
          </div>
        </div>

        <div className="bw-nav-pills">
          <button
            type="button"
            className={`bw-nav-pill ${activeTab === "fleet-map" ? "active" : ""}`}
            onClick={() => setActiveTab("fleet-map")}
          >
            <span className="bw-pill-dot" />
            Live Fleet Map
          </button>
          <button
            type="button"
            className={`bw-nav-pill ${activeTab === "shipment-overview" ? "active" : ""}`}
            onClick={() => setActiveTab("shipment-overview")}
          >
            Vessel & Cargo Manifest
          </button>
          <button
            type="button"
            className={`bw-nav-pill ${activeTab === "port-ops" ? "active" : ""}`}
            onClick={() => setActiveTab("port-ops")}
          >
            Port Operations
          </button>
        </div>

        <div className="bw-header-meta">
          <div className="bw-utc-clock">
            <span className="bw-pulse-beacon" />
            <span>{utcTime || "LIVE TELEMETRY · 14 VESSELS AT SEA"}</span>
          </div>
          <div className="bw-profile-chip">
            <div className="bw-avatar">LA</div>
            <div className="bw-avatar-info">
              <span className="bw-avatar-name">Leslie Alex</span>
              <span className="bw-avatar-role">Fleet Director</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="bw-main-layout">
        {/* Left Navigation Sidebar */}
        <aside className="bw-sidebar">
          <div className="bw-search-box">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search vessel, port, IMO..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Quick Metrics Bar */}
          <div className="bw-stats-trio">
            <div className="bw-stat-card in-service">
              <div className="bw-stat-top">
                <span className="bw-stat-indicator green" />
                <span className="bw-stat-label">At sea</span>
              </div>
              <div className="bw-stat-val">14</div>
              <div className="bw-stat-sub">4 arriving this week</div>
            </div>
            <div className="bw-stat-card in-port">
              <div className="bw-stat-top">
                <span className="bw-stat-indicator blue" />
                <span className="bw-stat-label">In port</span>
              </div>
              <div className="bw-stat-val">6</div>
              <div className="bw-stat-sub">2 departing today</div>
            </div>
            <div className="bw-stat-card delayed">
              <div className="bw-stat-top">
                <span className="bw-stat-indicator amber" />
                <span className="bw-stat-label">Delayed</span>
              </div>
              <div className="bw-stat-val">2</div>
              <div className="bw-stat-sub">Typhoon advisory</div>
            </div>
          </div>

          {/* Status Filter Chips */}
          <div className="bw-filter-row">
            {(["all", "In service", "In port", "Delayed"] as const).map((st) => (
              <button
                key={st}
                type="button"
                className={`bw-filter-chip ${filterStatus === st ? "active" : ""}`}
                onClick={() => setFilterStatus(st)}
              >
                {st === "all" ? `All (${FLEET_DATA.length})` : st}
              </button>
            ))}
          </div>

          {/* Vessel List */}
          <div className="bw-vessel-list">
            <div className="bw-section-heading">
              <span>VESSELS AT SEA ({filteredFleet.length})</span>
              <button type="button" onClick={() => setSearchQuery("")}>Reset</button>
            </div>
            {filteredFleet.map((v) => {
              const isSelected = v.id === selectedVesselId;
              const segmentsCount = 8;
              const activeSegments = Math.round((v.progress / 100) * segmentsCount);

              return (
                <div
                  key={v.id}
                  className={`bw-vessel-card ${isSelected ? "selected" : ""} ${v.status.toLowerCase().replace(" ", "-")}`}
                  onClick={() => handleFocusVessel(v)}
                >
                  <div className="bw-card-header">
                    <span className="bw-ship-name">{v.name}</span>
                    <span className={`bw-status-tag ${v.status.toLowerCase().replace(" ", "-")}`}>
                      <span className="dot" />
                      {v.status}
                    </span>
                  </div>
                  <div className="bw-card-route">
                    <span>{v.origin}</span>
                    <span className="arrow">→</span>
                    <span>{v.destination}</span>
                  </div>

                  <div className="bw-card-progress-wrap">
                    <div className="bw-segments">
                      {Array.from({ length: segmentsCount }).map((_, i) => (
                        <div
                          key={i}
                          className={`bw-seg ${i < activeSegments ? "active" : ""}`}
                        />
                      ))}
                    </div>
                    <span className="bw-pct">{v.progress}%</span>
                    <span className="bw-eta">{v.eta.split(",")[0]}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </aside>

        {/* Center / Right Dynamic Canvas */}
        <main className="bw-canvas-pane">
          {activeTab === "fleet-map" && (
            <div className="bw-map-card">
              {/* Floating Map Controls & Overlays */}
              <div className="bw-map-hud-top">
                <div className="bw-hud-badge">
                  <span className="bw-pulse-radar" />
                  <strong>MARITIME AIS TELEMETRY</strong> · LIVE SATELLITE FEED
                </div>

                <div className="bw-layer-toggles">
                  <button
                    type="button"
                    className={`bw-toggle-btn ${showWeatherRadar ? "active" : ""}`}
                    onClick={() => setShowWeatherRadar(!showWeatherRadar)}
                    title="Toggle Sea State & Wave Swell Radar"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                    </svg>
                    Weather Radar
                  </button>
                  <button
                    type="button"
                    className={`bw-toggle-btn ${showTradeRoutes ? "active" : ""}`}
                    onClick={() => setShowTradeRoutes(!showTradeRoutes)}
                    title="Toggle Shipping Corridors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                    Trade Lanes
                  </button>
                  <button
                    type="button"
                    className={`bw-toggle-btn ${showPortLabels ? "active" : ""}`}
                    onClick={() => setShowPortLabels(!showPortLabels)}
                    title="Toggle Port Waypoints"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 2a10 10 0 0 0-10 10c0 5.25 10 12 10 12s10-6.75 10-12a10 10 0 0 0-10-10z" />
                    </svg>
                    Ports
                  </button>
                </div>
              </div>

              {/* Zoom & Pan Floating Controls */}
              <div className="bw-map-hud-controls">
                <button type="button" onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 2.5))} title="Zoom in">
                  +
                </button>
                <button type="button" onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.75))} title="Zoom out">
                  −
                </button>
                <button type="button" onClick={handleResetView} title="Reset view">
                  ⌖
                </button>
              </div>

              {/* Map Legend */}
              <div className="bw-map-legend">
                <div className="bw-legend-item">
                  <span className="dot green" />
                  <span>In service ({FLEET_DATA.filter(f => f.status === "In service").length})</span>
                </div>
                <div className="bw-legend-item">
                  <span className="dot blue" />
                  <span>In port ({FLEET_DATA.filter(f => f.status === "In port").length})</span>
                </div>
                <div className="bw-legend-item">
                  <span className="dot amber" />
                  <span>Delayed ({FLEET_DATA.filter(f => f.status === "Delayed").length})</span>
                </div>
              </div>

              {/* Interactive Vector World Maritime Map */}
              <div
                ref={mapContainerRef}
                className={`bw-map-viewport ${isDragging ? "dragging" : ""}`}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
              >
                <div
                  className="bw-map-canvas"
                  style={{
                    transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomLevel})`,
                    transformOrigin: "center center",
                  }}
                >
                  <svg className="bw-world-svg" viewBox="0 0 1000 700" width="1000" height="700">
                    <defs>
                      <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#C3D7FF" />
                        <stop offset="100%" stopColor="#A8C5FD" />
                      </linearGradient>

                      <linearGradient id="routeSailedGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2563EB" />
                        <stop offset="100%" stopColor="#38BDF8" />
                      </linearGradient>

                      <radialGradient id="weatherSwirl1" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="rgba(244, 63, 94, 0.45)" />
                        <stop offset="60%" stopColor="rgba(251, 146, 60, 0.25)" />
                        <stop offset="100%" stopColor="rgba(251, 146, 60, 0)" />
                      </radialGradient>

                      <radialGradient id="weatherCalm" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="rgba(56, 189, 248, 0.25)" />
                        <stop offset="100%" stopColor="rgba(56, 189, 248, 0)" />
                      </radialGradient>

                      <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="0.7" />
                      </pattern>
                    </defs>

                    {/* Ocean Background */}
                    <rect width="1000" height="700" fill="url(#oceanGrad)" />
                    <rect width="1000" height="700" fill="url(#gridPattern)" />

                    {/* Continental Landmass Polygons */}
                    {/* Eurasia & North Africa */}
                    <path
                      className="bw-land"
                      d="M 330 180 Q 360 160 410 170 Q 480 180 540 160 Q 640 150 720 180 Q 820 190 890 230 L 920 300 Q 870 340 820 340 Q 810 400 760 440 Q 720 400 680 410 Q 640 430 610 390 Q 560 360 520 370 Q 470 330 430 350 Q 390 320 350 330 L 330 260 Z"
                      fill="#E9EFF9"
                      stroke="#CBD8ED"
                      strokeWidth="1.2"
                    />

                    {/* British Isles */}
                    <path
                      className="bw-land"
                      d="M 330 190 Q 345 180 348 200 Q 340 220 330 215 Z"
                      fill="#E9EFF9"
                      stroke="#CBD8ED"
                      strokeWidth="1"
                    />

                    {/* Africa */}
                    <path
                      className="bw-land"
                      d="M 350 340 Q 420 340 460 360 Q 480 430 450 490 Q 420 540 390 580 Q 350 560 330 490 Q 310 420 340 370 Z"
                      fill="#E9EFF9"
                      stroke="#CBD8ED"
                      strokeWidth="1.2"
                    />

                    {/* India Subcontinent */}
                    <path
                      className="bw-land"
                      d="M 610 370 Q 650 390 660 440 Q 640 470 625 480 Q 600 450 595 400 Z"
                      fill="#E9EFF9"
                      stroke="#CBD8ED"
                      strokeWidth="1.2"
                    />

                    {/* Southeast Asia & Indonesia */}
                    <path
                      className="bw-land"
                      d="M 720 420 Q 760 430 780 460 Q 760 490 730 480 Z"
                      fill="#E9EFF9"
                      stroke="#CBD8ED"
                      strokeWidth="1"
                    />
                    <path
                      className="bw-land"
                      d="M 720 500 Q 790 510 830 520 Q 810 540 730 525 Z"
                      fill="#E9EFF9"
                      stroke="#CBD8ED"
                      strokeWidth="1"
                    />

                    {/* Australia */}
                    <path
                      className="bw-land"
                      d="M 800 560 Q 890 550 930 600 Q 910 680 840 670 Q 780 640 790 590 Z"
                      fill="#E9EFF9"
                      stroke="#CBD8ED"
                      strokeWidth="1.2"
                    />

                    {/* Major Ocean Waterway Labels */}
                    <text x="300" y="460" className="bw-ocean-label">ATLANTIC OCEAN</text>
                    <text x="560" y="550" className="bw-ocean-label">INDIAN OCEAN</text>
                    <text x="520" y="420" className="bw-ocean-label">ARABIAN SEA</text>
                    <text x="660" y="450" className="bw-ocean-label">BAY OF BENGAL</text>
                    <text x="390" y="325" className="bw-ocean-label">MEDITERRANEAN</text>

                    {/* Weather Swirls / Sea State Contours */}
                    {showWeatherRadar && (
                      <g className="bw-weather-layer">
                        {/* Typhoon Koinu near East Asia */}
                        <circle cx="810" cy="335" r="55" fill="url(#weatherSwirl1)" />
                        <path
                          d="M 780 320 Q 810 305 840 330 Q 830 360 800 350"
                          fill="none"
                          stroke="rgba(244, 63, 94, 0.8)"
                          strokeWidth="2"
                          strokeDasharray="4 3"
                        />
                        <text x="760" y="275" fill="#DC2626" fontSize="10" fontWeight="bold">TYPHOON KOINU · 4.8m SWELL</text>

                        {/* Favorable Fair Weather Cell */}
                        <circle cx="530" cy="400" r="70" fill="url(#weatherCalm)" />
                      </g>
                    )}

                    {/* Shipping Trade Lanes */}
                    {showTradeRoutes && (
                      <g className="bw-routes-layer">
                        {/* Secondary Global Lanes */}
                        <path
                          d="M 740 470 Q 800 520 890 640"
                          fill="none"
                          stroke="rgba(37, 99, 235, 0.25)"
                          strokeWidth="1.8"
                          strokeDasharray="4 4"
                        />
                        <path
                          d="M 740 470 Q 600 370 545 345"
                          fill="none"
                          stroke="rgba(37, 99, 235, 0.25)"
                          strokeWidth="1.8"
                          strokeDasharray="4 4"
                        />

                        {/* Primary Flagship Corridor: Singapore ➔ Rotterdam */}
                        {/* 1. Sailed Track (Solid Glowing Blue) */}
                        <path
                          d="M 740 470 Q 685 455 625 440 Q 580 415 535 395"
                          fill="none"
                          stroke="url(#routeSailedGrad)"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />

                        {/* 2. Planned Track (Animated Dashed Blue) */}
                        <path
                          className="bw-route-planned-path"
                          d="M 535 395 Q 485 365 445 320 Q 390 310 330 280 Q 320 220 360 200"
                          fill="none"
                          stroke="#3B82F6"
                          strokeWidth="2.5"
                          strokeDasharray="6 6"
                          strokeLinecap="round"
                        />
                      </g>
                    )}

                    {/* Major Port Waypoint Badges */}
                    {showPortLabels && (
                      <g className="bw-ports-layer">
                        {/* Singapore Port */}
                        <g className="bw-port-marker" transform="translate(740, 470)">
                          <circle r="7" fill="#1E9A55" stroke="#FFFFFF" strokeWidth="2" />
                          <circle r="13" fill="none" stroke="#1E9A55" strokeWidth="1" opacity="0.6" />
                          <text x="12" y="4" fill="#0F172A" fontSize="11" fontWeight="bold">Singapore (PSA)</text>
                          <text x="12" y="16" fill="#64748B" fontSize="9">Departed · Oct 02</text>
                        </g>

                        {/* Colombo Port */}
                        <g className="bw-port-marker" transform="translate(625, 440)">
                          <circle r="6" fill="#1E9A55" stroke="#FFFFFF" strokeWidth="2" />
                          <text x="10" y="4" fill="#0F172A" fontSize="11" fontWeight="bold">Colombo</text>
                          <text x="10" y="16" fill="#64748B" fontSize="9">Passed · Oct 07</text>
                        </g>

                        {/* Suez Canal Port */}
                        <g className="bw-port-marker" transform="translate(445, 320)">
                          <circle r="6" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="2" />
                          <text x="10" y="4" fill="#0F172A" fontSize="11" fontWeight="bold">Suez Canal</text>
                          <text x="10" y="16" fill="#64748B" fontSize="9">Convoy Slot · Oct 12</text>
                        </g>

                        {/* Rotterdam Destination Port */}
                        <g className="bw-port-marker" transform="translate(360, 200)">
                          <circle r="7" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" />
                          <circle r="14" fill="none" stroke="#2563EB" strokeWidth="1" opacity="0.6" />
                          <text x="12" y="4" fill="#0F172A" fontSize="11" fontWeight="bold">Rotterdam (RTM)</text>
                          <text x="12" y="16" fill="#2563EB" fontSize="9" fontWeight="bold">ETA Oct 16 · 14:30</text>
                        </g>
                      </g>
                    )}

                    {/* Fleet Vessel Marker Pins */}
                    {filteredFleet.map((v) => {
                      const isSelected = v.id === selectedVesselId;
                      // Calculate dynamic coordinate for selected vessel based on scrubber
                      let pinX = v.coords.x;
                      let pinY = v.coords.y;

                      if (isSelected) {
                        // Smoothly interpolate coordinate along the trade lane based on scrubberProgress
                        // (Singapore 740,470 -> Colombo 625,440 -> Arabian Sea 535,395 -> Suez 445,320 -> Rotterdam 360,200)
                        if (scrubberProgress <= 41) {
                          const t = scrubberProgress / 41;
                          pinX = 740 + t * (535 - 740);
                          pinY = 470 + t * (395 - 470);
                        } else {
                          const t = (scrubberProgress - 41) / 59;
                          pinX = 535 + t * (360 - 535);
                          pinY = 395 + t * (200 - 395);
                        }
                      }

                      return (
                        <g
                          key={v.id}
                          className={`bw-vessel-pin ${isSelected ? "selected" : ""}`}
                          transform={`translate(${pinX}, ${pinY})`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleFocusVessel(v);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          {/* Pulsing beacon radar rings if selected */}
                          {isSelected && (
                            <>
                              <circle r="22" className="bw-radar-ring outer" />
                              <circle r="14" className="bw-radar-ring inner" />
                            </>
                          )}

                          {/* Ship Pin Container */}
                          <circle
                            r={isSelected ? "11" : "8"}
                            fill={
                              v.status === "In service"
                                ? "#1E9A55"
                                : v.status === "In port"
                                ? "#0284C7"
                                : "#DC2626"
                            }
                            stroke="#FFFFFF"
                            strokeWidth="2.5"
                          />

                          {/* Vessel Direction Arrow / Pointer */}
                          <path
                            d="M 0 -4 L 3 3 L -3 3 Z"
                            fill="#FFFFFF"
                            transform={`rotate(${v.headingDeg})`}
                          />

                          {/* Floating Tooltip Pill for active vessel */}
                          {isSelected && (
                            <g transform="translate(0, -28)">
                              <rect
                                x="-85"
                                y="-24"
                                width="170"
                                height="26"
                                rx="6"
                                fill="#0B132B"
                                stroke="#3B82F6"
                                strokeWidth="1"
                              />
                              <text x="0" y="-7" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">
                                {v.name} · {v.speedKnots} kn
                              </text>
                            </g>
                          )}
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </div>

              {/* Bottom Interactive Voyage Timeline Scrubber */}
              <div className="bw-voyage-scrubber-bar">
                <div className="bw-scrubber-controls">
                  <button
                    type="button"
                    className="bw-play-btn"
                    onClick={() => setIsPlayingVoyage(!isPlayingVoyage)}
                    title={isPlayingVoyage ? "Pause simulated sailing" : "Play voyage simulation"}
                  >
                    {isPlayingVoyage ? "❚❚ Pause" : "▶ Live Sailing Sim"}
                  </button>
                  <div className="bw-scrubber-text">
                    <strong>{selectedVessel.name}</strong> · {selectedVessel.origin} → {selectedVessel.destination} (
                    {scrubberProgress}% completed)
                  </div>
                </div>

                <div className="bw-scrubber-slider-wrap">
                  <span className="bw-scrubber-label left">{selectedVessel.origin}</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={scrubberProgress}
                    onChange={(e) => {
                      setIsPlayingVoyage(false);
                      setScrubberProgress(Number(e.target.value));
                    }}
                    className="bw-range-slider"
                  />
                  <span className="bw-scrubber-label right">{selectedVessel.destination}</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "shipment-overview" && (
            <div className="bw-overview-pane">
              <div className="bw-panel-header">
                <div>
                  <h2>Vessel Cargo Manifest & Container Bays</h2>
                  <p>Real-time slot utilization, hazardous cargo segregations, and cold-chain reefer telemetry.</p>
                </div>
                <div className="bw-chip-group">
                  <span className="bw-info-tag">Vessel: {selectedVessel.name}</span>
                  <span className="bw-info-tag">IMO: {selectedVessel.imo}</span>
                  <span className="bw-info-tag">Capacity: {selectedVessel.teuCapacity.toLocaleString()} TEU</span>
                </div>
              </div>

              <div className="bw-cargo-grid">
                <div className="bw-cargo-card">
                  <h3>Slot Capacity Distribution</h3>
                  <div className="bw-cap-bar-wrap">
                    <div className="bw-cap-bar">
                      <div className="fill tech" style={{ width: "45%" }} title="High-tech Consumer Electronics" />
                      <div className="fill reefer" style={{ width: "22%" }} title="Pharmaceutical Cold-chain" />
                      <div className="fill auto" style={{ width: "24%" }} title="Automotive & Industrial" />
                      <div className="fill empty" style={{ width: "9%" }} title="Empty slots buffer" />
                    </div>
                  </div>
                  <div className="bw-cap-legend">
                    <div><span className="dot tech" /> Consumer Electronics (45%)</div>
                    <div><span className="dot reefer" /> Reefer Pharma (22%)</div>
                    <div><span className="dot auto" /> Automotives (24%)</div>
                    <div><span className="dot empty" /> Available Capacity (9%)</div>
                  </div>
                </div>

                <div className="bw-cargo-card">
                  <h3>Bunker Fuel & Emissions Telemetry</h3>
                  <div className="bw-telemetry-stats">
                    <div className="row">
                      <span>Daily Burn Rate:</span>
                      <strong>114.2 MT / 24h</strong>
                    </div>
                    <div className="row">
                      <span>CII Rating (Carbon Intensity):</span>
                      <strong className="green">Tier A (Superior)</strong>
                    </div>
                    <div className="row">
                      <span>Shaft Generator Power:</span>
                      <strong>1,850 kW</strong>
                    </div>
                    <div className="row">
                      <span>Estimated Fuel Saved this leg:</span>
                      <strong>$142,800 USD</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "port-ops" && (
            <div className="bw-overview-pane">
              <div className="bw-panel-header">
                <div>
                  <h2>Port Berthing & Gateway Turnaround</h2>
                  <p>Quayside crane moves per hour, terminal queue forecasts, and pilotage allocations.</p>
                </div>
              </div>

              <div className="bw-port-cards-row">
                <div className="bw-port-card">
                  <div className="bw-port-card-head">
                    <span className="port-badge">DESTINATION</span>
                    <h3>Port of Rotterdam · World Gateway</h3>
                  </div>
                  <div className="bw-port-data-list">
                    <div className="item"><span>Assigned Berth:</span><strong>Berth Deepwater #12</strong></div>
                    <div className="item"><span>Expected Crane Moves:</span><strong>3,420 moves @ 28 gross/hr</strong></div>
                    <div className="item"><span>Channel Draft Depth:</span><strong>19.8 meters</strong></div>
                    <div className="item"><span>Tug Assistance:</span><strong>2 Tugs Booked (Fairplay Towage)</strong></div>
                    <div className="item"><span>Bunkering Slot:</span><strong>Bio-LNG bunkering Oct 17, 04:00</strong></div>
                  </div>
                </div>

                <div className="bw-port-card">
                  <div className="bw-port-card-head">
                    <span className="port-badge completed">ORIGIN</span>
                    <h3>Port of Singapore · Pasir Panjang</h3>
                  </div>
                  <div className="bw-port-data-list">
                    <div className="item"><span>Departure Terminal:</span><strong>PPT-4 Berth 38</strong></div>
                    <div className="item"><span>Total Units Loaded:</span><strong>18,920 TEU</strong></div>
                    <div className="item"><span>Turnaround Speed:</span><strong>14.2 hours total dock time</strong></div>
                    <div className="item"><span>Customs Gate Pass:</span><strong>100% Verified Digital BOL</strong></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>

        {/* Right Vessel Telemetry Inspector Drawer */}
        {telemetryDrawerOpen && (
          <aside className="bw-telemetry-drawer">
            <div className="bw-drawer-header">
              <div>
                <span className="bw-drawer-subtitle">LIVE VESSEL HUD</span>
                <h3 className="bw-drawer-title">{selectedVessel.name}</h3>
              </div>
              <button
                type="button"
                className="bw-close-btn"
                onClick={() => setTelemetryDrawerOpen(false)}
                title="Collapse drawer"
              >
                ✕
              </button>
            </div>

            <div className="bw-drawer-status-pill">
              <span className={`status-badge ${selectedVessel.status.toLowerCase().replace(" ", "-")}`}>
                {selectedVessel.status}
              </span>
              <span className="location">{selectedVessel.locationName}</span>
            </div>

            {selectedVessel.alert && (
              <div className="bw-alert-banner">
                <strong>Safety Notice:</strong> {selectedVessel.alert}
              </div>
            )}

            {/* Live Metrics Grid */}
            <div className="bw-telemetry-metrics-grid">
              <div className="metric-box">
                <span className="lbl">Speed Over Ground</span>
                <span className="val">{selectedVessel.speedKnots} kn</span>
              </div>
              <div className="metric-box">
                <span className="lbl">Heading</span>
                <span className="val">{selectedVessel.heading}</span>
              </div>
              <div className="metric-box">
                <span className="lbl">Sea Swell</span>
                <span className="val">{selectedVessel.waveHeight.split(" ")[0]}</span>
              </div>
              <div className="metric-box">
                <span className="lbl">Progress</span>
                <span className="val">{scrubberProgress}%</span>
              </div>
            </div>

            {/* Vessel Specifications */}
            <div className="bw-specs-block">
              <div className="spec-row">
                <span>Vessel Class:</span>
                <strong>{selectedVessel.vesselClass}</strong>
              </div>
              <div className="spec-row">
                <span>IMO Number:</span>
                <strong>{selectedVessel.imo}</strong>
              </div>
              <div className="spec-row">
                <span>Cargo Volume:</span>
                <strong>{selectedVessel.currentTeu.toLocaleString()} / {selectedVessel.teuCapacity.toLocaleString()} TEU</strong>
              </div>
              <div className="spec-row">
                <span>Fuel Optimization:</span>
                <strong>{selectedVessel.fuelEfficiency}</strong>
              </div>
              <div className="spec-row">
                <span>Estimated Arrival:</span>
                <strong className="green">{selectedVessel.eta}</strong>
              </div>
            </div>

            {/* Voyage Waypoints Stepper */}
            <div className="bw-stepper-wrap">
              <h4>VOYAGE MILESTONES</h4>
              <div className="bw-stepper">
                {selectedVessel.waypoints.map((wp, i) => (
                  <div key={i} className={`step-item ${wp.status}`}>
                    <div className="step-marker">
                      <span className="dot" />
                      {i < selectedVessel.waypoints.length - 1 && <span className="line" />}
                    </div>
                    <div className="step-content">
                      <div className="step-title">{wp.name}</div>
                      <div className="step-date">{wp.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
