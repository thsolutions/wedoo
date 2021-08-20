import React, { useState } from "react";

import { NavLink } from "react-router-dom";
const MobileNav = () => {
  return (
    <div className="mob-nav">
      <NavLink exact activeClassName="active" to="/dashboard">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27.898"
          height="30.833"
          viewBox="0 0 27.898 20.833"
        >
          <g id="Home" transform="translate(-120.56 -2.447)">
            <circle
              id="Ellipse_7"
              data-name="Ellipse 7"
              cx="8"
              cy="8"
              r="8"
              transform="translate(120.56 5.459)"
              fill="#2a966e"
              opacity="0.5"
            />
            <g
              id="Iconly_Bold_Home"
              data-name="Iconly/Bold/Home"
              transform="translate(126.063 0.363)"
            >
              <g
                id="Home-2"
                data-name="Home"
                transform="translate(2.604 2.083)"
              >
                <path
                  id="Home-3"
                  data-name="Home"
                  d="M6.911,19.556V16.37A1.478,1.478,0,0,1,8.394,14.9h2.994a1.488,1.488,0,0,1,1.049.431,1.467,1.467,0,0,1,.434,1.041v3.185a1.264,1.264,0,0,0,.371.9,1.283,1.283,0,0,0,.907.375h2.043a3.6,3.6,0,0,0,2.545-1.041,3.552,3.552,0,0,0,1.055-2.524V8.195a2.576,2.576,0,0,0-.933-1.981L11.91.7A3.226,3.226,0,0,0,7.8.778L1.007,6.213A2.577,2.577,0,0,0,0,8.195v9.065a3.587,3.587,0,0,0,3.6,3.574h2a1.283,1.283,0,0,0,1.287-1.268Z"
                  transform="translate(0 0)"
                  fill="#99d5be"
                />
              </g>
            </g>
          </g>
        </svg>
      </NavLink>
      <NavLink exact activeClassName="active" to="/addpeople">
        <svg
          id="Iconly_Bold_Activity"
          data-name="Iconly/Bold/Activity"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g id="Activity" transform="translate(2 2)">
            <path
              id="Activity-2"
              data-name="Activity"
              d="M5.4,20a5.469,5.469,0,0,1-3.976-1.428A5.474,5.474,0,0,1,0,14.6V7.2A5.5,5.5,0,0,1,1.425,3.215,5.455,5.455,0,0,1,5.4,1.78H13.45a4.858,4.858,0,0,0-.059.75A4.069,4.069,0,0,0,17.45,6.6a4.668,4.668,0,0,0,.74-.068V14.6a5.47,5.47,0,0,1-1.425,3.973A5.466,5.466,0,0,1,12.79,20ZM7.19,8.96a.781.781,0,0,0-.5.3L3.731,13.11l-.061.09a.747.747,0,0,0,.21.95.832.832,0,0,0,.46.15h.026A.715.715,0,0,0,4.93,14l2.51-3.231,2.849,2.141.09.058a.749.749,0,0,0,.95-.21l2.89-3.729-.04.02A.75.75,0,0,0,14.26,8.3a.736.736,0,0,0-.608-.439c-.028,0-.056,0-.084,0a.768.768,0,0,0-.617.314L10.531,11.3,7.76,9.121a.783.783,0,0,0-.481-.165C7.25,8.956,7.22,8.958,7.19,8.96Zm7.99-6.55a2.41,2.41,0,1,1,2.41,2.41A2.411,2.411,0,0,1,15.18,2.41Z"
              transform="translate(0 0)"
              fill="#99d5be"
            />
          </g>
        </svg>
      </NavLink>

      <NavLink exact activeClassName="active" to="/projectadd">
        <svg
          id="Iconly_Bold_Plus"
          data-name="Iconly/Bold/Plus"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
        >
          <g id="Plus" transform="translate(2.174 2.174)">
            <path
              id="Plus-2"
              data-name="Plus"
              d="M15.4,21H5.6a5.616,5.616,0,0,1-4.141-1.463A5.623,5.623,0,0,1,0,15.4V5.6A5.626,5.626,0,0,1,1.455,1.455,5.626,5.626,0,0,1,5.6,0h9.8a5.641,5.641,0,0,1,4.142,1.455A5.612,5.612,0,0,1,21,5.6V15.4C21,18.96,18.96,21,15.4,21ZM6.646,9.618a.86.86,0,0,0-.871.871.88.88,0,0,0,.871.882H9.618v2.972a.871.871,0,0,0,1.743,0V11.371h2.982a.877.877,0,0,0,0-1.753H11.361V6.657a.871.871,0,1,0-1.743,0V9.618Z"
              transform="translate(-0.174 -0.174)"
              fill="#99d5be"
            />
          </g>
        </svg>
      </NavLink>
      <NavLink exact activeClassName="active" to="/notification">
        <svg
          id="Iconly_Bold_Notification"
          data-name="Iconly/Bold/Notification"
          xmlns="http://www.w3.org/2000/svg"
          width="17.708"
          height="20.833"
          viewBox="0 0 17.708 20.833"
        >
          <g id="Notification" transform="translate(0 0)">
            <path
              id="Notification-2"
              data-name="Notification"
              d="M8.316,20.8a3.77,3.77,0,0,1-1.785-.763,1.616,1.616,0,0,1-.725-1.222c0-.525.481-.765.926-.868a27.036,27.036,0,0,1,4.215,0c.445.1.926.343.926.868a1.618,1.618,0,0,1-.724,1.222,3.787,3.787,0,0,1-1.784.762,4.162,4.162,0,0,1-.533.035A3.82,3.82,0,0,1,8.316,20.8Zm-4.4-4.4A4.724,4.724,0,0,1,.9,14.932,3.765,3.765,0,0,1,0,12.454a3.508,3.508,0,0,1,.761-2.407A3.955,3.955,0,0,0,1.868,7.079V6.636A5.859,5.859,0,0,1,3.205,2.617,7.368,7.368,0,0,1,8.808,0H8.9A7.335,7.335,0,0,1,14.6,2.734a5.777,5.777,0,0,1,1.245,3.9v.443a4.051,4.051,0,0,0,1.106,2.968,3.5,3.5,0,0,1,.761,2.407,3.764,3.764,0,0,1-.9,2.478A4.728,4.728,0,0,1,13.789,16.4c-1.637.139-3.275.257-4.934.257A43.425,43.425,0,0,1,3.921,16.4Z"
              fill="#99d5be"
            />
          </g>
        </svg>
      </NavLink>
      <NavLink exact activeClassName="active" to="/profile">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="20"
          viewBox="0 0 16 20"
        >
          <g
            id="Iconly_Bold_Profile"
            data-name="Iconly/Bold/Profile"
            transform="translate(-4 -2)"
          >
            <g id="Profile" transform="translate(4 2)">
              <path
                id="Profile-2"
                data-name="Profile"
                d="M0,16.575c0-2.722,3.685-3.4,8-3.4,4.339,0,8,.7,8,3.425S12.315,20,8,20C3.662,20,0,19.3,0,16.575ZM2.706,5.291A5.294,5.294,0,1,1,8,10.583,5.274,5.274,0,0,1,2.706,5.291Z"
                fill="#99d5be"
              />
            </g>
          </g>
        </svg>
      </NavLink>
    </div>
  );
};

export default MobileNav;
