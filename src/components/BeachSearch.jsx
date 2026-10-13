
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, ArrowUpRight } from "lucide-react";

export default function BeachSearch() {
  const [query, setQuery] = useState("");

  const beachName = "Swansea Beach";
  const location = "Swansea, South Wales";

  const normalizedQuery = query.trim().toLowerCase();

  const matchesSwansea =
    !normalizedQuery ||
    beachName.toLowerCase().includes(normalizedQuery) ||
    location.toLowerCase().includes(normalizedQuery) ||
    "wales".includes(normalizedQuery) ||
    "uk".includes(normalizedQuery) ||
    "united kingdom".includes(normalizedQuery);

  return (
    <section className="bg-gray-50 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          {/* <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#247a76]">
            Find your beach
          </p> */}

          <h2 className="text-3xl font-semibold tracking-tight text-[#247a76] sm:text-4xl">
            Where are you planning to paddle?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-600">
            Search for a beach to explore its current environmental
            conditions and paddleboarding risk assessment.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center gap-3 px-4 sm:px-5">
            <Search
              size={21}
              className="shrink-0 text-gray-400"
              aria-hidden="true"
            />

            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search for a beach..."
              aria-label="Search for a beach"
              aria-describedby="beach-search-status"
              className="min-w-0 flex-1 border-0 bg-transparent py-5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-0"
            />

            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="shrink-0 rounded-md px-2 py-1 text-sm text-gray-500 transition hover:text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#dd6f09]"
              >
                Clear
              </button>
            )}
          </div>

          <div className="border-t border-gray-100">
            {matchesSwansea ? (
              <Link
                to="/conditions?beach=swansea"
                className="group relative isolate flex items-center gap-4 overflow-hidden px-4 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#247a76] sm:px-5"
              >
                {/* Expanding background */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-10 top-1/2 -z-10 h-12 w-12 -translate-x-1/2 -translate-y-1/2 scale-100 rounded-full bg-[#cef8f5] transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[31] group-focus-visible:scale-[31] sm:left-11"
                />

                {/* Map pin */}
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#cef8f5] text-[#247a76]">
                  <MapPin size={23} aria-hidden="true" />
                </div>

                {/* Beach details */}
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-gray-900">
                    {beachName}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {location}
                  </p>

                  <p className="mt-2 text-xs font-medium text-green-700">
                    Conditions available
                  </p>
                </div>

                {/* Arrow */}
                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-gray-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#247a76]"
                  aria-hidden="true"
                />
              </Link>
            ) : (
              <div
                id="beach-search-status"
                role="status"
                className="px-5 py-8 text-center"
              >
                <MapPin
                  size={25}
                  className="mx-auto mb-3 text-gray-400"
                  aria-hidden="true"
                />

                <h3 className="font-medium text-gray-900">
                  No supported beach found
                </h3>

                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-500">
                  We're working on adding more locations. Swansea Beach
                  is currently the only supported destination.
                </p>

                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="mt-4 text-sm font-semibold text-[#247a76]"
                >
                  View available beaches
                </button>
              </div>
            )}
          </div>
        </div>

        <p className="mt-4 text-center text-sm text-gray-500">
          More locations coming soon.
        </p>
      </div>
    </section>
  );
}