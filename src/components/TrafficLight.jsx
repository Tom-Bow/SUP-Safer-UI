export function TrafficLight({ level, size = 'md' }) {
  const sizeClasses = {
    sm: {
      container: 'w-20 h-48',
      light: 'w-12 h-12',
      gap: 'gap-3',
      padding: 'p-3'
    },
    md: {
      container: 'w-28 h-64',
      light: 'w-16 h-16',
      gap: 'gap-4',
      padding: 'p-4'
    },
    lg: {
      container: 'w-36 h-80',
      light: 'w-20 h-20',
      gap: 'gap-5',
      padding: 'p-5'
    }
  };

  const config = sizeClasses[size];

  const isLightActive = (lightLevel) => {
    return level === lightLevel;
  };

  const getLightClass = (lightLevel, baseColor, glowColor) => {
    const isActive = isLightActive(lightLevel);
    return `${config.light} rounded-full transition-all duration-500 ${isActive
      ? `${baseColor} shadow-lg ${glowColor}`
      : 'bg-gray-300'
      }`;
  };

  return (
    <div className="flex flex-col items-center">
      <div className={`${config.container} bg-gray-900 rounded-3xl ${config.padding} flex flex-col ${config.gap} items-center shadow-2xl border-4 border-gray-800`}>
        {/* Red Light - High & Very High Risk */}
        <div className={getLightClass(
          level === 'HIGH' || level === 'VERY_HIGH' ? level : null,
          'bg-red-500',
          'shadow-red-500/70'
        )}>
          {level === 'HIGH' && (
            <div className="w-full h-full rounded-full bg-red-400 animate-pulse" />
          )}

          {level === 'VERY_HIGH' && (
            <div className="w-full h-full rounded-full bg-red-400 animate-ping" />
          )}
        </div>

        {/* Amber Light - Moderate Risk */}
        <div className={getLightClass('MEDIUM', 'bg-amber-500', 'shadow-amber-500/50')}>
          {isLightActive('MEDIUM') && (
            <div className="w-full h-full rounded-full bg-amber-400 animate-pulse" />
          )}
        </div>

        {/* Green Light - Low Risk */}
        <div className={getLightClass('LOW', 'bg-green-500', 'shadow-green-500/50')}>
          {isLightActive('LOW') && (
            <div className="w-full h-full rounded-full bg-green-400 animate-pulse" />
          )}
        </div>
      </div>
    </div>
  );
}
