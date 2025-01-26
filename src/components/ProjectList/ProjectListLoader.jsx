import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProjectListLoader = () => {
  return (
    <div>
      <Skeleton height={"348px"} width={"100%"} baseColor="rgb(36, 36, 36)" highlightColor="rgb(46, 46, 46)"/>
    </div>
  );
};

export default ProjectListLoader;
