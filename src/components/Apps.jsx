import React from "react";
import CardApps from "./CardApps";

const Apps = (props) => {
  const { apps } = props;
  return (
    <section className="my-20 max-w-[1444px] mx-auto lg:px-20 px-10">
      <h3 className="text-center text-3xl font-semibold">Our Apps</h3>
      <div className="grid grid-cols-1 place-items-center gap-20 mt-10">
        {apps.map((app) => (
          <CardApps app={app} key={app.id} />
        ))}
      </div>
    </section>
  );
};

export default Apps;
