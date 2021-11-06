import BookingWidget from "./BookingWidget";
import BookingWidgetSVG from "../assets/svg/BookingWidgetSVG";
import LeftArrowSVG from "../assets/svg/LeftArrowSVG";
import React, { useState } from "react";
import ReferralWidget from "./ReferralWidget";
import ReferralWidgetSVG from "../assets/svg/ReferralWidgetSVG";
import TrackingWidget from "./TrackingWidget";
import TrackingWidgetSVG from "../assets/svg/TrackingWidgetSVG";

function App() {
  const [showPixel, setShowPixel] = useState(false);
  const [showReferral, setShowReferral] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

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
          role='button'
          onClick={resetPageStates}
          className='backButtonContainer'
        >
          <LeftArrowSVG classProp='backButton' />
        </div>
      )}
      {!showBooking && !showPixel && !showReferral && (
        <div className='flex justAndAlignCenter muntraBackground'>
          <div className='flexCol justAndAlignCenter'>
            <TrackingWidgetSVG onClick={setShowPixel} classProp='SvgSize' />
            <button className='SelectButton' onClick={() => setShowPixel(true)}>
              Muntra Pixel
            </button>
          </div>
          <div className='flexCol justAndAlignCenter'>
            <BookingWidgetSVG classProp='SvgSize' onClick={setShowBooking} />
            <button
              className='SelectButton'
              onClick={() => setShowBooking(true)}
            >
              Booking Widget
            </button>
          </div>
          <div className='flexCol justAndAlignCenter'>
            <ReferralWidgetSVG classProp='SvgSize' onClick={setShowReferral} />
            <button
              className='SelectButton'
              onClick={() => setShowReferral(true)}
            >
              Referral Widget
            </button>
          </div>
        </div>
      )}
      {showBooking && <BookingWidget />}
      {showPixel && <TrackingWidget />}
      {showReferral && <ReferralWidget />}
    </div>
  );
}

export default App;
