import BookingWidget from "./BookingWidget";
import BookingWidgetSVG from "../assets/svg/BookingWidgetSVG";
import HelpMenu from "./HelpMenu";
import LeftArrowSVG from "../assets/svg/LeftArrowSVG";
import React, { useState } from "react";
import ReferralWidget from "./ReferralWidget";
import ReferralWidgetSVG from "../assets/svg/ReferralWidgetSVG";
import TrackingWidget from "./TrackingWidget";
import TrackingWidgetSVG from "../assets/svg/TrackingWidgetSVG";
import muntraLogo from "../assets/muntraLogo.png";

function App() {
  const [isHelpMenuOpen, setIsHelpMenuOpen] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [showPixel, setShowPixel] = useState(false);
  const [showReferral, setShowReferral] = useState(false);

  const switchHelpMenu = () => setIsHelpMenuOpen(!isHelpMenuOpen);

  const isAtPage = showBooking || showReferral || showPixel;

  function resetPageStates() {
    setShowBooking(false);
    setShowPixel(false);
    setShowReferral(false);
  }

  return (
    <div style={{ height: "100vh" }}>
      {isAtPage && (
        <div
          role="button"
          onClick={resetPageStates}
          className="backButtonContainer"
        >
          <LeftArrowSVG classProp="backButton" />
        </div>
      )}
      {!showBooking && !showPixel && !showReferral && (
        <>
          <a href="https://about.muntra.se">
            <img alt="Muntra Logo" className="logo" src={muntraLogo} />
          </a>
          <div className="flex spaceEvenAndAlignCenter muntraBackground mobileFlexCol">
            <div className="flexCol justAndAlignCenter">
              <TrackingWidgetSVG onClick={setShowPixel} classProp="SvgSize" />
              <button
                className="SelectButton"
                onClick={() => setShowPixel(true)}
              >
                Muntra Pixel
              </button>
            </div>
            <div className="flexCol justAndAlignCenter">
              <BookingWidgetSVG classProp="SvgSize" onClick={setShowBooking} />
              <button
                className="SelectButton"
                onClick={() => setShowBooking(true)}
              >
                Booking Widget
              </button>
            </div>
            <div className="flexCol justAndAlignCenter">
              <ReferralWidgetSVG
                classProp="SvgSize"
                onClick={setShowReferral}
              />
              <button
                className="SelectButton"
                onClick={() => setShowReferral(true)}
              >
                Referral Widget
              </button>
            </div>
          </div>
        </>
      )}
      <div className="HelpButtonContainer">
        {" "}
        <button className="HelpButton" onClick={switchHelpMenu}>
          {" "}
          Help{" "}
        </button>{" "}
      </div>
      <HelpMenu handleClick={switchHelpMenu} isOpen={isHelpMenuOpen} />

      {showBooking && <BookingWidget />}
      {showPixel && <TrackingWidget />}
      {showReferral && <ReferralWidget />}
    </div>
  );
}

export default App;
