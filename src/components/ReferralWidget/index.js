import React, { useEffect } from "react";

function ReferralWidget() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://muntra-dev.github.io/referral-page/index.js";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <div className='auto-margin page-body'>
      <div className='flex-column'>
        <h1 className='mainHeader'>Muntra Referral Widget Docs</h1>
        <h1>Information</h1>
        <b>
          IMPORTANT: MUNTRA PERSONNEL MUST WHITELIST YOUR DOMAIN FOR THE WIDGET
          TO WORK
        </b>
        <p>
          The Referral Widget integrates the clinic's website directly into the
          referral handling in Muntra. This enables caregivers to send digital
          referrals to the clinic, from the clinic's own website.
        </p>
        <h2>Deployment to website</h2>
        <ol>
          <li className='has-line-data' data-line-start={8} data-line-end={9}>
            Add the widget's div element where it should be visible on the page
          </li>
          <li className='has-line-data' data-line-start={9} data-line-end={10}>
            Add the script below to right before the closing body tag
          </li>
        </ol>

        <div className='flex-column' style={{ marginBottom: "25px" }}>
          <h3 style={{ marginTop: "50px" }}>Widget placement example</h3>

          <pre>
            <code
              className='has-line-data'
              data-line-start={12}
              data-line-end={17}
            >
              &#x3C;div class=&#x22;muntra-referral-widget&#x22;
              muntra_clinic_id=&#x22;YOUR_CLINIC_ID&#x22;&#x3E;&#x3C;/div&#x3E;
            </code>
          </pre>
          <h3>BEWARE! Live example for GHP Stockholm Clinic</h3>
          <div
            className='muntra-referral-widget'
            disable_autofocus='yes'
            hide_help='yes'
            muntra_clinic_id='51'
          ></div>
        </div>
        <h3>
          Import the widget code with the script right before the closing body
          tag (&#x3C;/body&#x3E;)
        </h3>
        <pre>
          <code
            className='has-line-data'
            data-line-start={12}
            data-line-end={17}
          >
            &#x3C;script type=&#x22;text/javascript&#x22;
            src=&#x22;https://muntra-dev.github.io/referral-page/index.js&#x22;&#x3E;&#x3C;/script&#x3E;
          </code>
        </pre>
      </div>

      <>
        {" "}
        <h1 className='code-line' data-line-start={0} data-line-end={1}>
          Placing a widget on a page
        </h1>
        <p className='has-line-data' data-line-start={2} data-line-end={3}>
          First, place the &lt;div&gt; tag in the site markup, with the
          following attributes:
        </p>
        <p className='has-line-data' data-line-start={4} data-line-end={5}>
          Required attributes:
        </p>
        <ul>
          <li className='has-line-data' data-line-start={6} data-line-end={7}>
            <code>class</code>: “muntra-referral-widget”,
          </li>
          <li className='has-line-data' data-line-start={7} data-line-end={9}>
            <code>muntra_clinic_id</code>: “clinic_id”.
          </li>
        </ul>
        <p className='has-line-data' data-line-start={4} data-line-end={5}>
          Optional attributes:
        </p>
        <ul>
          <li className='has-line-data' data-line-start={6} data-line-end={7}>
            <code>hide_help</code>: “yes” (Hides the muntra help button if used)
          </li>
          <li className='has-line-data' data-line-start={6} data-line-end={7}>
            <code>disable_autofocus</code>: “yes” (Disables autofocus for the
            SSN input/Stops the widget from auto scrolling into view when
            loaded)
          </li>
        </ul>
        <p className='has-line-data' data-line-start={9} data-line-end={10}>
          Example:
        </p>
        <pre>
          <code
            className='has-line-data'
            data-line-start={12}
            data-line-end={17}
          >
            {"  "}&lt;div{"\n"}
            {"   "}class="muntra-referral-widget"{"\n"}
            {"   "}muntra_clinic_id="YOUR_CLINIC_ID"{"\n"}
            {"  "}/&gt;{"\n"}
          </code>
        </pre>
        <p className='has-line-data' data-line-start={18} data-line-end={19}>
          Secondly, place a tag:
        </p>
        <pre>
          <code
            className='has-line-data'
            data-line-start={21}
            data-line-end={23}
          >
            &lt;script type = "text/javascript" src =
            "https://muntra-dev.github.io/referral-page/index.js"&gt;
            &lt;/script&gt;
            {"\n"}
          </code>
        </pre>
        <p className='has-line-data' data-line-start={23} data-line-end={24}>
          At the end of the body, to connect the widget to the page.
        </p>
        <p className='has-line-data' data-line-start={25} data-line-end={26}>
          Expample of connecting widget to a page:
        </p>
        <pre>
          <code
            className='has-line-data'
            data-line-start={28}
            data-line-end={36}
          >
            {" "}
            &lt;body&gt;{"\n"}
            {"   "}&lt;div{"\n"}
            {"     "}class="muntra-referral-widget"{"\n"}
            {"     "}muntra_clinic_id="1"{"\n"}
            {"   "}&gt;&lt;/div&gt;{"\n"}
            {"   "}&lt;script type="text/javascript"
            src="https://muntra-dev.github.io/referral-page/index.js"&gt;&lt;/script&gt;
            {"\n"} &lt;/body&gt;{"\n"}
          </code>
        </pre>
        <h1 className='code-line' data-line-start={37} data-line-end={38}>
          Styling a widget window
        </h1>
        <p className='has-line-data' data-line-start={39} data-line-end={40}>
          Use muntra-referral-widget styles to style the widget window:
        </p>
        <pre>
          <code
            className='has-line-data'
            data-line-start={41}
            data-line-end={46}
          >
            .muntra-referral-widget {"{"}
            {"\n"}
            {"  "}height: 1000px;{"\n"}
            {"  "}margin: 10px auto 0;{"\n"}
            {"}"}
            {"\n"}
          </code>
        </pre>
        <h1>Troubleshooting</h1>
        <h2>Checklist</h2>
        <ol>
          <li>
            Have you entered the correct <code>muntra_clinic_id</code> in place
            of <b>YOUR_CLINIC_ID</b> from the example above?
          </li>
          <li>
            Has the widget been whitelisted? See{" "}
            <a href='#checkingWhitelisting'>Checking whitelisting</a> to see how
            to find the exact format for your domain
          </li>
          <li>
            Have you placed the script after the div from the examples above?
          </li>
          <li>
            Is the div placed inside an iFrame? If yes then it won't work. See{" "}
            <a href='#checkingForIframe'>Checking for iFrame</a> to see how to
            check this
          </li>
          <li>
            Are you trying to test the widget in a test enviroment that has a
            different domain name than the live website? Then it wont work
            unless that domain is also whitelisted
          </li>
        </ol>
        <h2 id='checkingWhitelisting'>Checking whitelisting</h2>
        <ol>
          <li>Open the website which you've placed the widget on</li>
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
        <h2 id='checkingForIframe'>Checking for iframe</h2>
        <ol>
          <li>Open the website which you've placed the widget on</li>
          <li>Right click on the website</li>
          <p>
            (Next step varies for different browsers, google "How to open
            inspector on BROWSER_NAME")
          </p>
          <li>
            Select <b>Inspect</b> or similar option
          </li>
          <li>
            Select the <b>Elements</b> tab
          </li>
          <li>
            Click <b>CTRL</b> and <b>F</b> at the same time on your keyboard
          </li>
          <li>
            Write <b>muntra</b> in the search field
          </li>
          <li>
            Press the <b>ENTER</b> button on your keyboard until you find the
            muntra widget div
          </li>
          <li>
            Check if the widget is enclosed by tags that looks something like
            this <code>{`<iframe><div class="muntra-widget"...</iframe>`}</code>{" "}
            ("..." is a placeholder for the rest of the widget HTML code)
          </li>
          <li>
            If yes, then the iframe needs to be removed and replaced by i.e. div
            tags
          </li>
        </ol>
        <h2>Still can't find the problem or any solution?</h2>
        <p>
          Check out the blue help button in the lower right corner of this site
          for additional help
        </p>
      </>
    </div>
  );
}

export default ReferralWidget;
