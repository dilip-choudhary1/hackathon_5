export function CookieBanner() {
  return (
    <div className="fixed bottom-6 left-6 bg-white rounded-lg shadow-2xl p-4 max-w-xs border border-gray-200">
      <p className="text-gray-700 text-sm mb-2">
        To enhance your experience, we use cookies.{' '}
        <a href="#" className="text-orange-600 hover:underline">
          Know more
        </a>
      </p>
      <button className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition-colors">
        OK
      </button>
    </div>
  );
}
