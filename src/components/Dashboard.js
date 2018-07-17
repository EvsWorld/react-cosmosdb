import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = ({ secretData, user }) => (
  <div className="container">
    <div>
      <p>"You should get access to this page only after authentication."</p>
   </div >
  {secretData && <div style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.name}</strong>!<br />{secretData}</div>}
  </div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
