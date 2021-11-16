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
              <h3 className='HeadingStyle'> Support </h3>
              <ul>
                <li>
                  {" "}
                  <a className='Link noTextDecoration' href='tel:+46840906890'>
                    {" "}
                    08-40 90 68 90{" "}
                  </a>{" "}
                  <span style={{ color: "#808080", fontSize: "12px" }}>
                    {" "}
                    (8-12 / 13-17 weekdays){" "}
                  </span>
                </li>
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
          Muntra is an approved medical device product. All data transfered is
          encrypted and is treated in regard to Swedish data and patient
          security laws.{" "}
        </div>
      </div>
    </>
  );
};

export default HelpMenu;
