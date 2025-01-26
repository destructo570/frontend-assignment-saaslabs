import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProjectListLoader = () => {
  return (
    <div>
      <Skeleton height={"348px"} width={"100%"} baseColor="#727272" highlightColor="#9E9E9F"/>
    </div>
  );
};

export default ProjectListLoader;
