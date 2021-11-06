import React from "react";

function TrackingWidget() {
  return (
    <div className='auto-margin page-body'>
      <div className='flex-column'>
        <h1>Muntra Pixel Docs</h1>
        <h2>Information</h2>
        <p>
          The Muntra Pixel is a combination of different tracking id:s which
          allows you to get an overview of patient events.
        </p>
        <p>
          In practice this means that you will be able to actually track ROI on
          your marketing campaigns and get a clear overview of patient behavior.
          This allows you to see the whole customer jounrey and optimize your
          marketing.
        </p>
        <h2>Tracking Widget</h2>

        <h3 className='code-line' data-line-start={7} data-line-end={8}>
          <a id='Deployment_to_website_7' />
          Deployment to website
        </h3>
        <ol>
          <li className='has-line-data' data-line-start={8} data-line-end={9}>
            Add
            <code>&lt;div class="muntra-pixel"&gt;&lt;/div&gt;</code> to a place
            in the code where it will be present within the{" "}
            <code>&lt;body&gt;</code> no matter which page you´re on
          </li>
          <li className='has-line-data' data-line-start={9} data-line-end={10}>
            Add
            <code>
              &lt;script type="text/javascript"
              src="https://muntra-dev.github.io/pixel/index.js"&gt;&lt;/script&gt;
            </code>
            after the div added in step 1 or the widget won't work
          </li>
          <h2>
            Add this div within the <code>&lt;body&gt;</code> tag at a place
            where it will be present on all pages
          </h2>
          <pre>
            <code>&lt;div class="muntra-pixel"&gt;&lt;/div&gt;</code>
          </pre>
          <h2>
            Important! Import the widget code right before the closing body tag
            (&#x3C;/body&#x3E;)
          </h2>
          <pre>
            <code class='has-line-data' data-line-start='32' data-line-end='34'>
              &#x3C;script type=&#x22;text/javascript&#x22;
              src="https://muntra-dev.github.io/pixel/index.js"&gt;&lt;/script&gt;
            </code>
          </pre>
        </ol>
      </div>
    </div>
  );
}

export default TrackingWidget;
