const FilterBar = ({ selectedFilter, setSelectedFilter }) => {
  const filters = [
    "All",
    "Applied",
    "Interview",
    "Selected",
    "Rejected",
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setSelectedFilter(filter)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
            selectedFilter === filter
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-slate-900 border border-slate-700 text-slate-300 hover:bg-slate-800"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;