import data from "@/components/data.json";

const ExtensionCard = () => {
  return (
    <div className=" h-screen ">
      <div className=" w-full justify-center flex flex-wrap h-full">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex border border-white/40 rounded-xl w-[350px] m-0.5 px-2 py-4"
          >
            <div className="flex">
              <div className="h-1/2 mx-1">
                <img src={item.logo} alt="" className="w-[50px]" />
              </div>
              <div className=" h-1/2 mx-1">
                <p className="font-bold text-xl"> {item.name} </p>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtensionCard;
