const Navbar = () => {
  return (
    <div className="flex border border-full w-full max-w-[1200px] justify-between mb-12 mt-8 bg-gray-700 px-4 py-2 rounded-lg">
      <img src="/images/logo.svg" alt="" className="" />
      <button className="bg-gray-600 p-2 rounded cursor-pointer hover:bg-gray-500/50">
        <img src="/images/icon-sun.svg" alt="" className="" />
      </button>
    </div>
  );
};

export default Navbar;
