import React from "react";
import FooterList from "./FooterList";

const Footer = (props) => {
  const { footerLinks } = props;

  return (
    <footer
      className="w-full bg-gradient-to-r from-[#67C3F3] to-[#5A98F2]"
      id="about"
    >
      <div className="max-w-[1444px] mx-auto lg:px-20 p-10">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex flex-col w-full gap-4 lg:w-1/2">
            <div className="flex items-center gap-4">
              <h3 className="px-2.5 text-2xl font-semibold bg-white text-[#5B9BF3] rounded-full">
                T
              </h3>
              <span className="text-xl font-semibold text-white">
                Trafalgar
              </span>
            </div>
            <p className="text-lg text-white">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
            <p className="text-lg text-white">
              ©Trafalgar PTY LTD 2020. All rights reserved
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-8 lg:gap-20 lg:grid-cols-3 lg:w-1/2">
            {footerLinks.map((footer) => (
              <FooterList footer={footer} key={footer.id} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
