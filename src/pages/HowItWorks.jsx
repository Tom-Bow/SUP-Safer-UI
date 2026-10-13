import { Link } from "react-router-dom";

const factors = [
    {
        number: "01",
        title: "Wind speed",
        description:
            "Wind affects board control, paddling effort and the ability to return to shore. The model places wind speed into one of four severity categories.",
        categories: "Low · Moderate · High · Very high",
    },
    {
        number: "02",
        title: "Wind direction",
        description:
            "Offshore winds can carry paddlers away from the coast, making a return journey difficult. Direction is classified as onshore, offshore or cross-shore.",
        categories: "Onshore · Offshore · Cross-shore",
    },
    {
        number: "03",
        title: "Wave height",
        description:
            "Waves affect stability and how easily a paddleboard can be controlled. Wave height is grouped into four categories, from calm to very rough.",
        categories: "Calm · Choppy · Rough · Very rough",
    },
    {
        number: "04",
        title: "Tidal flow",
        description:
            "Tidal movement can carry a paddler away from their intended route and increase the effort required to make progress. The model considers four levels of tidal flow.",
        categories: "Slack · Weak · Moderate · Strong",
    },
];

const riskLevels = [
    {
        level: "Low",
        description: "The lowest severity category across the assessed factors.",
        colour: "#27865b",
    },
    {
        level: "Medium",
        description: "Conditions warrant caution and careful consideration.",
        colour: "#b77916",
    },
    {
        level: "High",
        description: "At least one factor has reached a high severity.",
        colour: "#c44236",
    },
    {
        level: "Very high",
        description: "At least one factor has reached the highest severity.",
        colour: "#8f2020",
    },
];

