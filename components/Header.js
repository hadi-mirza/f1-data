export default function Header() {
  return (
    <div className="header flex justify-between h-14 sticky top-0 bg-white z-50 drop-shadow-lg">
      <div className="ml-5">f1-data</div>
      <div className="searchbar">
        <input
          className="hover:bg-white placeholder:text-slate-400 block bg-slate-100 w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mt-1"
          placeholder="Search the site"
          type="text"
          name="search"
        />
      </div>
      <div className="space-x-4 mr-5 p-1">
        <button className="hover:bg-sky-200 hover:transition-all rounded-full bg-blue-500 p-1 pl-3 pr-3 text-white">
          Log In
        </button>
        <button className="hover:bg-sky-200 hover:transition-all rounded-full bg-blue-500 p-1 pl-3 pr-3 text-white">
          Sign Up
        </button>
        <button className="hover:bg-sky-200 hover:transition-all rounded-full bg-blue-500 p-1 pl-3 pr-3 text-white">
          Profile
        </button>
      </div>
    </div>
  );
}
