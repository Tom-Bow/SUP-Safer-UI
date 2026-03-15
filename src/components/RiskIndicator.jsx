import { AlertTriangle, Check, XCircle } from 'lucide-react';

export function RiskIndicator({ level, score }) {
  const getRiskConfig = () => {
    switch (level) {
      case 'LOW':
        return {
          color: 'bg-green-500',
          icon: Check,
          text: 'Low Risk',
          textColor: 'text-green-700',
          bgLight: 'bg-green-50',
          borderColor: 'border-green-200',
          description: 'Conditions are favorable for paddleboarding'
        };
      case 'MEDIUM':
        return {
          color: 'bg-amber-500',
          icon: AlertTriangle,
          text: 'Moderate Risk',
          textColor: 'text-amber-700',
          bgLight: 'bg-amber-50',
          borderColor: 'border-amber-200',
          description: 'Exercise caution - some conditions may be challenging'
        };
      case 'HIGH':
         return {
          color: 'bg-red-500',
          icon: XCircle,
          text: 'High Risk',
          textColor: 'text-red-700',
          bgLight: 'bg-red-50',
          borderColor: 'border-red-200',
          description: 'Paddleboarding not recommended in current conditions'
        }; 
      case 'VERY_HIGH':
        return {
          color: 'bg-red-500',
          icon: XCircle,
          text: 'Very High Risk',
          textColor: 'text-red-700',
          bgLight: 'bg-red-50',
          borderColor: 'border-red-200',
          description: 'Current conditions are extremely dangerous. Paddleboarding could lead to serious injury or loss of life.'
        };
        default:
      return {
        color: 'bg-gray-500',
        icon: AlertTriangle,
        text: 'Unknown Risk',
        textColor: 'text-gray-700',
        bgLight: 'bg-gray-50',
        borderColor: 'border-gray-200',
        description: 'Risk level not available'
      };
    }
  };

  const config = getRiskConfig();
  const Icon = config.icon;

  return (
    <div className={`${config.bgLight} ${config.borderColor} border-2 rounded-2xl p-4 sm:p-8`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className={`${config.color} rounded-full p-3 sm:p-4 flex-shrink-0`}>
            <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <div>
            <h2 className={`${config.textColor} text-2xl sm:text-3xl font-medium`}>{config.text}</h2>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">{config.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
