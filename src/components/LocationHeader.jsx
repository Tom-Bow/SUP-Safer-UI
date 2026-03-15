import { MapPin, Calendar, Clock } from 'lucide-react';

export function LocationHeader({ title, location, date, time }) {
  return (
    <div className="mb-6 sm:mb-8">
      <h1 className="text-xl sm:text-3xl font-light text-gray-900 mb-2">{title}</h1>
      <div className="flex items-center gap-2 mb-2 sm:mb-3">
        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0" />
        <h1 className="text-lg sm:text-xl font-light text-gray-900">{location}</h1>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs sm:text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}
