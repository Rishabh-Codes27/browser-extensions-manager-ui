import data from "@/components/data.json";
import { Switch } from "./ui/switch";

const ExtensionCard = () => {
  return (
    <div className=" h-screen border border-red-500 w-full ">
      <div className=" max-w-[1200px] mx-auto border-2 flex items-center flex-col justify-center">
        <div className="flex w-full justify-between">
          <p className="text-3xl font-bold">Extensions List</p>
          <div className="flex">
            <button className="border rounded-full px-2 py-1">All</button>
            <button className="border rounded-full px-2 py-1">Active</button>
            <button className="border rounded-full px-2 py-1">Inactive</button>
          </div>
        </div>

        <div className="flex flex-wrap w-full ">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex w-[300px] border h-36 flex-col justify-between px-6 py-3 rounded-xl m-0.5"
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
              <div className="flex justify-between items-center">
                <button className="border rounded-full px-2 py-1">
                  Remove
                </button>
                <Switch className="data-[state=checked]:bg-orange-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtensionCard;
