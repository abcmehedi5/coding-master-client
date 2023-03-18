import React, { useState } from "react";
import { Link } from "react-router-dom";

const AllModule = ({ accroding, handleModuleDelete,handleVideoDelete }) => {
  const { moduleTitle, moduleDetails, _id } = accroding;
  const [singleModule, setSingleModule] = useState({});
  const handleSingleModule = (id) => {
    fetch("https://coding-master-server.onrender.com/module/singleModule/" + id)
      .then((res) => res.json())
      .then((data) => setSingleModule(data));
  };
  // // handle video delete:=-=-=-=-=-=-=-=-=-=-=-=
  // const handleVideoDelete = (moduleId, videoId) => {
  //   console.log(moduleId, videoId);
  //   fetch(`https://coding-master-server.onrender.com/module/deleteVideo/${moduleId}/${videoId}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };
  return (
    <div class="accordion-item moduleTitle">
      <h5
        class="accordion-header d-flex justify-content-center align-items-center"
        id={`flush-heading${_id}`}
      >
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-collapse${_id}`}
          aria-expanded="false"
          aria-controls={`flush-collapse${_id}`}
        >
          {moduleTitle.moduleTitle}
        </button>
        <button
          onClick={() => handleModuleDelete(_id)}
          className="ms-5 btn btn-primary"
        >
          Delete
        </button>
        {/* add btn */}
        <Link to={"/videoAdd/" + _id}>
          <button
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            type="button"
            data-bs-whatever="@fat"
            className="ms-3 btn btn-primary"
          >
            <i class="fa-solid fa-pen-to-square">Add</i>
          </button>
        </Link>
      </h5>
      <div
        id={`flush-collapse${_id}`}
        class="accordion-collapse collapse"
        aria-labelledby={`flush-heading${_id}`}
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          <ul class="list-group" id="list-tab" role="tablist">
            {moduleDetails.map((video, index) => (
              <div key={index}>
                <a
                  target={"_blank"}
                  href={`https://www.youtube.com/watch?v=${video.videoId}`}
                >
                  <li className="accordionList">
                    {index + "  -  " + video.videoTitle}
                  </li>
                </a>
                <button
                  className="btn btn-primary"
                  onClick={() => handleVideoDelete(_id, video.videoId)}
                >
                  Delete
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllModule;
