import React, { useEffect } from "react";
import { echo } from "./echo"; // Adjust the import path if necessary

const DeliveryNotifications = ({ userId }) => {
  useEffect(() => {
    if (userId) {
      echo.private(`App.Models.User.${userId}`).notification((notification) => {
        console.log(notification);
        // Handle the notification, e.g., show a toast or an alert
        alert(`New order assigned: ${notification.message}`);
      });
    }
  }, [userId]);

  return <div>{/* Your component UI */}</div>;
};

export default DeliveryNotifications;
