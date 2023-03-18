import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "./../../../App";
const SidebarMobile = () => {
  const style = {
    background: "none",
    color: "white",
  };
  // role check start
  const [studentRole, setStudentRole] = useState(false);
  const [adminRole, setAdminRole] = useState(false);
  const [teacherRole, setTeacherRole] = useState(false);
  const [teacher, setTeacher] = useState({});
  const [loggedinUser, setLoggedinUser] = useContext(userContext);
  useEffect(() => {
    fetch("https://coding-master-server.onrender.com/role/studentRole", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedinUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setStudentRole(data));
    // teahcer role start
    fetch("https://coding-master-server.onrender.com/role/teacherRole", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedinUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setTeacherRole(data));
    // teahcer role end

    // teahcer single load start
    fetch("https://coding-master-server.onrender.com/role/singleTeacher", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedinUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setTeacher(data));
    // teahcer  single load end

    // admin role start
    fetch("https://coding-master-server.onrender.com/role/adminRole", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedinUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setAdminRole(data));

    // admin role end
  }, []);
  // role check end
  return (
    <div className="sidebarCollups ">
      <div className="sidebarMenu">
        <button
          className="btn btn-success"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          <div className="sidebarIcon">
            <i class="fa-solid fa-bars"></i>
          </div>
        </button>
      </div>

      <div
        class="offcanvas offcanvas-start w-75"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div class="offcanvas-body sidebarContainerResponsive">
          <div className="closeBtn">
            <h2
              className=" offcanvas-title text-white brandFont mt-3 text-center"
              id="offcanvasWithBothOptionsLabel"
            >
              CODING MASTER Dashboard
            </h2>
            <br />
            <div
              type="button"
              class="text-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i
                style={{ fontSize: "40px" }}
                class="fa-solid fa-xmark mt-3"
              ></i>
            </div>
          </div>
          <div className="col-md-3 ">
            <hr style={{ border: "2px solid white" }} />
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              {/* changle file main sidebar start */}
                       {/* responsive copy start */}
          {/*--------------------------- Home siebar start ------------------------------*/}

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                style={style}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <i class="fa-solid fa-house-user me-3 fs-4"></i>Home
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <ul class="list-group dashboardList">
                  <Link to="/">
                    <li class="list-group-item">Home</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>

          {/*--------------------------- Home siebar end ------------------------------*/}
          {/*--------------------------- Dashboard siebar Start ------------------------------*/}
          { adminRole ? (
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingSix">
                <button
                  style={style}
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSix"
                  aria-expanded="false"
                  aria-controls="flush-collapseSix"
                >
                  <i class="fa-solid fa-chart-line me-3 fs-4"></i>Dashboard
                </button>
              </h2>
              <div
                id="flush-collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingSix"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <ul class="list-group dashboardList ">
                    <Link to="/addCourse">
                      <li class="list-group-item ">
                        <i class="fa-solid fa-chart-simple me-2"></i> Add Course
                      </li>
                    </Link>

                    {adminRole && (
                      <div>
                        <Link to="/admin/contro-Panel">
                          <li class="list-group-item">
                            <i class="fa-solid fa-gear me-2"></i>Control Panel
                          </li>
                        </Link>
                        <Link to="/admin-make">
                          <li class="list-group-item">
                            {" "}
                            <i class="fa-solid fa-pen-nib me-2"></i>Make Admin
                          </li>
                        </Link>
                      </div>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <p></p>
          )}
          {/*--------------------------- Teacher siebar start ------------------------------*/}
          {adminRole && (
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  style={style}
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  <i class="fa-solid fa-person-chalkboard me-3 fs-4"></i>
                  Studnet Analytics
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <ul class="list-group dashboardList ">
                    <Link to="/all-teacher">
                      <li class="list-group-item">Student</li>
                    </Link>
                    <Link to='/allTransaction'>
                      <li class="list-group-item"> Course Transaction  </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          )}
          {/*--------------------------- Teacher siebar end ------------------------------*/}

          {/*--------------------------- Blog siebar start ------------------------------*/}

          {(teacherRole && teacher.status == "approved") || adminRole ? (
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingSeven">
                <button
                  style={style}
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSeven"
                  aria-expanded="false"
                  aria-controls="flush-collapseSeven"
                >
                  <i class="fa-sharp fa-solid fa-building-columns  me-3 fs-4"></i>
                  My Course
                </button>
              </h2>
              <div
                id="flush-collapseSeven"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingSeven"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <ul class="list-group dashboardList">
                    <Link to="/myCourse">
                      <li class="list-group-item">Course</li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <p></p>
          )}
          {/*--------------------------- Blog siebar end ------------------------------*/}
          <hr style={{ border: "1px solid white " }} />
          <br />

          {/* items */}

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFour">
              <button
                style={style}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                <i class="fas fa-user-alt-slash me-3 fs-4"></i> Accounts
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                {/*  sub menu start */}

                <ul class="list-group dashboardList">
                  <Link to="/account-setting">
                    {/* <li class="list-group-item">Setting</li> */}
                  </Link>
                  <Link to="/profile">
                    <li class="list-group-item">Profile</li>
                  </Link>
                  <Link>
                    {/* <li class="list-group-item">Sing Out</li> */}
                  </Link>
                </ul>

                {/*  sub menu end */}
              </div>
            </div>
        </div>
          {/* responsive copy end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMobile;