export default function HowItWorks() {
    return (<main className="min-h-screen bg-white text-slate-800">
        {/* Introduction */}
        <section className="border-b border-slate-200">
            <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:px-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#247a76]">
                    About the system </p>
                <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                    How SUP Safer works
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                    Weather forecasts contain a lot of information, but
                    knowing what that information means for paddleboarding
                    is not always straightforward. SUP Safer brings
                    together key environmental conditions and translates
                    them into a single risk classification, with the
                    contributing factors available to review.
                </p>

                <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                    The system was developed as part of a Computer
                    Science dissertation by Thomas Bowden at Swansea University,
                    focusing on a non-compensatory approach to paddleboarding
                    risk at Swansea Beach.
                </p>

            </div>
        </section>

        {/* Environmental factors */}
        <section>
            <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:px-8">
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-wider text-[#247a76]">
                        01 | What is assessed
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                        Four factors that affect conditions
                    </h2>

                    <p className="mt-4 leading-7 text-slate-600">
                        The model focuses on four environmental variables.
                        Each is assessed separately because a favourable
                        reading in one area does not necessarily make
                        another hazard less serious.
                    </p>
                </div>

                <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
                    {factors.map((factor) => (
                        <article
                            key={factor.number}
                            className="grid gap-3 py-7 sm:grid-cols-[64px_1fr] sm:gap-6"
                        >
                            <p className="text-sm font-medium text-[#247a76]">
                                {factor.number}
                            </p>

                            <div>
                                <h3 className="text-xl font-semibold text-slate-950">
                                    {factor.title}
                                </h3>

                                <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                                    {factor.description}
                                </p>

                                <p className="mt-3 text-sm text-slate-500">
                                    {factor.categories}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>

        {/* How the model works */}
        <section className="border-y border-slate-200 bg-slate-50">
            <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:px-8">
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-wider text-[#247a76]">
                        02 | The classification
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                        Why the highest risk matters
                    </h2>

                    <p className="mt-4 leading-7 text-slate-600">
                        SUP Safer uses a non-compensatory classification
                        method. Environmental measurements are mapped
                        into defined categories using fuzzy membership
                        functions. The model then uses the highest
                        severity across the four factors to determine
                        the overall result.
                    </p>

                    <p className="mt-4 leading-7 text-slate-600">
                        In practice, this means that calm water cannot
                        cancel out dangerous wind conditions. The model
                        deliberately avoids averaging hazards into a
                        potentially misleading middle-ground result.
                    </p>
                </div>

                <div className="mt-9 overflow-hidden border border-slate-200 bg-white">
                    <div className="border-b border-slate-200 px-5 py-4 sm:px-6">
                        <h3 className="font-semibold text-slate-950">
                            An example assessment
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">
                            Illustrative example, not live conditions
                        </p>
                    </div>

                    <div className="divide-y divide-slate-100">
                        {[
                            ["Wind speed", "High"],
                            ["Wind direction", "Offshore"],
                            ["Wave height", "Low"],
                            ["Tidal flow", "Moderate"],
                        ].map(([label, value]) => (
                            <div
                                key={label}
                                className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6"
                            >
                                <span className="text-sm text-slate-700">
                                    {label}
                                </span>
                                <span className="text-sm font-semibold text-slate-950">
                                    {value}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="border-t-2 border-[#247a76] bg-[#247a76]/5 px-5 py-5 sm:px-6">
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#247a76]">
                            Overall classification
                        </p>
                        <p className="mt-2 text-lg font-semibold text-slate-950">
                            Very high
                        </p>
                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                            In this example, the offshore wind direction
                            is assigned the highest severity. Lower
                            severity readings for waves and tidal flow
                            do not reduce the overall result.
                        </p>
                    </div>
                </div>

                <p className="mt-5 leading-7 text-slate-600">
                    The four inputs produce 192 possible combinations of
                    discrete categories. The dissertation evaluated all
                    192 combinations to check that the model produced
                    valid classifications consistently.
                </p>
            </div>
        </section>

        {/* Risk levels */}
        <section>
            <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:px-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#247a76]">
                    03 | Reading the result
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                    Understanding the risk levels
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                    The classification gives a summary of the most
                    severe assessed factor. It is intended to support
                    decision-making, rather than make the decision
                    for you.
                </p>

                <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
                    {riskLevels.map((risk) => (
                        <div
                            key={risk.level}
                            className="grid gap-3 py-5 sm:grid-cols-[170px_1fr] sm:items-center"
                        >
                            <div className="flex items-center gap-3">
                                <span
                                    className="h-3 w-3 shrink-0 rounded-full"
                                    style={{ backgroundColor: risk.colour }}
                                />
                                <h3 className="font-semibold text-slate-950">
                                    {risk.level}
                                </h3>
                            </div>

                            <p className="text-sm leading-6 text-slate-600">
                                {risk.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Guidance, visual communication and research */}
        <section className="border-y border-slate-200 bg-slate-50">
            <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:px-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#247a76]">
                    04 — Guidance and research
                </p>

                <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950">
                    Communicating risk clearly
                </h2>

                <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                    Identifying a hazard is only part of the problem.
                    Safety information must also be communicated in a
                    way that people can recognise, understand and use
                    when making decisions. SUP Safer combines
                    environmental measurements with a visual
                    classification to make the result easier to interpret.
                </p>

                {/* Beach flags */}
                <div className="mt-12 grid gap-8 md:grid-cols-[1fr_1.1fr] md:gap-12">
                    <div>
                        <h3 className="text-xl font-semibold text-slate-950">
                            The influence of beach warning flags
                        </h3>

                        <p className="mt-4 leading-7 text-slate-600">
                            Colour-coded beach flags provide a familiar
                            example of visual risk communication. They
                            are intended to convey information about
                            water conditions and hazards without
                            requiring beach users to interpret detailed
                            technical information.
                        </p>

                        <p className="mt-4 leading-7 text-slate-600">
                            Research suggests, however, that familiarity
                            with these systems cannot be taken for
                            granted. A 2023 study by Roefs and colleagues
                            found that recognition of beach warning flags
                            was generally poor, with red flags being
                            understood more consistently than several
                            other signals. Yellow flags were particularly
                            ambiguous, sometimes being associated with
                            safety rather than danger.
                        </p>

                        <p className="mt-4 leading-7 text-slate-600">
                            This highlights an important design
                            consideration: a colour may attract
                            attention, but its meaning still needs to
                            be communicated clearly. Visual cues should
                            support understanding rather than rely
                            entirely on assumptions about what users
                            already know.
                        </p>

                        <p className="mt-4 text-sm leading-6 text-slate-500">
                            Research:{" "}
                            <a
                                href="https://www.sciencedirect.com/science/article/pii/S0925753522002910"
                                target="_blank"
                                rel="noreferrer"
                                className="font-medium text-[#247a76] underline decoration-[#247a76]/40 underline-offset-4 hover:decoration-[#247a76]"
                            >
                                Familiarity with beach warning flags in
                                the Netherlands (2023)
                            </a>
                            .
                        </p>
                    </div>

                    <div className="border-l-2 border-[#4ac4a0] pl-5 sm:pl-6">
                        <h3 className="text-xl font-semibold text-slate-950">
                            Why visual presentation matters
                        </h3>

                        <p className="mt-4 leading-7 text-slate-600">
                            Visual interfaces can present complex
                            information in a form that is easier to
                            scan and compare. A clearly distinguished
                            risk level gives users an immediate summary,
                            while supporting measurements and
                            explanations allow them to understand
                            what is behind that result.
                        </p>

                        <p className="mt-4 leading-7 text-slate-600">
                            This is relevant to activities such as
                            paddleboarding, where users may need to
                            consider several environmental factors
                            before deciding whether to go out. A visual
                            summary can reduce the effort required to
                            interpret the assessment, but it should not
                            replace access to the underlying information.
                        </p>

                        <p className="mt-4 leading-7 text-slate-600">
                            Research published by Roefs and colleagues
                            in 2025 found that adding explanatory
                            pictograms to beach safety flags almost
                            doubled comprehension compared with the
                            existing designs in their study, and
                            increased participants' stated intention
                            to comply with the warnings. This supports
                            the value of combining familiar visual
                            signals with clearer explanatory information.
                        </p>

                        <p className="mt-4 text-sm leading-6 text-slate-500">
                            Research:{" "}
                            <a
                                href="https://www.sciencedirect.com/science/article/pii/S0925753525001730"
                                target="_blank"
                                rel="noreferrer"
                                className="font-medium text-[#247a76] underline decoration-[#247a76]/40 underline-offset-4 hover:decoration-[#247a76]"
                            >
                                Comprehensibility and effectiveness of
                                adapted beach safety flag designs (2025)
                            </a>
                            .
                        </p>
                    </div>
                </div>

                {/* Application to SUP Safer */}
                <div className="mt-12 border-y border-slate-200 py-8">
                    <h3 className="text-xl font-semibold text-slate-950">
                        Applying these principles to SUP Safer
                    </h3>

                    <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                        SUP Safer applies a similar principle to
                        environmental risk assessment. Its colour-coded
                        classification gives users a concise overview
                        of the assessed conditions, while the individual
                        factor results provide more detail about the
                        hazards contributing to the overall level.
                    </p>

                    <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                        The intention is not to reproduce an official
                        beach flag system. Instead, the interface uses
                        visual distinctions to make a technical
                        assessment easier to navigate. Clear labels
                        and supporting explanations remain important
                        because colour alone may be misunderstood
                        or inaccessible to some users.
                    </p>

                    <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                        This approach also reflects the model's
                        non-compensatory design: the overall
                        classification highlights the most severe
                        assessed factor rather than averaging it away.
                        The visual presentation reinforces that
                        classification, while the detailed readings
                        help users understand its basis.
                    </p>
                </div>

                {/* Paddle UK */}
                <div className="mt-10">
                    <h3 className="text-xl font-semibold text-slate-950">
                        Paddle UK safety guidance
                    </h3>

                    <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                        The model's environmental focus is also
                        informed by paddleboarding safety guidance.
                        Paddle UK advises paddlers to avoid offshore
                        winds because they can carry a board away from
                        the coast and make returning difficult.
                        Its published information describes how even
                        moderate offshore winds can cause substantial
                        drift over a relatively short period.
                    </p>

                    <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                        This illustrates why a single environmental
                        factor can be important enough to determine
                        an overall risk classification. SUP Safer
                        therefore does not allow lower wave or tidal
                        severity to cancel out a serious wind-related
                        hazard.
                    </p>

                    <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                        The assessment should still be used alongside
                        current official guidance, local knowledge,
                        appropriate equipment and an honest assessment
                        of personal ability.
                    </p>

                    <a
                        href="https://paddleuk.org.uk/offshore-winds-and-their-effects-on-stand-up-paddleboards/"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#247a76] underline decoration-[#247a76]/40 underline-offset-4 hover:decoration-[#247a76]"
                    >
                        Read Paddle UK's offshore wind guidance
                        {/* <span aria-hidden="true">↗</span> */}
                    </a>
                </div>

                {/* Thresholds and evidence */}
                <div className="mt-10 border-t border-slate-200 pt-8">
                    <h3 className="text-xl font-semibold text-slate-950">
                        Research-informed thresholds
                    </h3>

                    <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                        The dissertation used published literature
                        to inform the environmental categories and
                        thresholds. For example, wave heights of
                        0.5 metres or below were assigned to the
                        model's low-severity category. These
                        thresholds provide a structured basis for
                        classification; they are not universal
                        guarantees that conditions are safe for
                        every paddler.
                    </p>

                    <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                        The resulting system was evaluated against
                        all 192 combinations of discretised inputs.
                        Formal checks examined totality, determinism
                        and monotonicity, and automated tests covered
                        the model and API. A usability study involving
                        17 participants achieved a System Usability
                        Scale score of 92.05 out of 100.
                    </p>

                    <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                        These results provide evidence about the
                        implementation's consistency and the
                        prototype's perceived usability. They do
                        not demonstrate that the interface prevents
                        accidents or that its colour scheme will be
                        interpreted correctly by every user.
                    </p>
                </div>

                <div className="mt-10 border-l-4 border-[#4ac4a0] bg-white px-5 py-5 sm:px-6">
                    <h3 className="font-semibold text-slate-950">
                        The key principle
                    </h3>
                    <p className="mt-2 leading-7 text-slate-600">
                        Effective risk communication needs both a
                        clear visual signal and enough supporting
                        information to explain what it means.
                        SUP Safer is designed to help people interpret
                        environmental conditions, not to replace
                        official safety guidance or personal judgement.
                    </p>
                </div>
            </div>
        </section>

        {/* Data handling */}
        <section>
            <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:px-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#247a76]">
                    05 | Data handling
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                    Where the information comes from
                </h2>

                <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                    The system retrieves environmental information from
                    external data providers, normalises it and passes
                    the relevant values to the classification model.
                    The dissertation implementation used the following
                    sources:
                </p>

                <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
                    <div className="grid gap-2 py-5 sm:grid-cols-[200px_1fr]">
                        <h3 className="font-semibold text-slate-950">
                            Open-Meteo
                        </h3>
                        <p className="text-sm leading-6 text-slate-600">
                            Weather and marine data used to inform the
                            environmental assessment.
                        </p>
                    </div>

                    <div className="grid gap-2 py-5 sm:grid-cols-[200px_1fr]">
                        <h3 className="font-semibold text-slate-950">
                            Stormglass
                        </h3>
                        <p className="text-sm leading-6 text-slate-600">
                            An additional weather data provider used as
                            a backup in the dissertation implementation.
                        </p>
                    </div>

                    <div className="grid gap-2 py-5 sm:grid-cols-[200px_1fr]">
                        <h3 className="font-semibold text-slate-950">
                            UK Hydrographic Office
                        </h3>
                        <p className="text-sm leading-6 text-slate-600">
                            Tidal information used to support the
                            assessment of tidal conditions.
                        </p>
                    </div>
                </div>

                <p className="mt-6 leading-7 text-slate-600">
                    The API also supports caching and fallback handling
                    to help manage temporary provider outages. Data
                    freshness matters: previously retrieved conditions
                    should not be mistaken for a live reading. If
                    reliable information is unavailable, the system
                    should communicate that limitation rather than
                    imply that an assessment is current.
                </p>
            </div>
        </section>

        {/* Evaluation */}
        <section className="border-y border-slate-200 bg-slate-50">
            <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:px-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#247a76]">
                    06 | Dissertation evaluation
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                    Tested for consistency and usability
                </h2>

                <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                    The dissertation evaluated the system through
                    software testing, formal checks of the classification
                    properties and a small usability study.
                </p>

                <div className="mt-9 grid gap-8 border-y border-slate-200 py-8 sm:grid-cols-2">
                    <div>
                        <p className="text-4xl font-semibold tracking-tight text-[#247a76]">
                            92.05
                            <span className="ml-1 text-lg font-normal text-slate-500">
                                / 100
                            </span>
                        </p>
                        <h3 className="mt-3 font-semibold text-slate-950">
                            System Usability Scale score
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                            The system achieved a high perceived
                            usability score in the evaluation.
                        </p>
                    </div>

                    <div>
                        <p className="text-4xl font-semibold tracking-tight text-[#247a76]">
                            17
                        </p>
                        <h3 className="mt-3 font-semibold text-slate-950">
                            Usability study participants
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                            Participants assessed the usability of
                            the prototype, including how clearly
                            the risk information was presented.
                        </p>
                    </div>
                </div>

                <div className="mt-8 max-w-3xl">
                    <h3 className="text-xl font-semibold text-slate-950">
                        What the testing covered
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                        Formal checks examined totality, determinism
                        and monotonicity. All 192 combinations of
                        discretised inputs were evaluated, and
                        automated unit, API and integration tests
                        were carried out.
                    </p>

                    <p className="mt-4 leading-7 text-slate-600">
                        Feedback was positive about the simplicity of
                        the interface, the traffic-light risk indicator
                        and the ability to see which environmental
                        factors contributed to a result.
                    </p>

                    <p className="mt-4 leading-7 text-slate-600">
                        These findings support the consistency of the
                        implemented model and the usability of the
                        prototype. However, the study was small and
                        exploratory. It does not establish that the
                        system prevents accidents or that its results
                        represent every paddler's experience.
                    </p>
                </div>
            </div>
        </section>

        {/* Limitations and closing */}
        <section>
            <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:px-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#247a76]">
                    07 | Using SUP Safer responsibly
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                    What the assessment cannot tell you
                </h2>

                <div className="mt-6 max-w-3xl space-y-4 leading-7 text-slate-600">
                    <p>
                        The current model focuses on wind speed, wind
                        direction, wave height and tidal flow. It does
                        not account for every relevant hazard, including
                        all local coastal features, swell-period effects
                        or wind gusts.
                    </p>

                    <p>
                        Thresholds are informed by published literature
                        but have not been empirically calibrated for
                        every situation at Swansea Beach. Environmental
                        conditions can change during a session, and
                        the availability of external data can affect
                        the assessment.
                    </p>

                    <p>
                        Always consider your own ability, equipment,
                        the forecast for the duration of your session,
                        local conditions and official safety advice.
                        Do not rely on a single risk rating when
                        deciding whether to enter the water.
                    </p>
                </div>

                <div className="mt-10 border-t border-slate-200 pt-8">
                    <h3 className="text-xl font-semibold text-slate-950">
                        Check the conditions before you go
                    </h3>

                    <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                        SUP Safer brings environmental data and a
                        transparent classification method together
                        to help you understand the conditions. Use
                        it alongside appropriate training, experience
                        and current local guidance.
                    </p>

                    <Link
                        to="/"
                        className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#247a76] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1d625f]"
                    >
                        View current conditions
                        <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </section>
    </main>
    );

}
