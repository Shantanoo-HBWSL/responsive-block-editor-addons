/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";
import { hexToRgba } from "../../../utils";
import generateBackgroundImageEffect from "../../../generateBackgroundImageEffect";

function EditorStyles(props) {
  const {
    hideWidget,
  } = props.attributes;

  var selectors = {
    " ": {
		"opacity": hideWidget? 0.2 : 1,
    "background-color": "red",
	},
  };

  var mobile_selectors = {};

  var tablet_selectors = {};

/** We need it afterwards */
  var styling_css = "";
  var id = ` #block-${props.clientId}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");
  // styling_css += generateCSS(outerElement, " ");
  // styling_css += generateCSS(outerElementTablet, " ", true, "tablet");
  // styling_css += generateCSS(outerElementMobile, " ", true, "mobile");

  return styling_css;
}

export default EditorStyles;
