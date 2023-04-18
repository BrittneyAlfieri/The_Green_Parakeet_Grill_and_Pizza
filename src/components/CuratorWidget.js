import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import parse from "html-react-parser";

const CuratorWidget = () => {
  const widgetHtml = `<!-- Place <div> tag where you want the feed to appear -->
  <div id="curator-feed-default-feed-layout"><a href="https://curator.io" target="_blank" class="crt-logo crt-tag">Powered by Curator.io</a></div><!-- The Javascript can be moved to the end of the html page before the </body> tag --><script type="text/javascript">
  /* curator-feed-default-feed-layout */
  (function(){
  var i,e,d=document,s="script";i=d.createElement("script");i.async=1;i.charset="UTF-8";
  i.src="https://cdn.curator.io/published/8fbfae9f-a6d5-4469-bfdf-0f7ff9b704cb.js";
  e=d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
  })();
  </script>`;

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.curator.io/published/8fbfae9f-a6d5-4469-bfdf-0f7ff9b704cb.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      {parse(widgetHtml)}

      <Helmet>
        <script>
          {`
            (function() {
              var i,e,d=document,s="script";
              i=d.createElement("script");i.async=1;i.charset="UTF-8";
              i.src="https://cdn.curator.io/published/8fbfae9f-a6d5-4469-bfdf-0f7ff9b704cb.js";
              e=d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
            })();
          `}
        </script>
      </Helmet>
    </>
  );
};

export default CuratorWidget;
