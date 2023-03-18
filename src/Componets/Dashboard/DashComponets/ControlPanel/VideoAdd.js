import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const VideoAdd = () => {
  const { moduleId } = useParams();
  // modal functionality start
  const [moduileVideo, setModuleVideo] = useState({});
  //   handle change video
  const onChangeVideo = (e) => {
    const newVideo = { ...moduileVideo };
    newVideo[e.target.name] = e.target.value;
    setModuleVideo(newVideo);
  };

  // handle submit
  const handleAddButton = (id) => {
    fetch("https://coding-master-server.onrender.com/module/moduleVideo/" + id, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(moduileVideo),
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
        }
      });
  };

  return (
    <div className="container bg-info mt-5 rounded pb-5 w-50">
      {/* Toastify Alert container */}
      <ToastContainer />
      {/* Toastify Alert container */}
      <h1 className="brandFont text-center pt-5">Video Add</h1>
      <form onSubmit={handleAddButton}>
        <div class="mb-3">
          <label for="recipient-name" class="col-form-label">
            Video Title
          </label>
          <input
            onChange={onChangeVideo}
            type="text"
            class="form-control"
            id="recipient-name"
            name="videoTitle"
          />

          <label for="recipient-email" class="col-form-label">
            Video Id
          </label>
          <input
            onChange={onChangeVideo}
            type="text"
            class="form-control"
            id="recipient-email"
            name="videoId"
          />
        </div>
      </form>
      <button
        onClick={() => handleAddButton(moduleId)}
        className="btn btn-secondary"
        type="button"
      >
        Submit
      </button>
    </div>
  );
};

export default VideoAdd;
