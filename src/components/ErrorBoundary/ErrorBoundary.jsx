import React from "react";

class ErrorBoundary extends React.Component {
  producer() {
    this.setState({ hasError: false });
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this?.state?.hasError) {
      return <div>Error: Something is wrong!</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
