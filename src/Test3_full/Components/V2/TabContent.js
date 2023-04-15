import React from "react";
 
const TabContent = ({id, activeTab, children, setActiveTab}) => {

  return (
    activeTab === id ? <div className="TabContent">
      { children }
    </div>
    : null
  );
};
 
export default TabContent;