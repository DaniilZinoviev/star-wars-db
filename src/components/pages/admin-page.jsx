import React from "react";
import { Redirect } from "react-router-dom";

const AdminPage = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="jumbotron">
      <h2 className="text-center">Welcome, admin!</h2>
    </div>
  );
};

export default AdminPage;
