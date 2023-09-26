import React from "react";
import { projectsData } from "./Data";
import Workitems from "./Workitems";
const Works = () => {
  return (
    <div>
      <div className="work__container container grid">
        {projectsData.map((item) => {
          return <Workitems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
