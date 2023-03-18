import React from "react";
import Sidebar from "../../Sidebar/Sidebar";

const AccountSettings = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <h1 className="brandFont">Account Setting</h1>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
