import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to the console
    console.error('Error caught by error boundary:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // Display a more detailed error message
      return (
        <div>
          <h2>Something went wrong.</h2>
          {this.state.error && <p>Error: {this.state.error.toString()}</p>}
          {this.state.errorInfo && (
            <div>
              <h3>Stack Trace:</h3>
              <pre>{this.state.errorInfo.componentStack}</pre>
            </div>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
