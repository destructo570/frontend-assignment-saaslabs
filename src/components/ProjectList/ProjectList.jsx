import React, { useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { fecthProjectList } from "../../api/api";
import ProjectsTable from "./ProjectsTable";
import "./ProjectList.css";
import Pagination from "../Pagination/Pagination";

const pageSize = 5;
const ProjectList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useSuspenseQuery({
    queryKey: ["data"],
    queryFn: fecthProjectList,
  });

  return (
    <div>
      <h1>Kick Starter Projects</h1>
      <ProjectsTable projects={data} />
      <Pagination
        onPageChange={(page) => setCurrentPage(page)}
        totalCount={Math.ceil(data.length / pageSize)}
        siblingCount={1}
        currentPage={currentPage}
        pageSize={pageSize}
      />
    </div>
  );
};

export default ProjectList;
