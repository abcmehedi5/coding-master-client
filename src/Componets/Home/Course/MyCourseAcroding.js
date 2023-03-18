import React from "react";
import VideoList from "./VideoList";

const MyCourseAcroding = ({ accroding,setVideoId }) => {
  console.log(accroding);
  const { moduleTitle,_id,moduleDetails } = accroding;
  return (
    <div class="accordion-item videoListItem">
      <h2 class="accordion-header" id={`flush-heading${_id}`}>
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
      </h2>
      <div
        id={`flush-collapse${_id}`}
        class="accordion-collapse collapse"
        aria-labelledby={`flush-heading${_id}`}
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body videoUl">
          <ul class="list-group  " id="list-tab" role="tablist">
          {
            moduleDetails.map((video , index)=><VideoList setVideoId={setVideoId} video={video} key={index}></VideoList>)
          }
          </ul>

      
        </div>
      </div>
    </div>
  );
};

export default MyCourseAcroding;
