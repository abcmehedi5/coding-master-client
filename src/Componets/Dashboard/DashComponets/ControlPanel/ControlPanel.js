import React, { useEffect } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import AllModule from "./AllModule";
import "./ControlPanel.css";
const ControlPanel = () => {
  const [moduleTitle, setModuleTitle] = useState({});
  const [moduleDetails, setMOduleDetails] = useState({});
  const [allModule, setAllModule] = useState([]);
  console.log(allModule);
  console.log(moduleDetails);
  // handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    //   post to server
    fetch("https://coding-master-server.onrender.com/module/addModule", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        moduleTitle: moduleTitle,
        moduleDetails: [moduleDetails],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          toast.success(data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });

          fetch("https://coding-master-server.onrender.com/module/allModule")
            .then((res) => res.json())
            .then((data) => setAllModule(data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // handle change
  const handleChange = (e) => {
    const newModuleTitle = { ...moduleTitle };
    newModuleTitle[e.target.name] = e.target.value;
    setModuleTitle(newModuleTitle);
  };

  // handle change moduile details
  const changeModuleDetails = (e) => {
    const newModuleDetails = { ...moduleDetails };
    newModuleDetails[e.target.name] = e.target.value;
    setMOduleDetails(newModuleDetails);
  };

  // fetch all module
  useEffect(() => {
    fetch("https://coding-master-server.onrender.com/module/allModule")
      .then((res) => res.json())
      .then((data) => setAllModule(data));
  }, []);

  // handle module delete
  const handleModuleDelete = (id) => {
    fetch("https://coding-master-server.onrender.com/module/deleteModule/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          toast.success(data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });

          fetch("https://coding-master-server.onrender.com/module/allModule")
            .then((res) => res.json())
            .then((data) => setAllModule(data));
        }
      });
  };



  // handle video delete:=-=-=-=-=-=-=-=-=-=-=-=
  const handleVideoDelete = (moduleId, videoId) => {
    console.log(moduleId, videoId);
    fetch(`https://coding-master-server.onrender.com/module/deleteVideo/${moduleId}/${videoId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          toast.success(data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });

          fetch("https://coding-master-server.onrender.com/module/allModule")
            .then((res) => res.json())
            .then((data) => setAllModule(data));
        }
      });
  };

  return (
    <div>
      {/* Toastify Alert container */}
      <ToastContainer />
      {/* Toastify Alert container */}
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col md 9">
          <h1 className="brandFont mt-3"> Module Control Panel</h1>

          <form onSubmit={handleSubmit} className="w-50 m-auto">
            <div class="mb-3">
              <label htmlFor="name" class="form-label">
                Module Title
              </label>
              <input
                type="text"
                name="moduleTitle"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder=" Module Title"
                onChange={handleChange}
              />
            </div>

            <div class="mb-3">
              <label htmlFor="name" class="form-label">
                Video Title
              </label>
              <input
                type="text"
                name="videoTitle"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter price"
                onChange={changeModuleDetails}
              />
            </div>

            <div class="mb-3">
              <label htmlFor="name" class="form-label">
                Video id
              </label>
              <input
                type="text"
                name="videoId"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="youtube video id"
                onChange={changeModuleDetails}
              />
            </div>

            <div class="mb-3 ">
              <button type="submit" className="btn btn-secondary w-100 mt-4">
                Submit
              </button>
            </div>
          </form>

          {/* all module */}

          <h2 className="brandFont">all Module</h2>
          <div
            class="accordion accordionStyle accordion-flush mb-5 container"
            id="accordionFlushExample"
          >
            {allModule.map((accroding) => (
              <AllModule
              handleVideoDelete={handleVideoDelete}
                handleModuleDelete={handleModuleDelete}
                accroding={accroding}
                key={accroding._id}
              ></AllModule>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
