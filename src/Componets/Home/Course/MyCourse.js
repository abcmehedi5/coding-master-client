import React, { useEffect, useState } from "react";
import Navbar from "../Header/Navber/Navbar";
import YouTube from "react-youtube";
import MyCourseAcroding from "./MyCourseAcroding";
const MyCourse = () => {
  const [courseData, setCourse] = useState([]);
  console.log(courseData);
  useEffect(() => {
    fetch("https://coding-master-server.onrender.com/module/allModule")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  const opts = {
    height: "490px",
    width: "100%",
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      showinfo: 0,
    },

  };
  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const [videoId, setVideoId] = useState("");

  return (
    <div>
      <Navbar></Navbar>
      <div className="row mt-5 m-auto container">
        <div className="col-md-8 m-auto">
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={onReady}
            onPlay={(event) => console.log("onPlay", event)}
            onPause={(event) => console.log("onPause", event)}
            onEnd={(event) => console.log("onEnd", event)}
            onError={(event) => console.log("onError", event)}
            onStateChange={(event) => console.log("onStateChange", event)}
            onPlaybackRateChange={(event) =>
              console.log("onPlaybackRateChange", event)
            }
            onPlaybackQualityChange={(event) =>
              console.log("onPlaybackQualityChange", event)
            }
          />
        </div>
        <div className="col-md-4  p-4 ">
          <h4 className="brandFont">Course Content</h4>
          <div
            class="accordion  accordionVideoList accordion-flush"
            id="accordionFlushExample"
          >
            {courseData.map((accroding) => (
              <MyCourseAcroding
                accroding={accroding}
                setVideoId={setVideoId}
                key={accroding._id}
              ></MyCourseAcroding>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourse;
