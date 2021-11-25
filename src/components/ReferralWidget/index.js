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
      </>
    </div>
  );
}

export default ReferralWidget;
