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
      <div class='auto-margin page-body'>
        <div class='flex-column'>
          <h2>
            Import the widget right before the closing body tag
            (&#x3C;/body&#x3E;)
          </h2>
          <div class='code'>
            &#x3C;script type=&#x22;text/javascript&#x22;
            src=&#x22;https://muntra-dev.github.io/index.js&#x22;&#x3E;&#x3C;/script&#x3E;
          </div>
        </div>
        <div class='flex-column'>
          <h2>All caregivers at clinic</h2>
          <div class='code'>
            &#x3C;div class=&#x22;muntra-widget primary&#x22; key=&#x22;0&#x22;
            muntra_clinic_id=&#x22;16&#x22;
            muntra_referral_source=&#x22;sveatandklinik.se&#x22;&#x3E;&#x3C;/div&#x3E;
          </div>
          <div
            class='muntra-widget primary'
            key='0'
            muntra_clinic_id='16'
            muntra_referral_source='sveatandklinik.se'
          ></div>
        </div>
        <div class='flex-column'>
          <h2>Specific caregiver</h2>
          <div class='code'>
            &#x3C;div class=&#x22;muntra-widget secondary&#x22;
            key=&#x22;1&#x22; muntra_caregiver_id=&#x22;2852&#x22;
            muntra_clinic_id=&#x22;16&#x22;
            muntra_referral_source=&#x22;sveatandklinik.se&#x22;
            muntra_button_text=&#x22;Boka Specific
            behandlare&#x22;&#x3E;&#x3C;/div&#x3E;
          </div>
          <div
            class='muntra-widget secondary'
            key='1'
            muntra_caregiver_id='2852'
            muntra_clinic_id='16'
            muntra_referral_source='sveatandklinik.se'
            muntra_button_text='Boka Specific behandlare'
          ></div>
        </div>
        <div class='flex-column'>
          <h2>Specific role</h2>
          <div class='code'>
            &#x3C;div class=&#x22;muntra-widget secondary&#x22;
            key=&#x22;2&#x22; muntra_role_id=&#x22;4&#x22;
            muntra_clinic_id=&#x22;16&#x22;
            muntra_referral_source=&#x22;sveatandklinik.se&#x22;
            muntra_button_text=&#x22;Boka
            tandhygienist&#x22;&#x3E;&#x3C;/div&#x3E;
          </div>
          <div
            class='muntra-widget'
            key='2'
            muntra_role_id='4'
            muntra_clinic_id='16'
            muntra_referral_source='sveatandklinik.se'
            muntra_button_text='Boka tandhygienist'
          ></div>
          <div class='code'>
            &#x3C;div class=&#x22;muntra-widget secondary&#x22;
            key=&#x22;3&#x22; muntra_role_id=&#x22;3&#x22;
            muntra_clinic_id=&#x22;16&#x22;
            muntra_referral_source=&#x22;sveatandklinik.se&#x22;
            muntra_button_text=&#x22;Boka
            tandl&#xE4;kartid&#x22;&#x3E;&#x3C;/div&#x3E;
          </div>
          <div
            class='muntra-widget secondary'
            key='3'
            muntra_role_id='3'
            muntra_clinic_id='16'
            muntra_referral_source='sveatandklinik.se'
            muntra_button_text='Boka tandläkartid'
          ></div>
        </div>
        <div class='flex-column'>
          <h2>Specific role and procedure</h2>
          <div class='code'>
            &#x3C;div class=&#x22;muntra-widget&#x22; key=&#x22;4&#x22;
            muntra_clinic_id=&#x22;16&#x22; muntra_procedure_id=&#x22;4&#x22;
            muntra_role_id=&#x22;3&#x22;
            muntra_referral_source=&#x22;sveatandklinik.se&#x22;
            muntra_button_text=&#x22;Boka akut
            tandl&#xE4;kartid&#x22;&#x3E;&#x3C;/div&#x3E;
          </div>
          <div
            class='muntra-widget'
            key='4'
            muntra_clinic_id='16'
            muntra_procedure_id='4'
            muntra_role_id='3'
            muntra_referral_source='sveatandklinik.se'
            muntra_button_text='Boka akut tandläkartid'
          ></div>
          <div class='code'>
            &#x3C;div class=&#x22;muntra-widget secondary&#x22;
            key=&#x22;5&#x22; muntra_procedure_id=&#x22;9&#x22;
            muntra_role_id=&#x22;4&#x22; muntra_clinic_id=&#x22;16&#x22;
            muntra_referral_source=&#x22;sveatandklinik.se&#x22;
            muntra_button_text=&#x22;Boka tandblekningstid (hos
            tandhygienist)&#x22;&#x3E;&#x3C;/div&#x3E;
          </div>
          <div
            class='muntra-widget secondary'
            key='5'
            muntra_procedure_id='9'
            muntra_role_id='4'
            muntra_clinic_id='16'
            muntra_referral_source='sveatandklinik.se'
            muntra_button_text='Boka tandblekningstid (hos tandhygienist)'
          ></div>
        </div>
        <div>
          <div class='flex-column'>
            <h2>A widget without modal window</h2>
            <div class='code'>
              &#x3C;div class=&#x22;muntra-widget without-modal&#x22;
              key=&#x22;6&#x22; muntra_clinic_id=&#x22;16&#x22;
              muntra_referral_source=&#x22;sveatandklinik.se&#x22;
              muntra_without_modal=&#x22;true&#x22;&#x3E;&#x3C;/div&#x3E;
            </div>
            <div
              class='muntra-widget without-modal'
              key='6'
              muntra_clinic_id='16'
              muntra_referral_source='sveatandklinik.se'
              muntra_without_modal='true'
            ></div>
          </div>
        </div>
        <h1 id='important-info'>Important Info</h1>
        <ul>
          <li>
            For the widget to work the origin point must be first whitelisted by
            the server, the muntra_referral_source attribute and the
            whitelisting needs to be an exact match of the origin point. If
            whitelisting is missing or if muntra_referral_source is incorrect an
            error showing the correct origin point will be shown in the network
            tab of the browser inspector. This is done by Muntra-personel.
          </li>
        </ul>
        <h1 id='placing-a-widget-on-a-page'>Placing a widget on a page</h1>
        <p>First, place the </p>
        <div>
          {" "}
          tag in the site markup, with the following attributes:<p></p>
          <p>Required attributes:</p>
          <ul>
            <li>
              <code>class</code>: "muntra-widget",
            </li>
            <li>
              <code>key</code>: "id" (This is a unique id for each widget. If
              you place more than one widget, then you should assign them the
              corresponding unique id, for example, 0,1,2 ...),
            </li>
            <li>
              <code>muntra_clinic_id</code>: "clinic_id" (Id of the clinic from
              which you'd like to get caregivers).
            </li>
          </ul>
          <p>Optional attributes:</p>
          <ul>
            <li>
              <code>muntra_caregiver_id</code>: "caregiver_id" (If you want to
              get only a specific caregiver for this clinic, then enter the
              caregiver id here),
            </li>
            <li>
              <code>muntra_role_id</code>: "role_id" (Use it to filter out
              caregivers by role),
            </li>
            <li>
              <code>muntra_procedure_id</code>: "procedure_id" (Use it to assign
              a default procedure),
            </li>
            <li>
              <code>muntra_referral_source</code>: "referral_source" (Use if you
              want your booking to be made using a referral source),
            </li>
            <li>
              <code>muntra_button_text</code>: "Booking button" (Use it to
              change the button text. The default button text is "Boka tid"),
            </li>
            <li>
              <code>muntra_without_modal</code>: "true" (Use it to display a
              widget without a button and outside the modal window),
            </li>
            <li>
              <code>goal_page_url</code>: "
              <a href='https://www.yourExampleGoalPageURL.com'>
                https://www.yourExampleGoalPageURL.com
              </a>
              " (Use it to redirect the user to a goal page of your choice after
              they have successfully booked a time)
            </li>
          </ul>
          <p>Example:</p>
          <pre>
            <code class=' hljs '>
              &lt; div{" "}
              <span class='hljs-class'>
                <span class='hljs-keyword'>class</span>
              </span>
              =<span class='hljs-string'>"muntra-widget"</span> key=
              <span class='hljs-string'>"0"</span> muntra_clinic_id=
              <span class='hljs-string'>"16"</span> muntra_caregiver_id=
              <span class='hljs-string'>"2"</span> muntra_referral_source=
              <span class='hljs-string'>"referral-link.se"</span>&gt;
            </code>
          </pre>
          <p>Secondly, place a tag:</p>
          <pre>
            <code class=' hljs '>
              <span class='hljs-tag'>
                &lt;<span class='hljs-name'>script</span>{" "}
                <span class='hljs-attr'>type</span> ={" "}
                <span class='hljs-string'>"text/javascript"</span>{" "}
                <span class='hljs-attr'>src</span> ={" "}
                <span class='hljs-string'>
                  "https://muntra-dev.github.io/index.js"
                </span>
                &gt;
              </span>
              <span class='undefined'> </span>
              <span class='hljs-tag'>
                &lt;/<span class='hljs-name'>script</span>&gt;
              </span>
            </code>
          </pre>
          <p>At the end of the body, to connect the widget to the page.</p>
          <p>Expample of connecting widget to a page:</p>
          <pre>
            <code class=' hljs '>
              <span class='hljs-tag'>
                &lt;<span class='hljs-name'>body</span>&gt;
              </span>
              <span class='hljs-tag'>
                &lt;<span class='hljs-name'>div</span>{" "}
                <span class='hljs-attr'>class</span>=
                <span class='hljs-string'>"auto-margin"</span>&gt;
              </span>
              <span class='hljs-tag'>
                &lt;<span class='hljs-name'>div</span>{" "}
                <span class='hljs-attr'>class</span>=
                <span class='hljs-string'>"flex-column right-align"</span>&gt;
              </span>
              <span class='hljs-tag'>
                &lt;<span class='hljs-name'>h2</span>&gt;
              </span>
              Alla behandlare
              <span class='hljs-tag'>
                &lt;/<span class='hljs-name'>h2</span>&gt;
              </span>
              <span class='hljs-tag'>
                &lt;<span class='hljs-name'>div</span>{" "}
                <span class='hljs-attr'>class</span>=
                <span class='hljs-string'>"muntra-widget primary"</span>{" "}
                <span class='hljs-attr'>key</span>=
                <span class='hljs-string'>'1'</span>{" "}
                <span class='hljs-attr'>muntra_clinic_id</span>=
                <span class='hljs-string'>"16"</span>{" "}
                <span class='hljs-attr'>muntra_referral_source</span>=
                <span class='hljs-string'>"referral-link.se"</span>&gt;
              </span>
              <span class='hljs-tag'>
                &lt;/<span class='hljs-name'>div</span>&gt;
              </span>
              <span class='hljs-tag'>
                &lt;/<span class='hljs-name'>div</span>&gt;
              </span>
              <span class='hljs-tag'>
                &lt;/<span class='hljs-name'>div</span>&gt;
              </span>
              <span class='hljs-tag'>
                &lt;<span class='hljs-name'>script</span>{" "}
                <span class='hljs-attr'>type</span>=
                <span class='hljs-string'>"text/javascript"</span>{" "}
                <span class='hljs-attr'>src</span>=
                <span class='hljs-string'>
                  "https://muntra-dev.github.io/index.js"
                </span>
                &gt;
              </span>
              <span class='undefined'></span>
              <span class='hljs-tag'>
                &lt;/<span class='hljs-name'>script</span>&gt;
              </span>
              <span class='hljs-tag'>
                &lt;/<span class='hljs-name'>body</span>&gt;
              </span>
            </code>
          </pre>
          <h1 id='styling-a-button'>Styling a button</h1>
          <p>Styling "muntra-widget-button" class:</p>
          <pre>
            <code class=' hljs '>
              <span class='hljs-selector-class'>.muntra-widget-button</span>{" "}
              {<span class='hljs-attribute'>border-radius</span>}:{" "}
              <span class='hljs-number'>100px</span>;
              <span class='hljs-attribute'>color</span>:{" "}
              <span class='hljs-number'>#ffffff</span>;
              <span class='hljs-attribute'>font-size</span>:{" "}
              <span class='hljs-number'>18px</span>;
              <span class='hljs-attribute'>font-weight</span>:{" "}
              <span class='hljs-number'>700</span>;
              <span class='hljs-attribute'>line-height</span>:{" "}
              <span class='hljs-number'>1.7em</span>; }
            </code>
          </pre>
          <p>To style only certain buttons, use additional classes:</p>
          <pre>
            <code class=' hljs '>
              <span class='hljs-selector-class'>.secondary</span>{" "}
              <span class='hljs-selector-class'>.muntra-widget-button</span>{" "}
              {<span class='hljs-attribute'>background-color</span>}:{" "}
              <span class='hljs-number'>#fff</span>;
              <span class='hljs-attribute'>border-color</span>:{" "}
              <span class='hljs-number'>#52a8ff</span>;
              <span class='hljs-attribute'>color</span>:{" "}
              <span class='hljs-number'>#52a8ff</span>; }
            </code>
          </pre>
          <h1 id='styling-a-widget-window'>Styling a widget window</h1>
          <p>
            If attribute muntra_without_modal = "true", then use muntra-widget
            styles to style the widget window:
          </p>
          <pre>
            <code class=' hljs '>
              <span class='hljs-selector-class'>.muntra-widget</span>{" "}
              {<span class='hljs-attribute'>width</span>}:{" "}
              <span class='hljs-number'>100%</span>;
              <span class='hljs-attribute'>max-width</span>:{" "}
              <span class='hljs-number'>720px</span>;
              <span class='hljs-attribute'>height</span>:{" "}
              <span class='hljs-number'>500px</span>;
              <span class='hljs-attribute'>border</span>:{" "}
              <span class='hljs-number'>1px</span> solid lightgrey;
              <span class='hljs-attribute'>border-radius</span>:{" "}
              <span class='hljs-number'>15px</span>; }
            </code>
          </pre>
          <p>To style only a specific widget, use additional classes:</p>
          <pre>
            <code class=' hljs '>
              <span class='hljs-selector-class'>.muntra-widget</span>
              <span class='hljs-selector-class'>.without-modal</span>{" "}
              {<span class='hljs-attribute'>width</span>}:{" "}
              <span class='hljs-number'>100%</span>;
              <span class='hljs-attribute'>max-width</span>:{" "}
              <span class='hljs-number'>720px</span>;
              <span class='hljs-attribute'>height</span>:{" "}
              <span class='hljs-number'>500px</span>;
              <span class='hljs-attribute'>border</span>:{" "}
              <span class='hljs-number'>1px</span> solid lightgrey;
              <span class='hljs-attribute'>border-radius</span>:{" "}
              <span class='hljs-number'>15px</span>; }
            </code>
          </pre>
        </div>
      </div>
    </>
  );
}

export default BookingWidget;
