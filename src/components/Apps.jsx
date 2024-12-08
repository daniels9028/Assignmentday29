import React from "react";
import CardApps from "./CardApps";

const Apps = (props) => {
  const { apps } = props;
  return (
    <section className="my-20 max-w-[1444px] mx-auto lg:px-20 px-10" id="apps">
      <h3 className="text-3xl font-semibold text-center">Our Apps</h3>
      <div className="grid grid-cols-1 gap-20 mt-10 place-items-center">
        {apps.map((app) => (
          <CardApps app={app} key={app.id} />
        ))}
      </div>
    </section>
  );
};

export default Apps;
