import CloseIcon from "../assets/svg/CloseIconSVG";
import React from "react";

const HelpMenu = ({ isOpen, handleClick }) => {
  return (
    <>
      <div
        className={`HelpMenuContainer${isOpen ? " HelpMenuContainerOpen" : ""}`}
        isOpen={isOpen}
      >
        <div style={{ margin: "5px 28px" }}>
          {" "}
          <div
            className='row'
            style={{
              height: "50px",
              justifyContent: "flex-end",
              position: "relative",
            }}
          >
            {" "}
            <div className='UploadIconContainer' onClick={handleClick}>
              <div className='Uploadlabel'>
                <div style={{ margin: "auto", width: "13px" }}>
                  <CloseIcon />
                </div>
              </div>
              <div className='HintToBottom'>Add</div>
            </div>{" "}
          </div>{" "}
        </div>
        <div style={{ margin: "28px" }}>
          <div className='Contacts'>
            <div style={{ margin: "28px" }}>
              <h3 className='HeadingStyle'> Educational </h3>
              <h4 className='HeadingStyle'>
                Need help understanding HTML and CSS?
              </h4>
              <ul>
                <li>
                  <a
                    className='Link noTextDecoration'
                    href='https://www.freecodecamp.org/learn/responsive-web-design/'
                  >
                    FreeCodeCamp
                  </a>
                </li>
                <li>
                  <a
                    className='Link noTextDecoration'
                    href='https://www.w3schools.com/css/default.asp'
                  >
                    W3 Schools
                  </a>
                </li>
              </ul>
              <h3 className='HeadingStyle'> Support </h3>
              <ul>
                <li>
                  {" "}
                  <a
                    className='Link noTextDecoration'
                    href='mailto:support@muntra.se'
                  >
                    {" "}
                    support@muntra.se{" "}
                  </a>{" "}
                </li>
              </ul>
              <h4 className='HeadingStyle'> Screenshare with AnyDesk </h4>
              <ul>
                <li>
                  {" "}
                  <a
                    className='Link noTextDecoration'
                    href='https://download.anydesk.com/AnyDesk.exe'
                  >
                    {" "}
                    Windows{" "}
                  </a>{" "}
                  |{" "}
                  <a
                    className='Link noTextDecoration'
                    href='https://download.anydesk.com/anydesk.dmg'
                  >
                    {" "}
                    Mac{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          style={{
            color: "grey",
            fontSize: "12px",
            lineHeight: "1.5",
            margin: "28px",
            paddingTop: "28px",
            textAlign: "center",
          }}
        >
          {" "}
          Muntra is an approved medical device. All data transferred is
          encrypted and handled in line with the Swedish Patient Data Act.{" "}
        </div>
      </div>
    </>
  );
};

export default HelpMenu;
