import React from "react";
import Navbar from "./../components/Navbar";

const Schedule = () => {
  const ceremonyDetails = [
    {
      title: "Ceremony Rehearsal",
      description:
        "Please make sure to be on time, because we've only got 30 minutes to get this show on the road. Let's nail those steps, get the music right, and make sure everyone knows where to stand.",
      time: "6:30 PM - Thursday, July 27th",
    },
    {
      title: "Rehearsal Dinner",
      description:
        "Check the invitation for the location of the rehearsal dinner. We'll be having a nice dinner to celebrate the wedding and get to know each other better.",
      time: "7:30 PM - Thursday, July 27th",
    },
    // {
    //   title: "Getting Ready",
    //   description:
    //     "If you would like to join us for the getting ready process feel free to join us. There will be more information on the RSVP and we'll be sending details.",
    //   time: "10:00 AM - Saturday, July 29th",
    // },
    {
      title: "Pictures",
      description: "Those in the wedding party will be taking pictures at the Como Park Conservatory. Meetup at the front entrance.",
      time: "5:30 PM - Saturday, July 29th",
    },
    {
      title: "Ceremony Begins",
      description:
        "The ceremony will commence in the Japanese Zen Garden at the Como Park Conservatory. After picture we will start on time at 6:30 PM as we only have 1 hour alloted to us in the gardens.",
      time: "6:30 PM",
    },
    {
      title: "Dinner",
      description: "We will be having dinnner at Marna's Eatery. During dinner we will be having toasts to the newlyweds.",
      time: "8:00 PM",
    },
  ];
  const afterpartyDetails = [
    {
      title: "Cocktail Hour",
      description:
        "Join us at Marna's Eateries for a cocktail hour to celebrate the newlyweds!",
      time: "9:00 PM - Saturday, July 29th",
    },
    {
      title: "Partybus Departs",
      description:
        "We'll be heading to downtown Minneapolis on a party bus. Join us for the ride and let's keep get the party started!",
      time: "10:00 PM - Saturday, July 29th",
    },
    {
      title: "Bar Crawl Begins",
      description:
        "Join us for some post-wedding fun in downtown Minneapolis! We'll be hopping from bar to bar, and you're welcome to catch up with us at any point.",
      time: "10:15 PM - Saturday, July 29th",
    },
    {
      title: "Bus Departs to Airbnb",
      description: `
For anyone who wants to stay the night, we have an Airbnb reserved just for you! The party bus will be taking guests back to the Airbnb for the night, where we'll be spending the rest of the evening until the next morning.`,
      time: "1:00 AM - Sunday, July 30th",
    },
  ];
  const sections = [
    {
      title: "Wedding Schedule",
      description:
        "Join us for a beautiful ceremony celebrating the union of our two families.",
      list: ceremonyDetails,
    },
    {
      title: "Afterparty Schedule",
      description:
        "Let's continue the celebration with drinks, dancing, and great company",
      list: afterpartyDetails,
    },
  ];
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-16 mt-10 sm:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section) => (
            <div className="bg-gray-900 text-white rounded-lg shadow-md p-6 relative">
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <p className="mb-4">{section.description}</p>

              <ol className="relative border-l border-gray-200 dark:border-gray-700">
                {section.list.map((detail) => (
                  <li key={detail.title} className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    {detail.time && (
                      <time className="mb-1 text-sm font-normal leading-none text-white">
                        {detail.time}
                      </time>
                    )}
                    <h3 className="text-lg font-semibold text-white">
                      {detail.title}
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-400 dark:text-gray-400">
                      {detail.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
