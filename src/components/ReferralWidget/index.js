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
        <h1>Muntra Referral Widget Docs</h1>
        <h2>
          Import the widget code right before the closing body tag
          (&#x3C;/body&#x3E;)
        </h2>
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
      <div className='flex-column'>
        <h2>Widget placement example</h2>
        <pre>
          <code
            className='has-line-data'
            data-line-start={12}
            data-line-end={17}
          >
            &#x3C;div class=&#x22;muntra-referral-widget&#x22;
            muntra_clinic_id=&#x22;1&#x22;&#x3E;&#x3C;/div&#x3E;
          </code>
        </pre>
        <div className='muntra-referral-widget' muntra_clinic_id='1'></div>
      </div>
      <>
        {" "}
        <h1 className='code-line' data-line-start={0} data-line-end={1}>
          <a id='Placing_a_widget_on_a_page_0' />
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
            {"   "}muntra_clinic_id="1"{"\n"}
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
          <a id='Styling_a_widget_window_37' />
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
