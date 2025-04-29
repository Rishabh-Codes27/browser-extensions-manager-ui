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

// =========== CODE V2 ==============

// "use client";
// import data from "@/components/data.json";
// import { Switch } from "./ui/switch";
// import { useState } from "react";

// const ExtensionCard = () => {
//   const [filter, setFilter] = useState("All");

//   // filtering the extensions based on which is active
//   const filteredData = data.filter((item) => {
//     if (filter === "All") return true;
//     if (filter === "Active") return item.isActive;
//     if (filter === "Inactive") return !item.isActive;
//   });

//   return (
//     <div className="w-full">
//       <div className="max-w-[1200px] mx-auto flex flex-col items-center">
//         {/* Extensions List Bar */}
//         <div className="flex w-full justify-between items-center mb-4">
//           <p className="text-3xl font-bold">Extensions List</p>
//           <div className="flex gap-2">
//             <button
//               className={`border rounded-full px-4 py-1 cursor-pointer transition-colors duration-200 ${
//                 filter === "All"
//                   ? "bg-orange-600 text-black"
//                   : "bg-gray-700 hover:bg-orange-600 hover:text-black"
//               }`}
//               onClick={() => setFilter("All")}
//             >
//               All
//             </button>
//             <button
//               className={`border rounded-full px-4 py-1 cursor-pointer transition-colors duration-200 ${
//                 filter === "Active"
//                   ? "bg-orange-600 text-black"
//                   : "bg-gray-700 hover:bg-orange-600 hover:text-black"
//               }`}
//               onClick={() => setFilter("Active")}
//             >
//               Active
//             </button>
//             <button
//               className={`border rounded-full px-4 py-1 cursor-pointer transition-colors duration-200 ${
//                 filter === "Inactive"
//                   ? "bg-orange-600 text-black"
//                   : "bg-gray-700 hover:bg-orange-600 hover:text-black"
//               }`}
//               onClick={() => setFilter("Inactive")}
//             >
//               Inactive
//             </button>
//           </div>
//         </div>

//         {/* Extensions Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full ">
//           {data.map((item, index) => (
//             <div
//               key={index}
//               className="flex flex-col justify-between border px-6 py-3 rounded-xl bg-gray-700"
//             >
//               <div className="flex">
//                 <div className="h-1/2 mx-1">
//                   <img src={item.logo} alt="" className="w-[50px]" />
//                 </div>
//                 <div className="h-1/2 mx-1">
//                   <p className="font-bold text-lg">{item.name}</p>
//                   <p className="text-sm">{item.description}</p>
//                 </div>
//               </div>
//               <div className="flex justify-between items-center mt-4">
//                 <button className="border rounded-full px-3 py-1.5 hover:bg-orange-600 transition-colors duration-200 border-white/50 hover:border-orange-600 hover:text-black cursor-pointer">
//                   Remove
//                 </button>
//                 <Switch
//                   className="data-[state=checked]:bg-orange-600 cursor-pointer"
//                   defaultChecked={item.isActive}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExtensionCard;

// =========== CODE V3 =================

'use client';
import { useState } from "react";
import data from "@/components/data.json";
import { Switch } from "./ui/switch";

const ExtensionCard = () => {
  const [filter, setFilter] = useState("All"); // State to track the selected filter
  const [extensions, setExtensions] = useState(data); // State to manage extensions data

  // Filter the extensions based on the selected filter
  const filteredData = extensions.filter((item) => {
    if (filter === "All") return true;
    if (filter === "Active") return item.isActive;
    if (filter === "Inactive") return !item.isActive;
  });

  // Handle toggle of the Switch
const handleToggle = (index: number) => {
  setExtensions((prevExtensions) =>
    prevExtensions.map((item, i) =>
      i === index ? { ...item, isActive: !item.isActive } : item
    )
  );
};

  return (
    <div className="w-full">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        {/* Extensions List Bar */}
        <div className="flex w-full justify-between items-center mb-4">
          <p className="text-3xl font-bold">Extensions List</p>
          <div className="flex gap-2">
            <button
              className={`border rounded-full px-4 py-1 cursor-pointer transition-colors duration-200 ${
                filter === "All"
                  ? "bg-orange-600 text-black"
                  : "bg-gray-700 hover:bg-orange-600 hover:text-black"
              }`}
              onClick={() => setFilter("All")}
            >
              All
            </button>
            <button
              className={`border rounded-full px-4 py-1 cursor-pointer transition-colors duration-200 ${
                filter === "Active"
                  ? "bg-orange-600 text-black"
                  : "bg-gray-700 hover:bg-orange-600 hover:text-black"
              }`}
              onClick={() => setFilter("Active")}
            >
              Active
            </button>
            <button
              className={`border rounded-full px-4 py-1 cursor-pointer transition-colors duration-200 ${
                filter === "Inactive"
                  ? "bg-orange-600 text-black"
                  : "bg-gray-700 hover:bg-orange-600 hover:text-black"
              }`}
              onClick={() => setFilter("Inactive")}
            >
              Inactive
            </button>
          </div>
        </div>

        {/* Extensions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {filteredData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border px-6 py-3 rounded-xl bg-gray-700"
            >
              <div className="flex">
                <div className="h-1/2 mx-1">
                  <img src={item.logo} alt="" className="w-[50px]" />
                </div>
                <div className="h-1/2 mx-1">
                  <p className="font-bold text-lg">{item.name}</p>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <button className="border rounded-full px-3 py-1.5 hover:bg-orange-600 transition-colors duration-200 border-white/50 hover:border-orange-600 hover:text-black cursor-pointer">
                  Remove
                </button>
                <Switch
                  className="data-[state=checked]:bg-orange-600 cursor-pointer"
                  checked={item.isActive} // Controlled state
                  onCheckedChange={() => handleToggle(index)} // Update state on toggle
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtensionCard;