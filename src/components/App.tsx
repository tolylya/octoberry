import * as React from 'react';
import '../styles/global.css';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div className="pt-xs">
        {this.props.children}
      </div>
    );
  }
}

export default App;
