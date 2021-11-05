import "../App.css";
import BookingWidget from "./BookingWidget";
import React, { useState } from "react";
import ReferralWidget from "./ReferralWidget";
import TrackingWidget from "./TrackingWidget";

function App() {
  const [showPixel, setShowPixel] = useState(false);
  const [showReferral, setShowReferral] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div>
      <button>Muntra Pixel</button>
      <button>Bokningswidget</button>
      <button>Remisswidget</button>
    </div>
  );
}

export default App;
