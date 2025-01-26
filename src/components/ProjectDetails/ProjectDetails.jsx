import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import "./ProjectDetails.css";
import {
  convertNumberToLocaleString,
  convertToReadableDate,
} from "../../utils/utils";

const ProjectDetails = ({ project }) => {

  return (
    <div className="project-details">
      <h2 className="project-details-title">{project.title}</h2>
      <p className="project-details-description">{project.blurb}</p>
      <div className="project-details-cont">
        <div className="project-detail-item">
          <p className="project-detail-item-title">Amount pledged: </p>
          <p className="project-detail-item-value">{`$${convertNumberToLocaleString(
            project["amt.pledged"]
          )}`}</p>
        </div>
        <div className="project-detail-item">
          <p className="project-detail-item-title">Percentage funded: </p>
          <p className="project-detail-item-value">
            {`${project["percentage.funded"]}%`}
          </p>
        </div>
        <div className="project-detail-item">
          <p className="project-detail-item-title">Backers: </p>
          <p className="project-detail-item-value">
            {convertNumberToLocaleString(project["num.backers"], true)}
          </p>
        </div>
        <div className="project-detail-item">
          <p className="project-detail-item-title">End date: </p>
          <p className="project-detail-item-value">
            {convertToReadableDate(project["end.time"])}
          </p>
        </div>
        <div className="project-detail-item">
          <p className="project-detail-item-title">Country: </p>
          <p className="project-detail-item-value">{project.country}</p>
        </div>
        <div className="project-detail-item">
          <p className="project-detail-item-title">Location: </p>
          <p className="project-detail-item-value">{project.location}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
