import BookingWidget from "./BookingWidget";
import BookingWidgetSVG from "../assets/svg/BookingWidgetSVG";
import React, { useState } from "react";
import ReferralWidget from "./ReferralWidget";
import ReferralWidgetSVG from "../assets/svg/ReferralWidgetSVG";
import TrackingWidget from "./TrackingWidget";
import TrackingWidgetSVG from "../assets/svg/TrackingWidgetSVG";

function App() {
  const [showPixel, setShowPixel] = useState(false);
  const [showReferral, setShowReferral] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div style={{ height: "100vh" }}>
      {!showBooking && !showPixel && !showReferral && (
        <div className='flex justAndAlignCenter muntraBackground'>
          <div className='flexCol justAndAlignCenter'>
            <TrackingWidgetSVG classProp='SvgSize' />
            <button className='SelectButton' onClick={() => setShowPixel(true)}>
              Muntra Pixel
            </button>
          </div>
          <div className='flexCol justAndAlignCenter'>
            <BookingWidgetSVG classProp='SvgSize' />
            <button
              className='SelectButton'
              onClick={() => setShowBooking(true)}
            >
              Bokningswidget
            </button>
          </div>
          <div className='flexCol justAndAlignCenter'>
            <ReferralWidgetSVG classProp='SvgSize' />
            <button
              className='SelectButton'
              onClick={() => setShowReferral(true)}
            >
              Remisswidget
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
