import { FiSearch, FiX } from "react-icons/fi";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-md">
      <div className="flex flex-1 items-center gap-3">
        <FiSearch className="text-xl text-slate-400" />

        <input
          type="text"
          placeholder="Search by company, role or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-transparent text-white placeholder:text-slate-500 outline-none"
        />
      </div>

      {searchTerm && (
        <button
          onClick={() => setSearchTerm("")}
          className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
        >
          <FiX size={18} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;