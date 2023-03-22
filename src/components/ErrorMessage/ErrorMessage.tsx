import React from 'react';
import './ErrorMessage.scss';
import brokenRobot from '../../images/broken-robot.jpg';

export const ErrorMessage: React.FC = () => {
  return (
    <div className="error-block">
      <img src={brokenRobot} className="error-block__img" />
      <div className="error-block__notification">
        <p className="error-block__notification-text">
          Error occurred while loading data from the server. Please try the
          operation again later.
        </p>
      </div>
    </div>
  );
};
