import { useEffect, useState } from "react"
import { LocationHeader } from "./components/LocationHeader";
import { ConditionCard } from "./components/ConditionCard";
import { RiskIndicator } from "./components/RiskIndicator";
import { TrafficLight } from "./components/TrafficLight";
import { RefreshModal } from "./components/RefreshModal";
import { LoadingModal } from "./components/LoadingModal";
import { Wind, Waves, Thermometer, Droplets, Gauge, Compass } from 'lucide-react';
import { DataQualityCard } from "./components/DataQualityCard";

export default function App() {
    const [riskLevel, setRiskLevel] = useState("");

    const [windLevel, setWindLevel] = useState("");
    const [windInput, setWindInput] = useState("");

    const [directionLevel, setDirectionLevel] = useState("");
    const [directionInput, setDirectionInput] = useState("");

    const [tideLevel, setTideLevel] = useState("");
    const [tideInput, setTideInput] = useState("");
    const [tideState, setTideState] = useState("");
    const [tideStateType, setTideStateType] = useState("");
    const [nextTideTime, setNextTideTime] = useState();
    const [waterTemp, setWaterTemp] = useState("");

    const [waveLevel, setWaveLevel] = useState("");
    const [waveInput, setWaveInput] = useState("");

    const [retrievalTime, setRetrievalTime] = useState("");

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");
    const [isFallback, setIsFallback] = useState(false);
    const [isCached, setIsCached] = useState(false);
    const [isFresh, setIsFresh] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            console.log("Loading Started");

            try {
                const result = await fetch("https://swansea-conditions-tool.onrender.com/risk/from-weather?lat=51.609058&lon=-3.972443");
                const data = await result.json();

                if (!result.ok) {
                throw new Error(data.detail || "Unable to retrieve live conditions");
            }

            setRiskLevel(data.risk ?? "");
            setWindLevel(data.component_risk?.wind ?? "normal");
            setDirectionLevel(data.component_risk?.direction ?? "normal");
            setTideLevel(data.component_risk?.tide ?? "normal");
            setWaveLevel(data.component_risk?.wave ?? "normal");

            setWaveInput(data.input?.wave ?? "");
            setWindInput(data.input?.wind ?? "");
            setDirectionInput(data.input?.wind_dir ?? "");
            setRetrievalTime(
                data.input?.requested_at
                    ? new Date(data.input.requested_at).toLocaleTimeString('en-GB', {
                        hour: '2-digit', minute: '2-digit'
                    })
                    : "Unavailable"
            );

            setTideInput(
                data.input?.tide_flow !== undefined && data.input?.tide_flow !== null
                    ? Math.round(data.input.tide_flow * 100) / 100
                    : ""
            );
            setTideState(data.tides?.tide_state ?? "");
            setTideStateType(data.tides?.next_tide?.type ?? "");
            setNextTideTime(
                data.tides?.next_tide?.time
                    ? new Date(data.tides.next_tide.time).toLocaleTimeString("en-GB", {
                        hour: "2-digit",
                        minute: "2-digit",
                    })
                    : ""
            );
            setWaterTemp(data.tides?.water_temp ?? "");

            setIsFallback(Boolean(data.fallback));
            setIsCached(Boolean(data.cached));
            setIsFresh(Boolean(data.fresh));


            console.log("DATA RECEIEVED");
            console.log(data);

        } catch (err) {
            console.error("Error fetching data:", err);
            setError(err.message || "Unable to retrieve conditions right now.");
        } finally {
            console.log("Loading Complete");
            setLoading(false);
        }
    };
    fetchData();
}, []);

const handleRefresh = () => {
    window.location.reload();
};

const currentDate = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

const currentTime = new Date().toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit'
});


return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
            <LocationHeader
                title="Paddleboard Risk Tool"
                location="Swansea Beach"
                date={currentDate}
                time={retrievalTime} //Set to time that data was originally retrieved (not time that page was loaded)
            />
            {!error &&
                <DataQualityCard
                    time={retrievalTime}
                    date={currentDate}
                    isCached={isCached}
                    isFallback={isFallback}
                    isFresh={isFresh}
                />
            }
            <div className="mb-6 sm:mb-8">
                <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                    <div className="flex-shrink-0">
                        <TrafficLight level={riskLevel} size="md" />
                    </div>
                    <div className="flex-1 w-full">
                        <RiskIndicator level={riskLevel} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                    <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
                        <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-4 sm:mb-6">Current Conditions</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            <ConditionCard
                                icon={Wind}
                                label="Wind Speed"
                                value={windInput}
                                status={windLevel}
                                details=" mph"
                            />
                            <ConditionCard
                                icon={Compass}
                                label="Wind Direction"
                                value={directionInput}
                                status={directionLevel}
                                details="° "
                            />
                            <ConditionCard
                                icon={Waves}
                                label="Wave Height"
                                value={waveInput}
                                status={waveLevel}
                                details=" m"
                            />
                            <ConditionCard
                                icon={Gauge}
                                label="Tide Strength"
                                value={tideInput}
                                status={tideLevel}
                                details=" knots"
                            />
                            <ConditionCard
                                icon={Thermometer}
                                label="Water Temperature"
                                value={waterTemp}
                                status="normal"
                                details=" °C"
                            />
                            <ConditionCard
                                icon={Droplets}
                                label="Tide Status"
                                value={tideState}
                                status="normal"
                                details={tideStateType + " Tide at: " + nextTideTime}
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                    <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
                        <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-4">Risk Classification</h3>
                        <div className="space-y-3 sm:space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-4 h-4 rounded-full bg-green-500 flex-shrink-0" />
                                <div className="flex-1">
                                    <div className="text-sm font-medium text-gray-900">Low Risk</div>
                                    <div className="text-xs text-gray-500">Favorable conditions</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-4 h-4 rounded-full bg-amber-500 flex-shrink-0" />
                                <div className="flex-1">
                                    <div className="text-sm font-medium text-gray-900">Moderate Risk</div>
                                    <div className="text-xs text-gray-500">Experienced paddlers only</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-4 h-4 rounded-full bg-red-500 flex-shrink-0" />
                                <div className="flex-1">
                                    <div className="text-sm font-medium text-gray-900">High Risk</div>
                                    <div className="text-xs text-gray-500">Not recommended</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 relative">
                                <div className="absolute w-4 h-4 rounded-full bg-red-500 opacity-50 animate-ping" />
                                <div className="w-4 h-4 rounded-full bg-red-500 flex-shrink-0 relative" />
                                <div className="flex-1">
                                    <div className="text-sm font-medium text-gray-900">Very High Risk</div>
                                    <div className="text-xs text-gray-500">Conditions extremely dangerous</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-6">
                        <h3 className="text-sm font-medium text-blue-900 mb-2">Dissertation Project</h3>
                        <p className="text-xs text-blue-700 leading-relaxed">
                            This risk assessment system uses real-time environmental data and established safety
                            parameters to provide paddleboarders with an informed decision-making tool for
                            water sports activities at Swansea Beach. This tool should not replace professional judgement.
                        </p>
                    </div>

                </div>
            </div>
        </div>
        <RefreshModal onRefresh={handleRefresh} />
        <LoadingModal isLoading={loading} />
    </div>
)
}
