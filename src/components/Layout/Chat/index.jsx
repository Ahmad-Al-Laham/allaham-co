import React from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const Chat = () => {
  const customStyle = {
    desktop: {
      xOffset: 15,
      yOffset: 15,
      position: "cr",
    },
    mobile: {
      xOffset: 15,
      yOffset: 15,
      position: "br",
    },
  };

  return (
    <TawkMessengerReact
      propertyId="6689952eeaf3bd8d4d18e4fa"
      widgetId="1i24mtgpn"
      customStyle={customStyle}
    />
  );
};

export default Chat;
