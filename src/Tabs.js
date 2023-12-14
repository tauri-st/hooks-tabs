import React from "react";

const Tabs = ({ name, description }) => {
  return (
    <section className="tabs">
      <div>Name: {name}</div>
      <div>Description: {description}</div>
    </section>
  );
};

export default Tabs;
