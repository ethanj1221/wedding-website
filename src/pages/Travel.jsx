import React from "react";
import Navbar from "../components/Navbar";

const Travel = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div class="container mx-auto px-4 py-16 mt-10 sm:mt-16 flex items-center justify-center">
        <div class="bg-gray-900 text-white rounded-lg flex justify-center flex-col items-center shadow-md p-6 relative max-w-screen-md ">
          <h2 class="text-2xl font-semibold mb-4">Travel Accommodations</h2>
          <p class="mb-4">
            Due to a low number of out of town guests, we will no longer be renting an Airbnb. We will not be staying at our apartment the night of the wedding, so we will instead be opening it to out of town guests. Please let us know if you would like to stay at our apartment.
          </p>
          <ul className="list-disc flex flex-col ">
            {" "}
            <li>
              Address: 2209 Aldrich Ave S, Minneapolis, MN 55405
            </li>
            <li>Check In: 3pm on July 29th</li>
            <li>Check Out: 11am on July 30th</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Travel;
