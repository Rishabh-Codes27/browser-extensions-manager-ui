// import data from "@/components/data.json";
// import { Switch } from "./ui/switch";

// const ExtensionCard = () => {
//   return (
//     <div className=" border border-red-500 w-full ">
//       <div className=" max-w-[1200px] mx-auto border-2 flex items-center flex-col justify-center">
//         <div className="flex w-full justify-between">
//           <p className="text-3xl font-bold">Extensions List</p>
//           <div className="flex border w-1/6 justify-between">
//             <button className="border rounded-full px-2 py-1 w-12 cursor-pointer">All</button>
//             <button className="border rounded-full px-2 py-1 cursor-pointer">Active</button>
//             <button className="border rounded-full px-2 py-1 cursor-pointer">Inactive</button>
//           </div>
//         </div>

//         <div className="flex flex-wrap w-full border-2 border-green-500 justify-center p-0">
//           {data.map((item, index) => (
//             <div
//               key={index}
//               className="flex w-[380px] border flex-col justify-between px-6 py-3 rounded-xl m-0.5"
//             >
//               <div className="flex">
//                 <div className="h-1/2 mx-1">
//                   <img src={item.logo} alt="" className="w-[50px]" />
//                 </div>
//                 <div className=" h-1/2 mx-1">
//                   <p className="font-bold text-xl"> {item.name} </p>
//                   <p>{item.description}</p>
//                 </div>
//               </div>
//               <div className="flex justify-between items-center">
//                 <button className="border rounded-full px-2 py-1">
//                   Remove
//                 </button>
//                 <Switch className="data-[state=checked]:bg-orange-600" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExtensionCard;

import data from "@/components/data.json";
import { Switch } from "./ui/switch";

const ExtensionCard = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        {/* Extensions List Bar */}
        <div className="flex w-full justify-between items-center mb-4">
          <p className="text-3xl font-bold">Extensions List</p>
          <div className="flex gap-2">
            <button className="border rounded-full px-4 py-1 cursor-pointer active:bg-orange-600 hover:bg-orange-600 transition-colors duration-200 hover:text-black active:text-black">
              All
            </button>
            <button className="border rounded-full px-4 py-1 cursor-pointer active:bg-orange-600 hover:bg-orange-600  transition-colors duration-200 hover:text-black active:text-black">
              Active
            </button>
            <button className="border rounded-full px-4 py-1 cursor-pointer active:bg-orange-600 hover:bg-orange-600 hover:text-black active:text-black transition-colors duration-200">
              Inactive
            </button>
          </div>
        </div>

        {/* Extensions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full ">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border px-6 py-3 rounded-xl bg-gray-700/50"
            >
              <div className="flex">
                <div className="h-1/2 mx-1">
                  <img src={item.logo} alt="" className="w-[70px]" />
                </div>
                <div className="h-1/2 mx-1">
                  <p className="font-bold text-lg">{item.name}</p>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
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
