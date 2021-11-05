import React, { useEffect } from "react";

function ReferralWidget() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://muntra-dev.github.io/referral-page/index.js";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <div class='auto-margin page-body'>
      <div class='flex-column'>
        <h2>
          Import the widget right before the closing body tag
          (&#x3C;/body&#x3E;)
        </h2>
        <div class='code'>
          &#x3C;script type=&#x22;text/javascript&#x22;
          src=&#x22;https://muntra-dev.github.io/referral-page/index.js&#x22;&#x3E;&#x3C;/script&#x3E;
        </div>
      </div>
      <div class='flex-column'>
        <h2>Widget placement example</h2>
        <div class='code'>
          &#x3C;div class=&#x22;muntra-referral-widget&#x22;
          muntra_clinic_id=&#x22;1&#x22;&#x3E;&#x3C;/div&#x3E;
        </div>
        <div class='muntra-referral-widget' muntra_clinic_id='1'></div>
      </div>
    </div>
  );
}

export default ReferralWidget;
