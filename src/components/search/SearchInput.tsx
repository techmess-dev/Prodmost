export default function SearchInput() {
  return (
    <div className="justify-center items-center w-full">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="pl-10 pr-4 py-2 w-full rounded-full bg-white font-mono text-sm text-stone-700 placeholder-black focus:outline-none shadow-xl"
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>

        </div>
      </div>
    </div>
  );
}
