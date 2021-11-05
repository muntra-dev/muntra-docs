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
      <div class="markdown-container ltr">
      <div class="markdown-content">
        <p>Muntra referral react widget</p>
        <h1 id="placing-a-widget-on-a-page">Placing a widget on a page</h1>
        <p>First, place the</p>
        <div>
          tag in the site markup, with the following attributes:
          <p></p>
          <p>Required attributes:</p>
          <ul>
            <li><code>class</code>: "muntra-referral-widget",</li>
            <li>
              <p><code>muntra_clinic_id</code>: "clinic_id".</p>
              <p>Example:</p>
              <pre><code class=" hljs ">&lt;div
 <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"muntra-referral-widget"</span>
 muntra_clinic_id=<span class="hljs-string">"1"</span>
/&gt;
</code></pre>
              <p>Secondly, place a tag:</p>
              <pre><code class=" hljs "><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span> = <span class="hljs-string">"text/javascript"</span> <span class="hljs-attr">src</span> = <span class="hljs-string">"https://muntra-dev.github.io/referral-page/index.js"</span>&gt;</span><span class="undefined"> </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
              <p>At the end of the body, to connect the widget to the page.</p>
            </li>
          </ul>
          <p>Expample of connecting widget to a page:</p>
          <pre><code class=" hljs "> <span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
   <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
     <span class="hljs-attr">class</span>=<span class="hljs-string">"muntra-referral-widget"</span>
     <span class="hljs-attr">muntra_clinic_id</span>=<span class="hljs-string">"1"</span>
   &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
   <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text/javascript"</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://muntra-dev.github.io/referral-page/index.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
 <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
</code></pre>
          <h1 id="styling-a-widget-window">Styling a widget window</h1>
          <p>Use muntra-referral-widget styles to style the widget window:</p>
          <pre><code class=" hljs "><span class="hljs-selector-class">.muntra-referral-widget</span> {
  <span class="hljs-attribute">height</span>: <span class="hljs-number">1000px</span>;
  <span class="hljs-attribute">margin</span>: <span class="hljs-number">10px</span> auto <span class="hljs-number">0</span>;
}
</code></pre>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ReferralWidget;
