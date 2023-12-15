//4. Import useState in
import React, {useState} from "react";

//3. Destructure services from the props object
const Tabs = ({ services }) => {
  /*5. In order to know which tab is visible, create state to 
  keep track of which one is currently visible with initial
  state being 0 place in the array */
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <section className="tabs">
      {/*6. Map over services array, output an h3 element
      with index as akey and the name as the h3*/}
      <div>
        {services.map((service, index) => (
          <h3 className="tab-title" key={index}>{service.name}</h3>
        ))}
      </div>
      <div></div>
    </section>
  );
};

export default Tabs;
