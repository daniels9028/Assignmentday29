import React from "react";

const FooterList = (props) => {
  const { footer } = props;

  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-xl font-semibold text-white">{footer.title}</h3>
      <ul className="flex flex-col space-y-2 text-lg text-white cursor-pointer">
        {footer.links.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
