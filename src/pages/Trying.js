import React from "react";
import parse from "html-react-parser";

export const Trying = () => {
  let myHtmlString =
    "<ol>\n<li>khao</li>\n<li>pio</li>\n<li>sojao</li>\n<li><strong>jago</strong></li>\n</ol>\n<ul>\n<li><strong>bhago</strong></li>\n<li><strong><em>waps sojao</em></strong></li>\n</ul>\n";
  if (myHtmlString.includes("<ul>") || myHtmlString.includes("<ol>")) {
    if (myHtmlString.includes("<ul>"))
      myHtmlString = myHtmlString.replaceAll(
        "<ul>",
        "<ul style='list-style-type:disc'>"
      );
    if (myHtmlString.includes("<ol>")) {
      myHtmlString = myHtmlString.replaceAll(
        "<ol>",
        "<ol style='list-style-type:number'>"
      );
    }
  }
  const parsedHtml = parse(myHtmlString);

  return <div>{parsedHtml}</div>;
};
