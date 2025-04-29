import logo from "@/public/images/logo.svg";

const Navbar = () => {
  return (
    <div className="flex border border-full w-full max-w-[1200px] justify-between mb-4">
      <img src="/images/logo.svg" alt="" className="" />
      <button>
        <img src="/images/icon-sun.svg" alt="" />
      </button>
    </div>
  );
};

export default Navbar;
