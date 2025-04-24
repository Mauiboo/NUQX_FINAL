import React from "react";
import icon1 from "../../../images/icon1.svg";
import icon2 from "../../../images/icon2.svg";
import icon3 from "../../../images/icon3.svg";
import "@fortawesome/fontawesome-free/css/all.min.css";

const QueuePerformance = () => {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          backgroundColor: "#35408e",
          color: "white",
          textAlign: "center",
          fontSize: "50px",
          padding: "15px",
          borderRadius: "12px",
          position: "absolute",
          top: "150px",
          left: "58%",
          transform: "translateX(-50%)",
          width: "80%",
          border: "2px solid black",
        }}
      >
        Welcome to your Dashboard
      </div>

      <div style={{ marginBottom: "20px", fontSize: "24px", fontWeight: "bold" }}>
        <span>Queue Performance Analysis</span>
      </div>

      <div
        style={{
          backgroundColor: "#35408e",
          color: "white",
          padding: "10px 20px",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          width: "fit-content",
          fontSize: "22px",
          position: "absolute",
          top: "290px",
          left: "345px",
          border: "2px solid black",
        }}
      >
        <span style={{ fontSize: "30px", marginRight: "10px", padding: "5px 12px", color: "#ffffff", borderRadius: "8px" }}>
          2:00 PM
        </span>
        <span>Peak Hour</span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            margin: "20px",
            width: "350px",
            height: "350px",
            backgroundColor: "#35408e",
            color: "white",
            textAlign: "center",
            padding: "20px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            marginTop: "360px",
            right: "-140px",
            border: "2px solid black",
          }}
        >
          <img
            src={icon1}
            alt="Longest Wait Icon"
            style={{
              position: "absolute",
              top: "-60px",
              left: "90%",
              transform: "translateX(-50%)",
            }}
          />
          <div style={{ fontSize: "70px", fontWeight: "bold", marginTop: "50px" }}>30:34</div>
          <div style={{ fontSize: "25px", fontWeight: "normal", marginTop: "5px" }}>Longest Wait Time Recorded</div>
        </div>

        <div
          style={{
            margin: "20px",
            width: "350px",
            height: "350px",
            backgroundColor: "#35408e",
            color: "white",
            textAlign: "center",
            padding: "20px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            marginTop: "360px",
            right: "-140px",
            border: "2px solid black",
          }}
        >
          <img
            src={icon2}
            alt="Shortest Wait Icon"
            style={{
              position: "absolute",
              top: "-60px",
              left: "90%",
              transform: "translateX(-50%)",
            }}
          />
          <div style={{ fontSize: "70px", fontWeight: "bold", marginTop: "50px" }}>12:08</div>
          <div style={{ fontSize: "25px", fontWeight: "normal", marginTop: "5px" }}>Shortest Wait Time Recorded</div>
        </div>

        <div
          style={{
            margin: "20px",
            width: "350px",
            height: "350px",
            backgroundColor: "#35408e",
            color: "white",
            textAlign: "center",
            padding: "20px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            marginTop: "360px",
            right: "-140px",
            border: "2px solid black",
          }}
        >
          <img
            src={icon3}
            alt="Avg Clients Served Icon"
            style={{
              position: "absolute",
              top: "-60px",
              left: "90%",
              transform: "translateX(-50%)",
            }}
          />
          <div style={{ fontSize: "70px", fontWeight: "bold", marginTop: "50px" }}>22</div>
          <div style={{ fontSize: "25px", fontWeight: "normal", marginTop: "5px" }}>Avg. Number of Clients Served per Hour</div>
        </div>
      </div>
    </div>
  );
};

export default QueuePerformance;
