import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Wind, Waves, Thermometer, Droplets, Gauge, Compass } from "lucide-react";

import { ConditionCard } from "../components/ConditionCard";
import { RiskIndicator } from "../components/RiskIndicator";
import { TrafficLight } from "../components/TrafficLight";
import { RefreshModal } from "../components/RefreshModal";
import { LoadingModal } from "../components/LoadingModal";
import { DataQualityCard } from "../components/DataQualityCard";

export default function Conditions() {
    const [riskLevel, setRiskLevel] = useState("");

    const [windLevel, setWindLevel] = useState("");
    const [windInput, setWindInput] = useState("");

    const [directionLevel, setDirectionLevel] = useState("");
    const [directionInput, setDirectionInput] = useState("");

    const [tideLevel, setTideLevel] = useState("");
    const [tideInput, setTideInput] = useState("");
    const [tideState, setTideState] = useState("");
    const [tideStateType, setTideStateType] = useState("");
    const [nextTideTime, setNextTideTime] = useState("");

    const [waterTemp, setWaterTemp] = useState("");

    const [waveLevel, setWaveLevel] = useState("");
    const [waveInput, setWaveInput] = useState("");

    const [retrievalTime, setRetrievalTime] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [isFallback, setIsFallback] = useState(false);
    const [isCached, setIsCached] = useState(false);
    const [isFresh, setIsFresh] = useState(false);

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, [pathname]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError("");

            try {
                const result = await fetch(
                    "https://api.sup-safer.co.uk/risk/from-weather?lat=51.609058&lon=-3.972443"
                );

                const data = await result.json();

                if (!result.ok) {
                    throw new Error(
                        data.detail || "Unable to retrieve live conditions"
                    );
                }

                setRiskLevel(data.risk ?? "");

                setWindLevel(
                    data.component_risk?.wind ?? "normal"
                );

                setDirectionLevel(
                    data.component_risk?.direction ?? "normal"
                );

                setTideLevel(
                    data.component_risk?.tide ?? "normal"
                );

                setWaveLevel(
                    data.component_risk?.wave ?? "normal"
                );

                setWaveInput(
                    data.input?.wave ?? ""
                );

                setWindInput(
                    data.input?.wind ?? ""
                );

                setDirectionInput(
                    data.input?.wind_dir ?? ""
                );

                setRetrievalTime(
                    data.input?.requested_at
                        ? new Date(
                            data.input.requested_at
                        ).toLocaleTimeString("en-GB", {
                            hour: "2-digit",
                            minute: "2-digit",
                        })
                        : "Unavailable"
                );

                setTideInput(
                    data.input?.tide_flow !== undefined &&
                        data.input?.tide_flow !== null
                        ? Math.round(data.input.tide_flow * 100) / 100
                        : ""
                );

                setTideState(
                    data.tides?.tide_state ?? ""
                );

                setTideStateType(
                    data.tides?.next_tide?.type ?? ""
                );

                setNextTideTime(
                    data.tides?.next_tide?.time
                        ? new Date(
                            data.tides.next_tide.time
                        ).toLocaleTimeString("en-GB", {
                            hour: "2-digit",
                            minute: "2-digit",
                        })
                        : ""
                );

                setWaterTemp(
                    data.tides?.water_temp ?? ""
                );

                setIsFallback(Boolean(data.fallback));
                setIsCached(Boolean(data.cached));
                setIsFresh(Boolean(data.fresh));

                console.log("SUP Safer data received:", data);
            } catch (err) {
                console.error("Error fetching conditions:", err);

                setError(
                    err.message ||
                    "Unable to retrieve conditions right now."
                );
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleRefresh = () => {
        window.location.reload();
    };

    const currentDate = new Date().toLocaleDateString("en-GB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="min-h-screen bg-gray-50">

            {/* Page Header */}
            <section className="border-b border-gray-200 bg-white">
                <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8">

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#247a76]">
                                Swansea Beach
                            </p>

                            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                                Live Conditions
                            </h1>

                            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
                                Current environmental conditions and paddleboarding
                                risk assessment.
                            </p>
                        </div>

                        {/* <div className="sm:text-right">
                            <p className="text-xs font-medium uppercase tracking-[0.08em] text-gray-400">
                                Last updated
                            </p>

                            <p className="mt-1 text-sm font-medium text-gray-700">
                                {retrievalTime || "Unavailable"}
                            </p>

                            <p className="mt-1 text-xs text-gray-400">
                                {currentDate}
                            </p>
                        </div> */}

                    </div>

                </div>
            </section>


            {/* Main Content */}
            <main className="mx-auto max-w-7xl px-6 py-8 sm:px-8 sm:py-10">

                {/* Data Quality */}
                {!error && (
                    <DataQualityCard
                        time={retrievalTime}
                        date={currentDate}
                        isCached={isCached}
                        isFallback={isFallback}
                        isFresh={isFresh}
                    />
                )}


                {/* Error */}
                {error && (
                    <div className="rounded-xl border border-red-200 bg-white p-6">
                        <div className="flex items-start gap-4">

                            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
                                !
                            </div>

                            <div>
                                <h2 className="text-sm font-semibold text-gray-900">
                                    Unable to retrieve live conditions
                                </h2>

                                <p className="mt-1 text-sm leading-6 text-gray-600">
                                    {error}
                                </p>

                                <button
                                    type="button"
                                    onClick={handleRefresh}
                                    className="mt-4 text-sm font-semibold text-[#dd6f09] transition hover:text-[#c86108]"
                                >
                                    Try again →
                                </button>
                            </div>

                        </div>
                    </div>
                )}


                {!error && (
                    <>
                        {/* Risk Assessment */}
                        <section className="mt-6">

                            {/* <div className="mb-4">
                                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#dd6f09]">
                                    Risk assessment
                                </p>

                                <h2 className="mt-1 text-xl font-semibold text-gray-900">
                                    Current paddling risk
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    Based on the current environmental conditions
                                    at Swansea Beach.
                                </p>
                            </div> */}

                            <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8">

                                <div className="flex flex-col items-center gap-8 md:flex-row">

                                    <div className="flex-shrink-0">
                                        <TrafficLight
                                            level={riskLevel}
                                            size="md"
                                        />
                                    </div>

                                    <div className="w-full">
                                        <RiskIndicator
                                            level={riskLevel}
                                        />
                                    </div>

                                </div>

                            </div>

                        </section>


                        {/* Environmental Conditions */}
                        <section className="mt-10">

                            <div className="mb-5">

                                <h2 className="mt-1 text-xl font-semibold text-gray-900">
                                    Current conditions
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    The environmental factors used by SUP Safer
                                    when calculating the overall risk.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

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
                                    details="°"
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
                                    details={
                                        tideStateType
                                            ? `${tideStateType} Tide at: ${nextTideTime}`
                                            : ""
                                    }
                                />

                            </div>

                        </section>


                        {/* Risk Classification */}
                        <section className="mt-10">

                            <div className="mb-5">

                                <h2 className="mt-1 text-xl font-semibold text-gray-900">
                                    Risk classification
                                </h2>

                                {/* <p className="mt-1 text-sm text-gray-500">
                                    How SUP Safer interprets the overall conditions.
                                </p> */}
                            </div>

                            <div className="rounded-xl border border-gray-200 bg-white p-6">

                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                                    {/* Low */}
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 h-3.5 w-3.5 flex-shrink-0 rounded-full bg-green-500" />

                                        <div>
                                            <p className="text-sm font-medium text-gray-900">
                                                Low Risk
                                            </p>

                                            <p className="mt-1 text-xs leading-5 text-gray-500">
                                                Favourable conditions
                                            </p>
                                        </div>
                                    </div>


                                    {/* Moderate */}
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 h-3.5 w-3.5 flex-shrink-0 rounded-full bg-amber-500" />

                                        <div>
                                            <p className="text-sm font-medium text-gray-900">
                                                Moderate Risk
                                            </p>

                                            <p className="mt-1 text-xs leading-5 text-gray-500">
                                                Experienced paddlers only
                                            </p>
                                        </div>
                                    </div>


                                    {/* High */}
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 h-3.5 w-3.5 flex-shrink-0 rounded-full bg-red-500" />

                                        <div>
                                            <p className="text-sm font-medium text-gray-900">
                                                High Risk
                                            </p>

                                            <p className="mt-1 text-xs leading-5 text-gray-500">
                                                Not recommended
                                            </p>
                                        </div>
                                    </div>


                                    {/* Very High */}
                                    <div className="flex items-start gap-3">
                                        <div className="relative mt-1 h-3.5 w-3.5 flex-shrink-0">
                                            <div className="absolute inset-0 animate-ping rounded-full bg-red-500 opacity-50" />

                                            <div className="relative h-3.5 w-3.5 rounded-full bg-red-500" />
                                        </div>

                                        <div>
                                            <p className="text-sm font-medium text-gray-900">
                                                Very High Risk
                                            </p>

                                            <p className="mt-1 text-xs leading-5 text-gray-500">
                                                Conditions extremely dangerous
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </section>


                        {/* Disclaimer */}
                        {/* <section className="mt-10">

                            <div className="border-t border-gray-200 pt-6">

                                <p className="text-xs leading-5 text-gray-500">
                                    SUP Safer provides an environmental risk
                                    assessment based on available conditions.
                                    It should support, not replace, personal
                                    judgement and appropriate water safety
                                    knowledge.
                                </p>

                            </div>

                        </section> */}
                    </>
                )}

            </main>


            {/* Modals */}
            <RefreshModal onRefresh={handleRefresh} />

            <LoadingModal isLoading={loading} />

        </div>
    );
}