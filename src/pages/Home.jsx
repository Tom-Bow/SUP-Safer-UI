import { Link } from "react-router-dom";
import BeachSearch from "../components/BeachSearch";

export default function Home() {
    return (
        <div className="min-h-screen bg-white">

            {/* Hero */}
            <section className="relative isolate overflow-hidden">
                {/* Video */}
                <video
                    className="absolute inset-0 -z-20 h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-hidden="true"
                >
                    <source src="/videos/calm-sea-with-paddleboarder.mp4" type="video/mp4" />
                </video>

                {/* Dark overlay */}
                <div className="absolute inset-0 -z-10 bg-white/35" />

                {/* Overlay */}
                <div className="absolute inset-0 -z-10 bg-black/45" />
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28">
                    <div className="max-w-3xl">
                        {/* <p className="mb-4 ml-1 text-md font-semibold uppercase tracking-[0.12em] text-[#247a76]">
                            SUP SAFER
                        </p> */}
                        {/* #4ac4a0 main colour */}
                        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                            Paddleboard with a better understanding of the conditions.
                        </h1>

                        <p className="mt-6 ml-1 max-w-xl text-base leading-7 text-gray-300 text-sm sm:text-lg">
                            Say goodbye to checking multiple apps before your session.
                            SUP Safer brings current environmental conditions together
                            to provide a clear, easy-to-understand risk classification
                            for paddleboarding, all in one place.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="#search"
                                className="rounded-lg bg-[#4ac4a0] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#247a76]"
                            >
                                View current conditions
                            </a>

                            <Link
                                to="/how-it-works"
                                className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                            >
                                How it works
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="search" className="scroll-mt-40">
                <BeachSearch />
            </section>



            {/* Introduction */}
            <section className="border-b border-gray-200">
                <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8 sm:py-20">
                    <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">

                        <div>
                            <p className="text-sm ml-1 font-semibold uppercase tracking-[0.12em] text-[#247a76]">
                                SUP Safer
                            </p>

                            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                                Making environmental conditions easier to understand.
                            </h2>
                        </div>

                        <div>
                            <p className="text-base leading-7 text-gray-600">
                                Paddleboarding conditions can change quickly. Wind,
                                waves and tidal conditions can all affect the
                                difficulty and safety of a session.
                            </p>

                            <p className="mt-4 text-base leading-7 text-gray-600">
                                SUP Safer brings these factors together into a
                                single classification, allowing paddlers to quickly
                                understand the current conditions before heading
                                onto the water.
                            </p>

                        </div>

                    </div>

                    <div className="max-w-2xl">
                        <h2 className="mt-10 text-lg font-semibold tracking-tight text-gray-900 sm:text-2xl">
                            From environmental data to a simple risk classification.
                        </h2>
                    </div>

                    <div className="mt-10 grid gap-8 md:grid-cols-3">

                        <div>
                            <span className="text-sm font-semibold text-[#247a76]">
                                01
                            </span>

                            <h3 className="mt-3 text-lg font-semibold text-gray-900">
                                Environmental data
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                Current wind, wave and tidal conditions are collected
                                for Swansea Beach.
                            </p>
                        </div>

                        <div>
                            <span className="text-sm font-semibold text-[#247a76]">
                                02
                            </span>

                            <h3 className="mt-3 text-lg font-semibold text-gray-900">
                                Risk assessment
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                Each environmental factor is assessed against defined
                                risk thresholds.
                            </p>
                        </div>

                        <div>
                            <span className="text-sm font-semibold text-[#247a76]">
                                03
                            </span>

                            <h3 className="mt-2 text-lg font-semibold text-gray-900">
                                Clear result
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                The individual factors are combined into an overall
                                risk classification.
                            </p>
                        </div>

                    </div>

                    <Link
                        to="/how-it-works"
                        className="mt-6 mb-6 inline-block text-sm font-semibold text-[#247a76] hover:text-[#4ac4a0]"
                    >
                        Learn how SUP Safer works →
                    </Link>

                </div>
            </section>


            {/* Current Conditions */}
            {/* <section className="bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">

                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#dd6f09]">
                                Swansea Beach
                            </p>

                            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                                Current conditions
                            </h2>
                        </div>

                        <Link
                            to="/conditions"
                            className="text-sm font-semibold text-[#dd6f09] hover:text-[#c86108]"
                        >
                            View full assessment →
                        </Link>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                        <div className="rounded-xl border border-gray-200 bg-white p-5">
                            <p className="text-sm text-gray-500">Risk assessment</p>
                            <p className="mt-2 text-xl font-semibold text-gray-900">
                                Live
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                Updated with current conditions
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-200 bg-white p-5">
                            <p className="text-sm text-gray-500">Wind</p>
                            <p className="mt-2 text-xl font-semibold text-gray-900">
                                Live data
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                Speed and direction
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-200 bg-white p-5">
                            <p className="text-sm text-gray-500">Waves</p>
                            <p className="mt-2 text-xl font-semibold text-gray-900">
                                Live data
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                Current wave conditions
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-200 bg-white p-5">
                            <p className="text-sm text-gray-500">Tide</p>
                            <p className="mt-2 text-xl font-semibold text-gray-900">
                                Live data
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                Current tidal conditions
                            </p>
                        </div>

                    </div>
                </div>
            </section> */}

            {/* Project */}
            {/* <section>
                <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 sm:p-10">

                        <div className="max-w-2xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#247a76]">
                                The project
                            </p>

                            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">
                                Developed as a research project at Swansea University.
                            </h2>

                            <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base">
                                SUP Safer was developed as part of research into
                                non-compensatory risk classification for paddleboarding
                                at Swansea Beach.
                            </p>

                            <Link
                                to="/about"
                                className="mt-6 inline-block text-sm font-semibold text-[#247a76] hover:text-[#4ac4a0]"
                            >
                                About SUP Safer →
                            </Link>
                        </div>

                    </div>
                </div>
            </section> */}

        </div>
    );
}