import "./index.css";
import React, { useEffect } from "react";

function BookingWidget() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://muntra-dev.github.io/index.js";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div className='auto-margin page-body'>
        <div className='flex-column'>
          <h1 className='mainHeader'>Muntra Booking Widget Docs</h1>
          <h1>Information</h1>
          <b>
            IMPORTANT: MUNTRA PERSONNEL MUST WHITELIST YOUR DOMAIN FOR THE
            WIDGET TO WORK
          </b>
          <p>
            The Booking Widget integrates the clinic's website directly into the
            calendar in Muntra. This enables patients to book times or send
            booking requests from the clinic's own website directly into the
            clinic's Muntra calendar.
          </p>
          <h2>Deployment to website</h2>
          <h3>BEWARE! All examples are LIVE examples for Svea Tandklinik</h3>
          <ol>
            <li className='has-line-data' data-line-start={8} data-line-end={9}>
              Add the widget's div element where it should be visible on the
              page. You can find examples their corresponding div:s down below
            </li>
            <li
              className='has-line-data'
              data-line-start={9}
              data-line-end={10}
            >
              Add the script below to right before the closing body tag
            </li>
          </ol>
        </div>
        <div className='flex-column'>
          <h3 style={{ marginTop: "50px" }}>All caregivers at clinic</h3>
          <pre>
            <code
              className='has-line-data'
              data-line-start='32'
              data-line-end='34'
            >
              &#x3C;div class=&#x22;muntra-widget primary&#x22;
              key=&#x22;0&#x22; muntra_clinic_id=&#x22;YOUR_CLINIC_ID&#x22;
              muntra_referral_source=&#x22;YourClinicDomain.com&#x22;&#x3E;&#x3C;/div&#x3E;
            </code>
          </pre>
          <div
            className='muntra-widget primary'
            key='0'
            muntra_clinic_id='16'
            muntra_referral_source='sveatandklinik.se'
          ></div>
        </div>
        <div className='flex-column'>
          <h3>Specific caregiver</h3>
          <pre>
            <code
              className='has-line-data'
              data-line-start='32'
              data-line-end='34'
            >
              &#x3C;div class=&#x22;muntra-widget secondary&#x22;
              key=&#x22;1&#x22; muntra_caregiver_id=&#x22;2852&#x22;
              muntra_clinic_id=&#x22;YOUR_CLINIC_ID&#x22;
              muntra_referral_source=&#x22;YourClinicDomain.com&#x22;
              muntra_button_text=&#x22;Boka specifik
              behandlare&#x22;&#x3E;&#x3C;/div&#x3E;
            </code>
          </pre>
          <div
            className='muntra-widget secondary'
            key='1'
            muntra_caregiver_id='2852'
            muntra_clinic_id='16'
            muntra_referral_source='sveatandklinik.se'
            muntra_button_text='Boka specifik behandlare'
          ></div>
        </div>
        <div className='flex-column'>
          <h3>Specific role</h3>
          <pre>
            <code
              className='has-line-data'
              data-line-start='32'
              data-line-end='34'
            >
              &#x3C;div class=&#x22;muntra-widget secondary&#x22;
              key=&#x22;2&#x22; muntra_role_id=&#x22;4&#x22;
              muntra_clinic_id=&#x22;YOUR_CLINIC_ID&#x22;
              muntra_referral_source=&#x22;YourClinicDomain.com&#x22;
              muntra_button_text=&#x22;Boka
              tandhygienist&#x22;&#x3E;&#x3C;/div&#x3E;
            </code>
          </pre>
          <div
            className='muntra-widget'
            key='2'
            muntra_role_id='4'
            muntra_clinic_id='16'
            muntra_referral_source='sveatandklinik.se'
            muntra_button_text='Boka tandhygienist'
            style={{ marginBottom: "1em" }}
          ></div>
          <pre>
            <code
              className='has-line-data'
              data-line-start='32'
              data-line-end='34'
            >
              &#x3C;div class=&#x22;muntra-widget secondary&#x22;
              key=&#x22;3&#x22; muntra_role_id=&#x22;3&#x22;
              muntra_clinic_id=&#x22;YOUR_CLINIC_ID&#x22;
              muntra_referral_source=&#x22;YourClinicDomain.com&#x22;
              muntra_button_text=&#x22;Boka
              tandl&#xE4;kartid&#x22;&#x3E;&#x3C;/div&#x3E;
            </code>
          </pre>
          <div
            className='muntra-widget secondary'
            key='3'
            muntra_role_id='3'
            muntra_clinic_id='16'
            muntra_referral_source='sveatandklinik.se'
            muntra_button_text='Boka tandläkartid'
          ></div>
        </div>
        <div className='flex-column'>
          <h3>Specific role and procedure</h3>
          <pre>
            <code
              className='has-line-data'
              data-line-start='32'
              data-line-end='34'
            >
              &#x3C;div class=&#x22;muntra-widget&#x22; key=&#x22;4&#x22;
              muntra_clinic_id=&#x22;YOUR_CLINIC_ID&#x22;
              muntra_procedure_id=&#x22;4&#x22; muntra_role_id=&#x22;3&#x22;
              muntra_referral_source=&#x22;YourClinicDomain.com&#x22;
              muntra_button_text=&#x22;Boka akut
              tandl&#xE4;kartid&#x22;&#x3E;&#x3C;/div&#x3E;
            </code>
          </pre>
          <div
            className='muntra-widget'
            key='4'
            muntra_clinic_id='16'
            muntra_procedure_id='4'
            muntra_role_id='3'
            muntra_referral_source='sveatandklinik.se'
            muntra_button_text='Boka akut tandläkartid'
            style={{ marginBottom: "15px" }}
          ></div>
          <pre>
            <code
              className='has-line-data'
              data-line-start='32'
              data-line-end='34'
            >
              &#x3C;div class=&#x22;muntra-widget secondary&#x22;
              key=&#x22;5&#x22; muntra_procedure_id=&#x22;9&#x22;
              muntra_role_id=&#x22;4&#x22;
              muntra_clinic_id=&#x22;YOUR_CLINIC_ID&#x22;
              muntra_referral_source=&#x22;YourClinicDomain.com&#x22;
              muntra_button_text=&#x22;Boka tandblekningstid (hos
              tandhygienist)&#x22;&#x3E;&#x3C;/div&#x3E;
            </code>
          </pre>
          <div
            className='muntra-widget secondary'
            key='5'
            muntra_procedure_id='9'
            muntra_role_id='4'
            muntra_clinic_id='16'
            muntra_referral_source='sveatandklinik.se'
            muntra_button_text='Boka tandblekningstid (hos tandhygienist)'
          ></div>
        </div>
        <div>
          <div className='flex-column'>
            <h3>A widget without modal window</h3>
            <pre>
              <code
                className='has-line-data'
                data-line-start='32'
                data-line-end='34'
              >
                &#x3C;div class=&#x22;muntra-widget without-modal&#x22;
                key=&#x22;6&#x22; muntra_clinic_id=&#x22;YOUR_CLINIC_ID&#x22;
                muntra_referral_source=&#x22;YourClinicDomain.com&#x22;
                muntra_without_modal=&#x22;true&#x22;&#x3E;&#x3C;/div&#x3E;
              </code>
            </pre>
            <div
              className='muntra-widget without-modal'
              key='6'
              muntra_clinic_id='16'
              muntra_referral_source='sveatandklinik.se'
              muntra_without_modal='true'
            ></div>
          </div>
          <h3>
            Important! Import the widget code right before the closing body tag
            (&#x3C;/body&#x3E;)
          </h3>
          <pre>
            <code
              className='has-line-data'
              data-line-start='32'
              data-line-end='34'
            >
              &#x3C;script type=&#x22;text/javascript&#x22;
              src=&#x22;https://muntra-dev.github.io/index.js&#x22;&#x3E;&#x3C;/script&#x3E;
            </code>
          </pre>
        </div>
        <h1 className='code-line'>Important Info</h1>
        <ul>
          <li className='has-line-data' data-line-start='1' data-line-end='3'>
            <p>
              For the widget to work, requests to Muntra's API need to be
              whitelisted. The origin header in the API request should match
              exactly to the whitelisting.
            </p>

            <p>
              A missing whitelisting is indicated in the browser's inspector.
              Eg. in the Networks tab in Google Chrome.
            </p>

            <p>
              The whitelisting and any troubleshooting are usually done by
              Muntra personnel.
            </p>
          </li>
        </ul>
        <h1 className='code-line' data-line-start='3' data-line-end='4'>
          Placing a widget on a page
        </h1>
        <p className='has-line-data' data-line-start='5' data-line-end='6'>
          First, place the &lt;div&gt; tag in the site markup, with the
          following attributes:
        </p>
        <p className='has-line-data' data-line-start='7' data-line-end='8'>
          Required attributes:
        </p>
        <ul>
          <li className='has-line-data' data-line-start='9' data-line-end='10'>
            <code>class</code>: “muntra-widget”,
          </li>
          <li className='has-line-data' data-line-start='10' data-line-end='11'>
            <code>key</code>: “id” (This is a unique id for each widget. If you
            place more than one widget, then you should assign them the
            corresponding unique id, for example, 0,1,2 …),
          </li>
          <li className='has-line-data' data-line-start='11' data-line-end='13'>
            <code>muntra_clinic_id</code>: “clinic_id” (Id of the clinic from
            which you’d like to get caregivers).
          </li>
        </ul>
        <p className='has-line-data' data-line-start='13' data-line-end='14'>
          Optional attributes:
        </p>
        <ul>
          <li className='has-line-data' data-line-start='15' data-line-end='16'>
            <code>muntra_caregiver_id</code>: “caregiver_id” (If you want to get
            only a specific caregiver for this clinic, then enter the caregiver
            id here),
          </li>
          <li className='has-line-data' data-line-start='16' data-line-end='17'>
            <code>muntra_role_id</code>: “role_id” (Use it to filter out
            caregivers by role),
          </li>
          <li className='has-line-data' data-line-start='17' data-line-end='18'>
            <code>muntra_procedure_id</code>: “procedure_id” (Use it to assign a
            default procedure),
          </li>
          <li className='has-line-data' data-line-start='18' data-line-end='19'>
            <code>muntra_referral_source</code>: “referral_source” (Use if you
            want your booking to be made using a referral source),
          </li>
          <li className='has-line-data' data-line-start='19' data-line-end='20'>
            <code>muntra_button_text</code>: “Booking button” (Use it to change
            the button text. The default button text is “Boka tid”),
          </li>
          <li className='has-line-data' data-line-start='20' data-line-end='21'>
            <code>muntra_without_modal</code>: “true” (Use it to display a
            widget without a button and outside the modal window),
          </li>
          <li className='has-line-data' data-line-start='21' data-line-end='23'>
            <code>goal_page_url</code>: &quot;
            <a href='https://www.yourExampleGoalPageURL.com'>
              https://www.yourExampleGoalPageURL.com
            </a>
            &quot; (Use it to redirect the user to a goal page of your choice
            after they have successfully booked a time)
          </li>
        </ul>
        <p className='has-line-data' data-line-start='23' data-line-end='24'>
          Example:
        </p>
        <pre>
          <code
            className='has-line-data'
            data-line-start='26'
            data-line-end='28'
          >
            &lt;div class=&quot;muntra-widget&quot; key=&quot;0&quot;
            muntra_clinic_id=&quot;YOUR_CLINIC_ID&quot;
            muntra_caregiver_id=&quot;2&quot;
            muntra_referral_source=&quot;YourClinicDomain.com&quot;&gt;
          </code>
        </pre>
        <p className='has-line-data' data-line-start='29' data-line-end='30'>
          Secondly, place a tag:
        </p>
        <pre>
          <code
            className='has-line-data'
            data-line-start='32'
            data-line-end='34'
          >
            &lt;script type = &quot;text/javascript&quot; src =
            &quot;https://muntra-dev.github.io/index.js&quot;&gt;
            &lt;/script&gt;
          </code>
        </pre>
        <p className='has-line-data' data-line-start='35' data-line-end='36'>
          At the end of the body, to connect the widget to the page.
        </p>
        <p className='has-line-data' data-line-start='37' data-line-end='38'>
          Expample of connecting widget to a page:
        </p>
        <pre>
          <code
            className='has-line-data'
            data-line-start='40'
            data-line-end='52'
          >
            &lt;body&gt; &lt;div class=&quot;auto-margin&quot;&gt; &lt;div
            class=&quot;flex-column right-align&quot;&gt; &lt;h3&gt;Alla
            behandlare&lt;/h3&gt; &lt;div class=&quot;muntra-widget
            primary&quot; key='1' muntra_clinic_id=&quot;YOUR_CLINIC_ID&quot;
            muntra_referral_source=&quot;YourClinicDomain.com&quot;&gt;
            &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;script
            type=&quot;text/javascript&quot;
            src=&quot;https://muntra-dev.github.io/index.js&quot;&gt;&lt;/script&gt;
            &lt;/body&gt;
          </code>
        </pre>
        <h1 className='code-line' data-line-start='53' data-line-end='54'>
          Styling a button
        </h1>
        <p className='has-line-data' data-line-start='55' data-line-end='56'>
          Styling “muntra-widget-button” class:
        </p>
        <pre>
          <code
            className='has-line-data'
            data-line-start='58'
            data-line-end='66'
          >
            .muntra-widget-button {"{"}
            border-radius: 100px; color: #ffffff; font-size: 18px; font-weight:
            700; line-height: 1.7em;
            {"}"}
          </code>
        </pre>
        <p className='has-line-data' data-line-start='67' data-line-end='68'>
          To style only certain buttons, use additional classes:
        </p>
        <pre>
          <code
            className='has-line-data'
            data-line-start='70'
            data-line-end='76'
          >
            .secondary .muntra-widget-button {"{"}
            background-color: #fff; border-color: #52a8ff; color: #52a8ff;
            {"}"}
          </code>
        </pre>
        <h1 className='code-line' data-line-start='77' data-line-end='78'>
          Styling a widget window
        </h1>
        <p className='has-line-data' data-line-start='79' data-line-end='80'>
          If attribute muntra_without_modal = “true”, then use muntra-widget
          styles to style the widget window:
        </p>
        <pre>
          <code
            className='has-line-data'
            data-line-start='82'
            data-line-end='90'
          >
            .muntra-widget {"{"}
            width{":"} 100%; max-width{":"} 720px; height{":"} 500px; border
            {":"} 1px solid lightgrey; border-radius{":"} 15px;
            {"}"}
          </code>
        </pre>
        <p className='has-line-data' data-line-start='91' data-line-end='92'>
          To style only a specific widget, use additional classes:
        </p>
        <pre>
          <code
            className='has-line-data'
            data-line-start='94'
            data-line-end='102'
          >
            .muntra-widget.without-modal {"{"}
            width{":"} 100%; max-width: 720px; height{":"} 500px; border{":"}{" "}
            1px solid lightgrey; border-radius{":"} 15px;
            {"}"}
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
            Have you entered the correct <code>muntra_referral_source</code> in
            place of <b>YourClinicDomain.com</b> from the example above? See{" "}
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
      </div>
    </>
  );
}

export default BookingWidget;
