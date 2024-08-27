import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="p-p-4 p-text-center">
      <div className="mb-4 md:mb-0 w-full flex flex-column justify-content-center align-items-center">
        <h3 className="text-lg font-bold">Búscanos</h3>
        <div className="flex space-x-4 flex flex-row">
          <SocialIcon
            url="https://facebook.com"
            network="facebook"
            style={{ height: 35, width: 35, margin: "0px 5px" }}
          />
          <SocialIcon
            url="https://instagram.com"
            network="instagram"
            style={{ height: 35, width: 35, margin: "0px 5px" }}
          />
          <SocialIcon
            url="https://whatsapp.com"
            network="whatsapp"
            style={{ height: 35, width: 35, margin: "0px 5px" }}
          />
        </div>
      </div>
      <p>&copy; 2024 Wow Vehicular. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
