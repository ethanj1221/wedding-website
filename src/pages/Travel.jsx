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
            We have arranged an Airbnb for guests who would like to stay
            overnight after the afterparty. If you're interested, please RSVP on
            the RSVP page as spots are limited. The check-in time for the Airbnb
            is 3pm on July 29th, and check-out time is 11am on July 30th. The
            address for the Airbnb is 2209 Aldrich Ave S, Minneapolis, MN 55405.
            To make the check-in process as smooth as possible, we will create a
            group chat for the Airbnb guests closer to the wedding date,
            providing all the necessary information for self check-in.
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
