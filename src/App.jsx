import React from "react";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import ProjectList from "./components/ProjectList/ProjectList";
import ProjectListLoader from "./components/ProjectList/ProjectListLoader";

function App() {
  return (
    <>
      <ErrorBoundary>
        <React.Suspense fallback={<ProjectListLoader />}>
          <ProjectList />
        </React.Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
