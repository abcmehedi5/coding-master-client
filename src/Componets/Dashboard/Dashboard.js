import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import "./Dashboard.css";
const Dashboard = () => {
    
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>

        <div className="col md-9 ">
          <h2 className="mt-2 mb-5 ms-2 brandFont">Dashboard</h2>

          {/* dashboard card */}
          <div className="row d-flex gap-3 justify-content-center mb-5">
            <div className="col-md-3 brandFont dCardSize">
              <span>
              <i class="fa-solid fa-mobile fs-2"></i>
              </span>
              <h2>app development</h2>
              <h2>--</h2>
            </div>
            <div className="col-md-3 brandFont dCardSize">
              <span>
              <i class="fa-solid fa-code fs-2"></i>
              </span>
              <h2>Web Development</h2>
              <h2>--</h2>
            </div>
            <div className="col-md-3 brandFont dCardSize">
              <span>
              <i class="fa-solid fa-pen-nib fs-2"></i>
              </span>
              <h2>Graphic Design</h2>

              <h2>--</h2>
            </div>
          
          </div>

<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img className="img img-fluid" src="https://onesignal.com/blog/content/images/2020/08/yoga-3.gif" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img className="img img-fluid" src="https://www.contentstadium.com/wp-content/uploads/2021/10/twitter-carousel-examples.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img className="img img-fluid" src="https://cdn.searchenginejournal.com/wp-content/uploads/2021/12/instagram-carousel-61b7446cb19e1-sej-1280x720.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
