import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useParams } from "react-router-dom";
import { GiDuration, GiTakeMyMoney } from "react-icons/gi";
import { TbCategory } from "react-icons/tb";
import { FaAvianex, FaLocationDot } from "react-icons/fa6";
import { SiLevelsdotfyi } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";

function AdventureDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch the data based on the ID
    fetch("/public/Data.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.find((spot) => spot.id === parseInt(id));
        setDetails(filteredData);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleTalkWithExpert = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 10 && currentHour < 20) {
      window.open("https://meet.google.com", "_blank");
    } else {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen min-w-screen">
      <div className="w-full sm:w-[90%] mx-auto">
        <img
          className="w-full h-[420px] object-cover"
          src={details?.image}
          alt=""
        />
      </div>

      <div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 my-16 justify-items-center">
            <div className="px-4 md:px-0">
              <h1 className="text-4xl font-bold mt-4">{details?.title}</h1>
              <p className="text-lg text-gray-600 mt-4">
                {details?.shortDescription}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-4 justify-items-center">
                <div className="badge badge-secondary bg-accent border-transparent text-lg font-semibold text-gray-700  h-12 w-48 flex justify-around">
                  <GiDuration className="text-2xl text-secondary " />
                  {details?.duration}
                </div>
                <div className="badge badge-secondary bg-accent border-transparent text-lg font-semibold text-gray-700  h-12 w-48 flex justify-around">
                  <FaLocationDot className="text-2xl text-secondary " />
                  {details?.location}
                </div>
                <div className="badge badge-secondary bg-accent border-transparent text-lg font-semibold text-gray-700  h-12 w-48 flex justify-between ">
                  <TbCategory className="text-2xl text-secondary " />
                  <span className="line-clamp-1">{details?.category}</span>
                </div>
                <div className="badge badge-secondary bg-accent border-transparent text-lg font-semibold text-gray-700  h-12 w-48 flex justify-around">
                  <GiTakeMyMoney className="text-2xl text-secondary " />
                  {details?.adventureCost}
                </div>
                <div className="badge badge-secondary bg-accent border-transparent text-lg font-semibold text-gray-700  h-12 w-48 flex justify-around">
                  <FaAvianex className="text-2xl text-secondary " />
                  {details?.bookingAvailability === true
                    ? "Available"
                    : "Not Available"}
                </div>
                <div className="badge badge-secondary bg-accent border-transparent text-lg font-semibold text-gray-700  h-12 w-48 flex justify-around">
                  <SiLevelsdotfyi className="text-2xl text-secondary " />
                  {details?.adventureLevel}
                </div>
                <div className="badge badge-secondary bg-accent border-transparent text-lg font-semibold text-gray-700  h-12 w-48 flex justify-around">
                  <IoIosPeople className="text-2xl text-secondary " />
                  {details?.maxGroupSize}
                </div>
              </div>
              <button
                onClick={handleTalkWithExpert}
                className="mt-10 w-[100%] h-12 bg-primary hover:bg-secondary text-neutral text-lg font-medium rounded-2xl  flex items-center justify-center mx-auto"
              >
                Talk with Expert
              </button>
            </div>

            {/* accordian */}
            <div className="join join-vertical w-[90%] sm:w-[600px] mt-10 lg:mt-0">
              <div className="collapse collapse-arrow join-item border-base-300 border bg-neutral">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  Included Items
                </div>
                <div className="collapse-content">
                  <ul className="list-disc pl-5 text-gray-800">
                    {details?.includedItems.map((item) => (
                      <li key={item} className="line-clamp-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border bg-neutral">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  Eco Friendly Features
                </div>
                <div className="collapse-content">
                  <ul className="list-disc pl-5 text-gray-800">
                    {details?.ecoFriendlyFeatures.map((item) => (
                      <li key={item} className="line-clamp-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border bg-neutral">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  Special Instructions
                </div>
                <div className="collapse-content">
                  <ul className="list-disc pl-5 text-gray-800">
                    {details?.specialInstructions.map((item) => (
                      <li key={item} className="line-clamp-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DaisyUI Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-1/2 lg:w-1/3">
            <h2 className="text-2xl font-bold">Consultation Time</h2>
            <p className="mt-4">
              Our consultation time is between 10:00 AM and 8:00 PM.
            </p>
            <button
              onClick={closeModal}
              className="mt-4 bg-primary hover:bg-secondary text-neutral text-lg font-medium rounded-2xl px-4 py-2 "
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdventureDetails;

// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../provider/AuthProvider";
// import { useParams } from "react-router-dom";
// import { GiDuration, GiTakeMyMoney } from "react-icons/gi";
// import { TbCategory } from "react-icons/tb";
// import { FaAvianex, FaLocationDot } from "react-icons/fa6";
// import { SiLevelsdotfyi } from "react-icons/si";
// import { IoIosPeople } from "react-icons/io";

// function AdventureDetails() {
//   const { id } = useParams();
//   const [details, setDetails] = useState(null);

//   useEffect(() => {
//     // Fetch the data based on the ID
//     fetch("/public/Data.json")
//       .then((res) => res.json())
//       .then((data) => {
//         const filteredData = data.find((spot) => spot.id === parseInt(id));
//         setDetails(filteredData);
//       })
//       .catch((err) => console.error(err));
//   }, []);
//   // console.log("id", id);
//   // console.log("details", details);
//   return (
//     <div className="min-h-screen min-w-screen">
//       <div className="w-full sm:w-[90%] mx-auto">
//         <img
//           className="w-full h-[420px] object-cover"
//           src={details?.image}
//           alt=""
//         />
//       </div>

//       <div>
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 my-16 justify-items-center">
//             <div className="px-4 md:px-0">
//               <h1 className="text-4xl font-bold mt-4">{details?.title}</h1>
//               <p className="text-lg text-gray-600 mt-4">
//                 {details?.shortDescription}
//               </p>
//               <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-4 justify-items-center">
//                 <div className="badge badge-secondary bg-accent border-transparent text-lg font-semibold text-gray-700  h-12 w-48 flex justify-around">
//                   <GiDuration className="text-2xl text-secondary " />
//                   {details?.duration}
//                 </div>
//                 <div className="badge badge-secondary bg-accent border-transparent text-lg font-semibold text-gray-700  h-12 w-48 flex justify-around">
//                   <FaLocationDot className="text-2xl text-secondary " />

//                   {details?.location}
//                 </div>
//                 <div className="badge badge-secondary bg-accent border-transparent text-lg font-semibold text-gray-700  h-12 w-48 flex justify-between ">
//                   <TbCategory className="text-2xl text-secondary " />
//                   <span className="line-clamp-1">{details?.category}</span>
//                 </div>
//                 <div className="badge badge-secondary bg-accent border-transparent text-lg font-semibold text-gray-700  h-12 w-48 flex justify-around">
//                   <GiTakeMyMoney className="text-2xl text-secondary " />
//                   {details?.adventureCost}
//                 </div>
//                 <div className="badge badge-secondary bg-accent border-transparent text-lg font-semibold text-gray-700  h-12 w-48 flex justify-around">
//                   <FaAvianex className="text-2xl text-secondary " />
//                   {details?.bookingAvailability === true
//                     ? "Available"
//                     : "Not Available"}
//                 </div>
//                 <div className="badge badge-secondary bg-accent border-transparent text-lg font-semibold text-gray-700  h-12 w-48 flex justify-around">
//                   <SiLevelsdotfyi className="text-2xl text-secondary " />
//                   {details?.adventureLevel}
//                 </div>
//                 <div className="badge badge-secondary bg-accent border-transparent text-lg font-semibold text-gray-700  h-12 w-48 flex justify-around">
//                   <IoIosPeople className="text-2xl text-secondary " />
//                   {details?.maxGroupSize}
//                 </div>
//               </div>
//               <button className="mt-10 w-[100%] h-12 bg-primary hover:bg-secondary text-neutral text-lg font-medium rounded-2xl  flex items-center justify-center mx-auto">
//                 Talk with Expert
//               </button>
//             </div>

//             {/* accordian */}
//             <div className="join join-vertical w-[90%] sm:w-[600px] mt-10 lg:mt-0">
//               <div className="collapse collapse-arrow join-item border-base-300 border bg-neutral">
//                 <input type="radio" name="my-accordion-4" defaultChecked />
//                 <div className="collapse-title text-xl font-medium">
//                   Included Items
//                 </div>
//                 <div className="collapse-content">
//                   <ul className="list-disc pl-5 text-gray-800">
//                     {details?.includedItems.map((item) => (
//                       <li key={item} className="line-clamp-1">
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//               <div className="collapse collapse-arrow join-item border-base-300 border bg-neutral">
//                 <input type="radio" name="my-accordion-4" />
//                 <div className="collapse-title text-xl font-medium">
//                   Eco Friendly Features
//                 </div>
//                 <div className="collapse-content">
//                   <ul className="list-disc pl-5 text-gray-800">
//                     {details?.ecoFriendlyFeatures.map((item) => (
//                       <li key={item} className="line-clamp-1">
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//               <div className="collapse collapse-arrow join-item border-base-300 border bg-neutral">
//                 <input type="radio" name="my-accordion-4" />
//                 <div className="collapse-title text-xl font-medium">
//                   Special Instructions
//                 </div>
//                 <div className="collapse-content">
//                   <ul className="list-disc pl-5 text-gray-800">
//                     {details?.specialInstructions.map((item) => (
//                       <li key={item} className="line-clamp-1">
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdventureDetails;
