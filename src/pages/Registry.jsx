import React from "react";
import Navbar from "../components/Navbar";
import VenmoQRCode from "./../components/VenmoQrCode";

const Registry = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div class="container mx-auto px-4 py-16 mt-10 sm:mt-16 flex items-center justify-center">
        <div class="bg-gray-900 text-white rounded-lg flex justify-center flex-col items-center shadow-md p-6 relative max-w-screen-md ">
          <h2 class="text-2xl font-semibold mb-4">Registry</h2>
          <p class="mb-4">
            We won't have a registry as we are moving to Costa Rica and won't be
            able to take many things with us. If you would like to give us a
            gift, please use Venmo. If you would like to give us a gift in
            person, please bring a card to the reception at Marna's Eatery.
          </p>
          <p className="text-center w-full mb-5">@EthanJung84 or @RebecaBernhagen</p>
          <div class="grid lg:grid-cols-2 gap-5 mx-auto">
            <img
              src="https://res.cloudinary.com/dov31rv0v/image/upload/v1679866622/wedding%20website/venmo_qrcode_v3ogox.jpg"
              alt=""
              class="rounded-lg max-h-96 max-w-96"
            />
            <img
              src="https://res.cloudinary.com/dov31rv0v/image/upload/v1679866744/wedding%20website/venmo_qrcode_1_qsebov.jpg"
              alt=""
              class="rounded-lg max-h-96 max-w-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registry;
