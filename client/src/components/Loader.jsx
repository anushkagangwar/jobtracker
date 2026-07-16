const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      {/* Spinner */}
      <div className="h-14 w-14 animate-spin rounded-full border-4 border-slate-700 border-t-blue-500"></div>

      {/* Loading Text */}
      <p className="mt-5 text-lg font-medium text-slate-300">
        Loading your applications...
      </p>
    </div>
  );
};

export default Loader;