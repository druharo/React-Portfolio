import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Project from "../components/Project";

function Portfolio() {
  return (
    <div>
      <Header />
      <h1>Portfolio</h1>
      <div class="card-group">
        <Project
          name="note-taker"
          image="https://github.com/druharo/note-taker/raw/main/utils/noteTaker.png"
          github="https://github.com/druharo/note-taker"
          deployed="https://tranquil-journey-42430.herokuapp.com/notes"
        />
        <Project
          name="employee-tracker"
          image="https://github.com/druharo/employee-tracker/raw/main/utils/employeeTracker.png"
          github="https://github.com/druharo/employee-tracker"
          walkthrough-video="https://watch.screencastify.com/v/QkDPQPVOTU95QEVh2qIb"
        />
        <Project
          name="team-profile generator"
          image="https://github.com/druharo/team-profile-generator/raw/main/utils/teamProfileImage.png"
          github="https://github.com/druharo/team-profile-generator/raw/main/utils/teamProfileImage.png"
        />
        <Project
          name="super-search"
          image="https://github.com/llyruss/SuperSearch/raw/main/Assets/css/results-screenshot.png"
          github="https://github.com/llyruss/SuperSearch"
        />
        <Project
          name="weather-app"
          image="https://github.com/druharo/WEATHERAPP/raw/main/weatherapp.png"
          github="https://github.com/druharo/WEATHERAPP"
        />
        
        <Project
          name="go-aware"
          image="https://github.com/Nwsheats/Go-Aware/raw/main/assets/map-dashboard.png"
          github="https://github.com/Nwsheats/Go-Aware"
          deployed="https://go-aware.herokuapp.com/"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
