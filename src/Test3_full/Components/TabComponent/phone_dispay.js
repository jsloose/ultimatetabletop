
import './phone_display.css';

import React, { useState } from "react";
import TabContent from "../V2/TabContent";
import NPCDisp from "./npc_display.jsx";
import ATKDisp from "./atk_display.jsx";

 
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
      <div className="phoneDisp">
        <TabContent id="tab1" activeTab={activeTab}>
            <NPCDisp id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
            <ATKDisp id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
        </TabContent>
      </div>
  );
};

export default Tabs;