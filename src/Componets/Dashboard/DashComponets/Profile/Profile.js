import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../../../App";
import Sidebar from "../../Sidebar/Sidebar";
import "./Profile.css";
import ProfilePost from "./ProfilePost/ProfilePost";
const Profile = () => {
  // style

  const style = {
    width: "170px",
    height: "170px",
    margin: "auto",
    border: "1px solid black",
    borderRadius: "10px",
    margin: "5px",
  };
  // profile data
  const [profile, setProfile] = useState(null);
  console.log(profile);
  const [loggedinUser, setLoggedinUser] = useContext(userContext);
  // find single profile user
  useEffect(() => {
    fetch("https://coding-master-server.onrender.com/profile/stProfile", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify({ email: loggedinUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>

        <div className="col-md-9 mt-5">
          {profile == null ? (
            <p>Loading...</p>
          ) : (
            <div className="row profileContainer">
              <div className="col-md-4">
                <div className="Profile-left">
                  <img
                    // src={`data:image/png;base64,${profile.img.img}`}
                    src={profile.img}
                    alt=""
                  />
                  <div className="text-center">
                    <h5 className="mt-5">{profile.name}</h5>
                    <p>{profile.qualification}</p>
                  </div>
                </div>
              </div>

              <div className="col-md-8">
                <h4>Information</h4>
                <h5 className="mb-5">Status: {profile.status}</h5>
                <div className="profile-right">
                  <table className="table">
                    <thead className="thead">
                      <tr>
                        <th>Email</th>
                        <th>Phone</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>{profile.email}</td>
                        <td>{profile.phone}</td>
                      </tr>
                      <tr>
                        {profile.role == "teacher" && <th>Facebook</th>}

                        <th>Address</th>
                      </tr>
                      <tr>
                        {profile.role == "teacher" && <td>{profile.fburl}</td>}

                        <td>{profile.address}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* post area  */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
