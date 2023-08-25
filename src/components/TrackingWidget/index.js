import React, { useEffect } from "react";

function TrackingWidget() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://muntra-dev.github.io/index.js";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <div className="auto-margin page-body">
      <div className="flex-column">
        <h1 className="mainHeader">Muntra Pixel Docs</h1>
        <h1>Information</h1>
        <p>
          The Muntra pixel is a piece of code for the clinic's website that
          allows you to measure, optimize and create audiences for your patient
          acquisition.
        </p>
        <h1 style={{ marginBottom: "0px" }}>Tracking Widget</h1>

        <h2>Deployment to website</h2>
        <ol>
          <li className="has-line-data" data-line-start={8} data-line-end={9}>
            Get your Muntra Pixel ID from Muntra.
          </li>
          <li className="has-line-data" data-line-start={8} data-line-end={9}>
            Add the div below to a place in the code where it will be present
            within the <code>&lt;body&gt;</code> no matter which page you´re on
          </li>
          <li className="has-line-data" data-line-start={8} data-line-end={9}>
            Change the <code>pixel_id</code> attribute to the Muntra Pixel ID
            received by Muntra
          </li>
          <li className="has-line-data" data-line-start={9} data-line-end={10}>
            Add the script below after the div added in step 1
          </li>
          <h3 style={{ marginTop: "50px" }}>
            Add this div within the <code>&lt;body&gt;</code> tag at a place
            where it will be present on all pages
          </h3>
          <pre>
            <code>
              &lt;div class="muntra-pixel" pixel_id="THIS_IS_AN_EXAMPLE"
              &gt;&lt;/div&gt;
            </code>
          </pre>
          <h3>
            Important! Import the widget code right before the closing body tag
            (&#x3C;/body&#x3E;)
          </h3>
          <pre>
            <code
              className="has-line-data"
              data-line-start="32"
              data-line-end="34"
            >
              &#x3C;script type=&#x22;text/javascript&#x22;
              src="https://muntra-dev.github.io/pixel/index.js"&gt;&lt;/script&gt;
            </code>
          </pre>
        </ol>
        <h2>Troubleshooting</h2>
        <h3>Checklist</h3>
        <ol>
          <li>
            Have you entered the correct <code>pixel_id</code> in place of{" "}
            <b>THIS_IS_AN_EXAMPLE</b> from the example above?
          </li>
          <li>
            Have you placed the script after the div from the examples above?
          </li>
          <li>
            Is the div placed inside the body of the site in a place which makes
            it present across the whole site?
          </li>
          <li>
            Are you trying to test the widget in a test enviroment that has a
            different domain name than the live website? Then it wont work
            unless that domain is also whitelisted
          </li>
        </ol>
        <h3>Checking whitelisting</h3>
        <ol>
          <li>Open the website which you've placed the pixel on</li>
          <li>Right click on the website</li>
          <p>
            (Next step varies for different browsers, google "How to open
            inspector on BROWSER_NAME")
          </p>
          <li>
            Select <b>Inspect</b> or similar option
          </li>
          <li>
            Select the <b>Console</b> tab
          </li>
          <li>
            Look for red errors containing text regarding <b>CORS ERROR</b> and
            find the link which follows the word <b>origin</b>
          </li>
          <li>
            Copy the link and send it to muntra personnel, also include which
            widget you need it whitelisted for
          </li>
        </ol>
        <h3>Still can't find the problem or any solution?</h3>
        <p>
          Check out the blue help button in the lower right corner of this site
          for additional help
        </p>
      </div>
    </div>
  );
}

export default TrackingWidget;
