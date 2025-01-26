import React, { useState } from "react";
import { useNavigate } from "react-router";
import { convertNumberToLocaleString } from "../../utils/utils";
import Modal from "../Modal/Modal";
import ProjectDetails from "../ProjectDetails/ProjectDetails";

const ProjectsTable = ({ projects = [] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <>
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
              <tr key={project["s.no"] + 1}>
                <td>{project["s.no"] + 1}</td>
                <td
                  className="project-title"
                  onClick={() => openModal(project)}
                >
                  {project["title"]}
                </td>
                <td className="percentage-funded">{`${convertNumberToLocaleString(
                  project["percentage.funded"]
                )}%`}</td>
                <td className="amount-pledged">{`$${convertNumberToLocaleString(
                  project["amt.pledged"]
                )}`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ProjectDetails project={selectedProject} />
      </Modal>
    </>
  );
};

export default ProjectsTable;
