import React from "react";

function TrackingWidget() {
  return (
    <div className='auto-margin page-body'>
      <div className='flex-column'>
        <h1>Muntra Pixel Docs</h1>
        <h2>Tracking Widget</h2>
        <>
          <h3 className='code-line' data-line-start={7} data-line-end={8}>
            <a id='Deployment_to_website_7' />
            Deployment to website
          </h3>
          <ol>
            <li className='has-line-data' data-line-start={8} data-line-end={9}>
              Add
              <code>&lt;div class="muntra-pixel"&gt;&lt;/div&gt;</code>
              inside <code>&lt;body&gt;</code> tag
            </li>
            <li
              className='has-line-data'
              data-line-start={9}
              data-line-end={10}
            >
              Add
              <code>
                &lt;script type="text/javascript"
                src="https://muntra-dev.github.io/pixel/index.js"&gt;&lt;/script&gt;
              </code>
              after the div
            </li>
          </ol>
        </>
      </div>
    </div>
  );
}

export default TrackingWidget;
