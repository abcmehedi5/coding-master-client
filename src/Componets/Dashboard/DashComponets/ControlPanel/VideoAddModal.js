import React, { useState } from "react";

const VideoAddModal = ({ singleModule }) => {
  const { moduleTitle, moduleDetilas, _id } = singleModule;
  const [moduileVideo, setModuleVideo] = useState({});
  //   handle change video
  const onChangeVideo = (e) => {
    const newVideo = { ...moduileVideo };
    newVideo[e.target.name] = e.target.value;
    setModuleVideo(newVideo);
  };

  // handle submit
  const handleAddButton = (id) => {
        console.log(id);
    // console.log(moduileVideo);
  };
  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {/* title module */}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
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
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={() => handleAddButton( _id )}
                type="button"
                class="btn btn-primary"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoAddModal;
