import React from "react";
import Navbar from "./../components/Navbar";

const Rsvp = () => {
  const sections = [
    {
      title: "Rehersal",
      description: "Rehersal ceremony and dinner for the wedding party.",
      details: [
        { title: "Location", description: "Como Zoo Park & Conservatory" },
        { title: "Attire", description: "Casual" },
        { title: "Date & Time", description: "July 27th, 2023 - 6:30 PM" },
        { title: "RSVP by", description: "May 31st, 2023" },
      ],
      note: "Please note that this is a private event for the wedding party only. In the email please list guest names and any dietary restrictions.",
    },

    {
      title: "Getting Ready",
      description:
        "If you would like to start the day with us, please let us know. We would love to have you!",
      details: [
        { title: "Location", description: "2431 Churchill St. Roseville, MN" },
        { title: "Attire", description: "Casual" },
        { title: "Date & Time", description: "July 29th, 2023 - 10:00 AM" },
        { title: "RSVP by", description: "May 31st, 2023" },
      ],
      note: `Join us anytime after 10 AM. We will be getting ready and having coffee and appetizers throughout the day.  
      \n\n
      For those who are interested, there will be a makeup/grooming professional for service and email us what you would like to have done. 
    `,
    },

    {
      title: "Ceremony and Reception",
      description:
        "Join us for a beautiful ceremony celebrating the union of our two families.",
      details: [
        { title: "Ceremony Location", description: "Como Park - Zen Gardens" },
        { title: "Reception Location", description: "Marna's Eatery" },
        { title: "Attire", description: "Semi-Formal" },
        { title: "Date & Time", description: "July 29th, 2023" },
        { title: "RSVP by", description: "May 31st, 2023" },
      ],
      note: "Please remember to check FAQ for attire information. In the RSVP email please include guest names and any dietary restrictions.",
    },
    {
      title: "Afterparty",
      description:
        "Let's continue the celebration with drinks, dancing, and great company.",
      details: [
        { title: "Starting Location", description: "Marna's Eatery" },

        { title: "Attire", description: "Casual" },
        { title: "Date & Time", description: "July 29th, 2023 - 10:00 PM" },
        { title: "RSVP by", description: "May 31st, 2023" },
      ],
      note: "Please check schedule for timeline. We will be providing an Airbnb for those who would like to stay the night and get ready. For those who have RSVPed for the Airbnb, rooms are first come first serve. Checkin is at 3 PM and checkout is at 11 AM.",
    },
    {
      title: "Airbnb Accomidations",
      description:
        "Let's continue the celebration with drinks, dancing, and great company.",
      details: [
        {
          title: "Airbnb Location",
          description: "2209 Aldrich Ave S, Minneapolis, MN 55405",
        },
        { title: "Check In", description: "July 29th, 2023 - 3:00 PM" },
        { title: "Check Out", description: "July 30th, 2023 - 11:00 AM" },
        { title: "RSVP by", description: "May 31st, 2023" },
      ],
      note: "Please check schedule for timeline. We will be providing an Airbnb for those who would like to stay the night and get ready. For those who have RSVPed for the Airbnb, rooms are first come first serve. Checkin is at 3 PM and checkout is at 11 AM.",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="px-4 sm:px-5 lg:px-20 mx-auto  py-16 mt-10 sm:mt-16">
        <div className="flex justify-center mb-20 sm:mb-36">
          <div className="bg-gray-900 text-white rounded-lg shadow-md p-6 relative flex flex-col sm:flex-row justify-center items-center space-y-5 sm:space-y-0 max-w-screen-md ">
            <p className="text-lg sm:text-xl">
              <strong>
                {" "}
                Please click the RSVP button to fill out the RSVP Google Form
              </strong>{" "}
              according to your invitation and information below.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              className="  rounded-full bg-white py-2.5 px-6 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              href="https://docs.google.com/forms/d/e/1FAIpQLSd2hh7PQ8aqqFlVFke30zFod7xwdYYsvJJwkc-y-z6IJvgDdQ/viewform?usp=sf_link"
            >
              RSVP
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section) => (
            <div className="bg-gray-900 text-white rounded-lg shadow-md p-6 relative flex flex-col justify-between ">
              <div className="space-y-4">
                {" "}
                <h2 className="text-2xl font-semibold ">{section.title}</h2>
                <p className="">{section.description}</p>
                <ul className="list-disc pl-5  ">
                  {" "}
                  {section.details.map((detail) => (
                    <li>
                      <p className="text-white">
                        {" "}
                        <span className="font-semibold text-gray-400">
                          {detail.title}:{" "}
                        </span>{" "}
                        {detail.description}
                      </p>
                    </li>
                  ))}
                </ul>
                <p className="italic text-gray-400 ">{section.note}</p>
              </div>{" "}
              {section.title === "Getting Ready" && (
                <a
                  className="underline italic"
                  href="https://www.mantracreativebeauty.com/services-7"
                  target="_blank"
                  rel="noreferrer"
                >
                  Makeup Services
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rsvp;
