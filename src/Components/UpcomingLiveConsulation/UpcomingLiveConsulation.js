import React from "react";
import "./UpcomingLiveConsulation.css";
import Videos from "../Videos/Videos";

const UpcomingLiveConsulation = () => {
  const items = [
    {
      url:
        "https://www.youtube.com/watch?v=QRElRAXabK4&list=RDQRElRAXabK4&start_radio=1",
    },
    {
      url: "https://www.youtube.com/embed/5Oeuq8MkJdk",
    },
    {
      url: "https://www.youtube.com/embed/QRElRAXabK4",
    },
    {
      url: "https://www.youtube.com/embed/fdubeMFwuGs",
    },
    {
      url: "https://www.youtube.com/embed/D8HDFn_PgE4",
    },
  ];
  return (
    <div className="UpcomingContainer">
      <div className="headingConcept">
        <h1>Concept Videos</h1>
        <p className="section1">Select a number</p>
      </div>
      <div className="offlineVideo">
        <Videos items={items} active={0} />
      </div>
      <div className="headingLive">
        <h1>Live Classes</h1>
        <p className="section2">Select a number</p>
      </div>
    </div>
  );
};

export default UpcomingLiveConsulation;
