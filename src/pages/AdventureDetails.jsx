import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useParams } from "react-router-dom";
import { GiDuration, GiTakeMyMoney } from "react-icons/gi";
import { TbCategory } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";

function AdventureDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    // Fetch the data based on the ID
    fetch("/public/Data.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.find((spot) => spot.id === parseInt(id));
        setDetails(filteredData);
      })
      .catch((err) => console.error(err));
  }, []);
  // console.log("id", id);
  // console.log("details", details);
  return (
    <div className="min-h-screen min-w-screen">
      <div>
        <img className="w-full h-96 object-cover" src={details?.image} alt="" />
      </div>

      <div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 my-16">
            <div>
              <h1 className="text-4xl font-bold mt-4">{details?.title}</h1>
              <p className="text-lg text-gray-600 mt-4">
                {details?.shortDescription}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3s gap-y-4 mt-4">
                <div className="badge badge-secondary bg-accent border-transparent text-lg font-semibold text-gray-700  h-12 w-48 flex justify-around">
                  <GiDuration className="text-2xl text-secondary " />
                  {details?.duration}
                </div>
                <div className="badge badge-secondary bg-accent border-transparent text-lg font-semibold text-gray-700  h-12 w-48 flex justify-around">
                  <FaLocationDot className="text-2xl text-secondary " />

                  {details?.location}
                </div>
                <div className="badge badge-secondary bg-accent border-transparent text-lg font-semibold text-gray-700  h-12 w-48 flex justify-between">
                  <TbCategory className="text-2xl text-secondary " />
                  {details?.category}
                </div>
                <div className="badge badge-secondary bg-accent border-transparent text-lg font-semibold text-gray-700  h-12 w-48 flex justify-around">
                  <GiTakeMyMoney className="text-2xl text-secondary " />
                  {details?.adventureCost}
                </div>
              </div>
              <button className="w-[100%] h-12 bg-primary hover:bg-secondary text-neutral text-lg font-medium rounded-2xl  flex items-center justify-center mx-auto mt-4">
                Explore Now
              </button>
            </div>

            {/* accordian */}
            <div className="join join-vertical w-full ">
              <div className="collapse collapse-arrow join-item border-base-300 border bg-neutral">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  Included Items
                </div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border bg-neutral">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  Eco Friendly Features
                </div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border bg-neutral">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  Special Instructions
                </div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdventureDetails;
