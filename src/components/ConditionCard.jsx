import { WindDirectionTile } from "./WindDirectionTile";

export function ConditionCard({ icon: Icon, label, value, status, details }) {

  const direction = label == "Wind Direction";
  const wind = label == "Wind Speed";
  const wave = label == "Wave Height";
  const tide = label == "Tide Strength";
  const waterTemp = label == "Water Temperature";
  const tideTime = label == "Tide Status";
  const hasValue = value !== null && value !== undefined && value !== "";

const getCompassDirection = (degrees) => {
  const directions = [
    "N","NNE","NE","ENE",
    "E","ESE","SE","SSE",
    "S","SSW","SW","WSW",
    "W","WNW","NW","NNW"
  ];

  const index = Math.round(degrees / 22.5) % 16;
  return directions[index];
};

  const getStatusColor = () => {
    switch (status) {
      case 0:
        return 'border-green-300 bg-green-50/50';
      case 1:
        return 'border-amber-300 bg-amber-50/50';
      case 2:
      case 3:
        return 'border-red-300 bg-red-50/50';
      case 'normal':
        return 'border-gray-300 bg-gray-50/50';
    }
  };

  const getIconColor = () => {
    switch (status) {
      case 0:
        return 'text-green-600';
      case 1:
        return 'text-amber-600';
      case 2:
      case 3:
        return 'text-red-600';
      case 'normal':
        return 'text-gray-600';
    }
  };

  const getDescription = () => {
    let desc = "";
    switch (status) {
      case 0:
        if (direction) {
          desc = "Onshore"
        }
        if (wind) {
          desc = "Low Winds"
        }
        if (wave) {
          desc = "Low Swell"
        }
        if (tide) {
          desc = "Slack Tide"
        }
        break;

      case 1:
        if (direction) {
          desc = "Cross-Shore"
        }
        if (wind) {
          desc = "Moderate Winds"
        }
        if (wave) {
          desc = "Moderate Swell"
        }
        if (tide) {
          desc = "Weak Tide"
        }
        break;

      case 2:
        if (direction) {
          desc = "Cross-Shore"
        }
        if (wind) {
          desc = "High Winds"
        }
        if (wave) {
          desc = "High Swell"
        }
        if (tide) {
          desc = "Strong Tide"
        }
        break;

      case 3:
        if (direction) {
          desc = "Offshore"
        }
        if (wind) {
          desc = "Very High Winds"
        }
        if (wave) {
          desc = "Very High Swell"
        }
        if (tide) {
          desc = "Very Strong Tide"
        }
        break;
    }
    return desc;
  }

  const wetsuitRating = () => {
    if (waterTemp && value < 4) {
      return "6/5mm"
    }
    if (waterTemp && value < 8) {
      return "5/4mm"
    }
    if (waterTemp && value < 12) {
      return "4/3mm"
    }
    if (waterTemp && value < 18) {
      return "3/2mm"
    }
    else {
      return "2mm"
    }

  }

  return (
    <div className={`${getStatusColor()} border rounded-xl p-4 sm:p-5 transition-all hover:shadow-md active:scale-95 relative`}>
      <div className="flex items-start gap-3">
        <div className={`${getIconColor()} mt-1 flex-shrink-0`}>
          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs sm:text-sm text-gray-600 mb-1">{label}</div>
          <div className="text-xl sm:text-2xl font-light text-gray-900 mb-1">
            {hasValue ? (
              <>
              {value}
              {wind && details}
              {wave && details}
              {direction && details + " " + getCompassDirection(value)}
              {tide && details}
              {waterTemp && details}
              </>
            ) : ("Currently Unavailable")}
          </div>
          {details && <div className="text-xs text-gray-500 truncate">{getDescription()}</div>}
          {waterTemp && hasValue && <div className="text-xs text-gray-500 truncate">{wetsuitRating()} Wetsuit Recommended (Minimum)</div>}
          {tideTime && hasValue && <div className="text-xs text-gray-500 truncate">{details}</div>}
        </div>
        {direction && hasValue && (
          <div className="absolute top-1/2 right-4 -translate-y-1/2">
            <WindDirectionTile direction={value} />
          </div>
        )}
      </div>
    </div>
  );
}
