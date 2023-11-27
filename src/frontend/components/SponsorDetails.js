import React, { useState } from "react";
import "../css/SponsorDetails.css";
import axios from "axios";

function SponsorDetails(props) {
  const { userEmail, meetingDetails } = props;
  const {
    role,
    jobId,
    description,
    requirements,
    prefered,
    timeslot1,
    recruiter1,
  } = props.sponsor;
  const requirementItems = requirements
    .split(".")
    .filter((item) => item.trim() !== "");
  const preferedItems = prefered
    .split(".")
    .filter((item) => item.trim() !== "");
  const [showMeetingInfo, setShowMeetingInfo] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const handleAppointmentClick = () => {
    setShowPopup(true);

    const emailData = {
      userEmail: "skr.ramacharla@gmail.com", // Replace with the actual user's email
      meetingDetails: "Tue, Nov 24th, 2023 | 9:00 AM - 10:00 AM EDT", // Replace with actual meeting details
    };

    // Axios POST request to send the email
    axios
      .post("http://localhost:4000/send-email", emailData)
      .then((response) => {
        console.log("Email sent successfully:", response.data);
        // Handle success - maybe update the state to show a success message
      })
      .catch((error) => {
        console.error("Error in sending email:", error);
        // Handle error - maybe update the state to show an error message
      });

    setTimeout(() => {
      setShowPopup(false);
    }, 4000);
  };

  return (
    <div className="sponsorDetails">
      <h1>{role}</h1>
      <p>
        <strong>About Us</strong>
        <br></br>
        <br></br>
        {description}
      </p>
      <strong>Key Requirements</strong>
      <ul>
        {requirementItems.map((item, index) => (
          <li key={index}>{item.trim()}</li>
        ))}
      </ul>
      <strong>Prefered Qualifications</strong>
      <ul>
        {preferedItems.map((item, index) => (
          <li key={index}>{item.trim()}</li>
        ))}
      </ul>

      <p>
        <strong>Job Id: </strong>
        {jobId}
      </p>

      <div
        className="meetingToggle"
        onClick={() => setShowMeetingInfo(!showMeetingInfo)}
      >
        <span className="clockIcon">🕐</span>
        <span>Ready to meet with a recruiter?</span>
        <span className="dropdownArrow">{showMeetingInfo ? "▲" : "▼"}</span>
      </div>
      {showMeetingInfo && (
        <div className="meetingInfo">
          <div className="leftInfo">
            <div className="dateInfo">
              <h3>Schedule Time</h3>
              <h4>{timeslot1}</h4>
            </div>
            <div className="interactionType">
              <h3>Interaction Type</h3>
              <h4>Zoom Meeting</h4>
            </div>
          </div>
          <div className="rightInfo">
            <div className="recruiterInfo">
              <h3>Assigned Recruiter</h3>
              <h4>{recruiter1}</h4>
            </div>
            <div className="availableSlots">
              <button onClick={handleAppointmentClick}>
                Make an Appointment
              </button>
              {showPopup && (
                <span className="popup">
                  ✔ Your meeting is scheduled. Please check your inbox for more
                  details.
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SponsorDetails;
