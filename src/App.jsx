import React from "react";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import ProjectList from "./components/ProjectList/ProjectList";
import ProjectListLoader from "./components/ProjectList/ProjectListLoader";
import 'react-loading-skeleton/dist/skeleton.css'

function App() {
  return (
    <>
      <div className="project-list-cont">
        <h1 className="fadeInUp-animation">Kick Starter Projects</h1>
        <ErrorBoundary>
          <React.Suspense fallback={<ProjectListLoader />}>
            <ProjectList />
          </React.Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
}

export default App;
