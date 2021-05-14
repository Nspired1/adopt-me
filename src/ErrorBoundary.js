// taken from React documentation

import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught error", error, info);
    setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <h3>
          This listing has an error. <Link to="/">Click here</Link> to go back
          to home page or wait 5 seconds.
        </h3>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
