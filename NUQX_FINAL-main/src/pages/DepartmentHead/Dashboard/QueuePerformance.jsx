import React from "react";
import icon1 from "../../../images/icon1.svg";
import icon2 from "../../../images/icon2.svg";
import icon3 from "../../../images/icon3.svg";
import "./QueuePerformance.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const QueuePerformance = () => {
  return (
    <div className="queue-dashboard">
      <div className="dashboard-header">
        Welcome to your Dashboard
      </div>

      <div className="queue-analysis">
  <span className="label">Queue Performance Analysis</span>
</div>

        <div className="peak-hour">
          <span className="time">2:00 PM</span> <span className="label">Peak Hour</span>
        </div>

        <div className="metrics-container">
          <div className="metric-card">
            <img src={icon1} alt="Longest Wait Icon" className="metric-icon" />
            <div className="metric-value">30:34</div>
            <div className="metric-label">Longest Wait Time Recorded</div>
          </div>

          <div className="metric-card">
            <img src={icon2} alt="Shortest Wait Icon" className="metric-icon" />
            <div className="metric-value">12:08</div>
            <div className="metric-label">Shortest Wait Time Recorded</div>
          </div>

          <div className="metric-card">
            <img src={icon3} alt="Avg Clients Served Icon" className="metric-icon" />
            <div className="metric-value">22</div>
            <div className="metric-label">Avg. Number of Clients Served per Hour</div>
          </div>
        </div>
      </div>
  );
};

export default QueuePerformance;
