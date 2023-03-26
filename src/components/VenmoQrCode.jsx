import React from "react";

function VenmoQRCode({ userId }) {
  const qrCodeUrl = `https://venmo.com/api/v5/users/${userId}/qr_code`;

  return (
    <div>
      <h1>Venmo QR Code</h1>
      <img src={qrCodeUrl} alt="Venmo QR Code" />
    </div>
  );
}

export default VenmoQRCode;
