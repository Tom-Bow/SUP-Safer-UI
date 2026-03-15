export function LoadingModal({ isLoading }) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90">
      <div className="bg-white p-6 rounded-xl shadow-xl flex flex-col items-center gap-3">
        <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-700">Loading data...</p>
      </div>
    </div>
  );
}