export function DataQualityCard({ date, time, isCached, isFallback, isFresh }) {
    const containerClasses = isFallback
        ? "border-amber-200 bg-amber-50"
        : isCached
            ? "border-blue-200 bg-blue-50"
            : "border-green-200 bg-green-50";

    const textClasses = isFallback
        ? "text-amber-800"
        : isCached
            ? "text-blue-800"
            : "text-green-800";

    const statusLabel = isFallback
        ? "Fallback Data"
        : isCached
            ? "Cached data"
            : "Live data";

    const message = isFallback
        ? "Live environmental data is temporarily unavailable. The information shown may be outdated - please check local conditions before going on the water."
        : isCached
            ? "Showing recently cached conditions"
            : isFresh
                ? "Showing live environmental conditions"
                : "Data may not be fully up to date";

    return (
        <div className={`mb-6 rounded-xl border p-3 sm:p-3 ${containerClasses}`}>
            <p className={`text-sm ${textClasses}`}>
                <span className="font-medium">{statusLabel}:</span>{" "}

                {!isFallback &&
                    <>
                        {message} retrieved at <span className="font-medium">{time}</span> on <span className="font-medium">{date}</span>.
                    </>
                }
                {isFallback && 
                <>
                {message} Last updated <span className="font-medium">{date}</span> at <span className="font-medium">{time}</span>
                </>
                }
            </p>
        </div>
    );
}