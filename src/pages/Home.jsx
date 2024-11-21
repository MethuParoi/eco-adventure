import { useEffect, useState } from "react";
import HeroSection from "../components/home/HeroSection";
import AdventureCards from "../components/home/AdventureCards";
import ExtraSection from "../components/home/ExtraSection";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  useEffect(() => {
    const pageTitle = "eco-adventure | Home";
    document.title = pageTitle;
  }, [location]);

  const [travelSpot, setTravelSpot] = useState([]);
  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => {
        setTravelSpot(data);
      });
  }, []);

  return (
    <div className="">
      <HeroSection />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-16 justify-items-center my-16">
        {travelSpot.map((spot) => (
          <AdventureCards key={spot.id} spot={spot} />
        ))}
      </div>
      <ExtraSection />
    </div>
  );
}

export default Home;
