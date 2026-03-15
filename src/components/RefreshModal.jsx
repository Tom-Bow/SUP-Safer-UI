import { useEffect, useState } from "react";

export function RefreshModal({ onRefresh }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 15 * 60 * 1000); // 15 min
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <p>Data may be stale. Refresh for latest conditions?</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onRefresh}
        >
          Refresh
        </button>
      </div>
    </div>
  );
}