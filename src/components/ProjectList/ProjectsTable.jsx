import React from "react";

const ProjectsTable = ({ projects = [] }) => {
  return (
    <table cellSpacing="0" className="fadeInUp-animation">
      <thead>
        <tr>
          <td>S.No.</td>
          <td>Title</td>
          <td>Percentage funded</td>
          <td>Amount pledged</td>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => {
          return (
            <tr key={project["s.no"]+1}>
              <td>{project["s.no"]+1}</td>
              <td className="project-title">{project["title"]}</td>
              <td className="percentage-funded">{`${project["percentage.funded"]}%`}</td>
              <td className="amount-pledged">{`$${project["amt.pledged"]}`}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProjectsTable;
