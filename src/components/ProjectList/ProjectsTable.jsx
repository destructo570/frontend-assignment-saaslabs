import React from "react";

const ProjectsTable = ({ projects = [] }) => {
  return (
    <table cellSpacing="0">
      <thead>
        <tr>
          <td>S.No.</td>
          <td>Percentage funded</td>
          <td>Amount pledged</td>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => {
          return (
            <tr key={project["s.no"]+1}>
              <td>{project["s.no"]+1}</td>
              <td>{project["percentage.funded"]}</td>
              <td>{`$${project["amt.pledged"]}`}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProjectsTable;
