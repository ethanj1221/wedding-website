import React from "react";
import Navbar from "./../components/Navbar";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
const faqs = [
  {
    question: "What date should I RSVP by?",
    answer: "Please RSVP by May 31st, 2023.",
  },
  {
    question: `Can I RSVP online or do I have to mail in an RSVP card?`,
    answer: `Please RSVP online using the RSVP tab above. If you are unable to RSVP online, please mail in an RSVP card to the address listed on the RSVP card.`,
  },
  {
    question: `What is the attire for the wedding?`,
    answer: `Semi-formal. We have a color code for the wedding party and guests. For women, please refer to the color code on the wedding invite. For men, please wear a black dress pants with white long sleve button-up shirt.
     If you are unsure, please email us and we will be happy to help. This does not apply to the afterparty.`,
  },
  {
    question: `What are the addresses of the wedding ceremony and reception venues?`,
    answer: `The wedding ceremony will be held at Como Park Zoo Convervatory - Zen Gardens. The wedding reception will be held at Marna's Eatery.
     The address for Como Park Zoo Convervatory is 1225 Estabrook Dr, St Paul, MN 55103. The address for Marna's Eatery is 4154 W Broadway Ave, Minneapolis, MN 55422.`,
  },
  {
    question: `Afterparty Airbnb`,
    answer: `We have an Airbnb for those who need a place to stay after the afterparty. Please remember to RSVP on the RSVP page, spots will be spoken for. Checkin is at 3pm on July 29th. Checkout is at 11AM on July 30th. The address for the Airbnb is 2209 Aldrich Ave S, Minneapolis, MN 55405.`,
  },
  {
    question: `How do I checkin to the Afterparty Airbnb`,
    answer: `Closer to the date of the wedding, we will create a group chat for the Airbnb. It will be self checkin.`,
  },
  {
    question: `What is the wedding registry?`,
    answer: `We won't have a registry as we are moving to Costa Rica and won't be able to take many things with us. If you would like to give us a gift, please use Venmo (@EthanJung84 or @RebecaBernhagen). 
    If you would like to give us a gift in person, please bring a card to the reception at Marna's Eatery.`,
  },
  {
    question: `Can I bring a plus-one?`,
    answer: `If your invitation includes a plus-one, we would be delighted to have your guest join us. Please include their name when you RSVP. If your invitation does not specify a plus-one, we kindly ask that you do not bring additional guests.`,
  },
  {
    question: `Are there any dietary restrictions or allergies the caterer should be aware of?`,
    answer: ` When you RSVP, please indicate any dietary restrictions or allergies you may have. We will do our best to accommodate your needs and inform the caterer accordingly.`,
  },
  {
    question: `Are children welcome at the wedding?`,
    answer: ` We love children, but we kindly request that our wedding celebration be an adults-only event. We appreciate your understanding and hope you can still join us on our special day.`,
  },
  {
    question: `What is the afterparty?`,
    answer: `The afterparty will begin after a small intimate dinner reception at Marna's Eatery at 9pm. We will be taking a partybus to downtown Minneapolis, and going on a bar crawl from there.`,
  },
  {
    question: `When can I join the afterparty?`,
    answer: `The afterparty will start at 9pm on July 29th. Please join us at anytime for a night of fun and dancing!`,
  },
  {
    question: ` Is there a hashtag for the wedding?`,
    answer: `Heck yes! #JungUpOnYou`,
  },
  // More questions...
];
const Faq = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Faq;
