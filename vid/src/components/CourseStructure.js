import React, { useState } from "react";
import { Link } from "react-router-dom";

function Course(props) {
  const courseName = props.match.params.coursename;
  const courses = {
    ListA: [
      { title: "Big Buck Bunny", vid: "BigBuckBunny" },
      { title: "Elephants Dream", vid: "ElephantsDream" },
      { title: "For Bigger Blazes", vid: "ForBiggerBlazes" },
      {
        title: "Subaru Outback On Street And Dirt",
        vid: "SubaruOutbackOnStreetAndDirt",
      },
      { title: "Tears Of Steel", vid: "TearsOfSteel" },
    ],
    ListB: [
      { title: "For Bigger Escapes", vid: "ForBiggerEscapes" },
      { title: "For Bigger Fun", vid: "ForBiggerFun" },
      { title: "For Bigger Joy rides", vid: "ForBiggerJoyrides" },
      { title: "Volkswagen GTI Review", vid: "VolkswagenGTIReview" },
      {
        title: "What Car Can You Get For A Grand",
        vid: "WhatCarCanYouGetForAGrand",
      },
    ],
  };
  const [vid, uid] = useState(courses[courseName][0].vid);
  const [title, utit] = useState(courses[courseName][0].title);

  const renderVideo = () => {
    return (
      <div class="video-container">
        <iframe
          width="853"
          height="480"
          src={
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/" +
            vid +
            ".mp4"
          }
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    );
  };

  return (
    <div>
      <h1>{title}</h1>
      {renderVideo()}
      <div class="collection">
        {courses[courseName].map((item) => {
          return (
            <a
              href="#!"
              className="collection-item"
              onClick={() => {
                uid(item.vid);
                utit(item.title);
              }}
            >
              {item.title}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Course;
