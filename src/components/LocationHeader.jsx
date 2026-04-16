import { MapPin } from 'lucide-react';
import { DataQualityCard } from './DataQualityCard';

export function LocationHeader({ title, location, date, time }) {
  return (
    <div className="mb-4 sm:mb-4">
      <h1 className="text-xl sm:text-3xl font-light text-gray-900 mb-2">{title}</h1>
      <div className="flex items-center gap-2 mb-2 sm:mb-3">
        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0" />
        <h1 className="text-lg sm:text-xl font-light text-gray-900">{location}</h1>
      </div>
    </div>
  );
}
