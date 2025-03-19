import React from "react";
import WorkSection from "../components/Work";
import data from "../data";
import Navbar from "../components/navbar";

const Home = () => {
  const itemCount = data.length;
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <Navbar />

      {/* <div className="py-12">
        <WorkSection data={data} />
      </div> */}

      <p className="">© {currentYear} Kelvin Akaba. All rights reserved</p>
    </div>
  );
};

export default Home;
