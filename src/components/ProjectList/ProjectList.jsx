import React, { useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { fecthProjectList } from "../../api/api";
import ProjectsTable from "./ProjectsTable";
import "./ProjectList.css";
import Pagination from "../Pagination/Pagination";
import { getprojectListByPage } from "../../utils/utils";

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
      <ProjectsTable projects={getprojectListByPage(data, currentPage, pageSize)} />
      <Pagination
        onPageChange={(page) => setCurrentPage(page)}
        totalCount={data.length}
        siblingCount={1}
        currentPage={currentPage}
        pageSize={pageSize}
      />
    </div>
  );
};

export default ProjectList;
