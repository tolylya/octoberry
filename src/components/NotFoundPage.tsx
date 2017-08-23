import * as React from 'react';
import { Link } from 'react-router';

class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <h4>
          404 Page Not Found
        </h4>
        <Link to="/"> Go back to homepage </Link>
      </div>
    );
  }
}

export default NotFoundPage;
