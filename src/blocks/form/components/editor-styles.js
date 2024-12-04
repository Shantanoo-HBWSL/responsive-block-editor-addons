/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";

function EditorStyles(props) {
  const {
    formLabelSize,
    formLabelInputGap,
    formInputSize,
    formFieldInputGap,
    inputFieldPadding,
    inputFieldPaddingTablet,
    inputFieldPaddingMobile,
    formButtonLabelColor,
    formButtonLabelBGColor,
    formButtonLabelHoverColor,
    formButtonLabelHoverBGColor,
    formButtonPadding,
    formButtonPaddingTablet,
    formButtonPaddingMobile,
    formButtonBorderRadius,
    formButtonTopRadius,
    formButtonRightRadius,
    formButtonBottomRadius,
    formButtonLeftRadius,
    formButtonTopRadiusTablet,
    formButtonRightRadiusTablet,
    formButtonBottomRadiusTablet,
    formButtonLeftRadiusTablet,
    formButtonTopRadiusMobile,
    formButtonRightRadiusMobile,
    formButtonBottomRadiusMobile,
    formButtonLeftRadiusMobile,
    formButtonAlign,
    formButtonAlignTablet,
    formButtonAlignMobile,
    formLabelColor,
    formInputTextColor,
    formInputBGColor,
    formBorderColor,
    formHelperLabelColor,
    formRequiredLabelColor,
    formSuccessMessageColor,
    formErrorMessageColor,
    formBorderRadius,
    formTopRadius,
    formRightRadius,
    formBottomRadius,
    formLeftRadius,
    formTopRadiusTablet,
    formRightRadiusTablet,
    formBottomRadiusTablet,
    formLeftRadiusTablet,
    formTopRadiusMobile,
    formRightRadiusMobile,
    formBottomRadiusMobile,
    formLeftRadiusMobile,
    formBorderWidth,
    formHelperTextSize,
    formSuccessErrorMessageSize,
    block_id,
    hideWidget,
    hideWidgetTablet,
    hideWidgetMobile,
    formTopPadding,
    formTopPaddingMobile,
    formTopPaddingTablet,
    formBottomPadding,
    formBottomPaddingMobile,
    formBottomPaddingTablet,
    formLeftPadding,
    formLeftPaddingMobile,
    formLeftPaddingTablet,
    formRightPadding,
    formRightPaddingMobile,
    formRightPaddingTablet,
    formTopMargin,
    formTopMarginMobile,
    formTopMarginTablet,
    formBottomMargin,
    formBottomMarginMobile,
    formBottomMarginTablet,
    formLeftMargin,
    formLeftMarginMobile,
    formLeftMarginTablet,
    formRightMargin,
    formRightMarginMobile,
    formRightMarginTablet,
  } = props.attributes;

  var selectors = {
    "": {
      "opacity": hideWidget ? 0.2 : 1,
      "padding-top": generateCSSUnit(formTopPadding, "px"),
      "padding-right": generateCSSUnit(formRightPadding, "px"),
      "padding-bottom": generateCSSUnit(formBottomPadding, "px"),
      "padding-left": generateCSSUnit(formLeftPadding, "px"),
      "margin-top": generateCSSUnit(formTopMargin, "px"),
      "margin-right": generateCSSUnit(formRightMargin, "px"),
      "margin-bottom": generateCSSUnit(formBottomMargin, "px"),
      "margin-left": generateCSSUnit(formLeftMargin, "px"),
    },
    " .responsive-block-editor-addons-form-input": {
      "margin-bottom": generateCSSUnit(formFieldInputGap, "px"),
    },
    " .responsive-block-editor-addons-form-input-label": {
      "font-size": formLabelSize,
      "margin-bottom": generateCSSUnit(formLabelInputGap, "px"),
    },
    " .responsive-block-editor-addons-form-input__label": {
      "color": formLabelColor,
    },
    " .responsive-block-editor-addons-form-input__required": {
      "color": formRequiredLabelColor === undefined || formRequiredLabelColor === '' ? '#ff0000' : formRequiredLabelColor,
    },
    " .responsive-block-editor-addons-form-input__input": {
      "font-size": formInputSize,
      "color": formInputTextColor,
      "background-color": formInputBGColor,
      "border-color": formBorderColor === undefined || formBorderColor === '' ? '#111111': formBorderColor,
      "border-top-left-radius": generateCSSUnit(formTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(formRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(formBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(formLeftRadius, "px"),
      "border-top-width": formBorderWidth.top,
      "border-bottom-width": formBorderWidth.bottom,
      "border-left-width": formBorderWidth.left,
      "border-right-width": formBorderWidth.right,
    },
    " .responsive-block-editor-addons-form-input__text": {
      "padding-top": inputFieldPadding.top,
      "padding-bottom": inputFieldPadding.bottom,
      "padding-left": inputFieldPadding.left,
      "padding-right": inputFieldPadding.right,
    },
    " .responsive-block-editor-addons-form-input__helper": {
      "color": formHelperLabelColor,
      "font-size": formHelperTextSize,
    },
    " .responsive-block-editor-addons-form-submit-button-container": {
      "justify-content": formButtonAlign,
      "margin-top": generateCSSUnit(formFieldInputGap, "px"),
    },
    " .responsive-block-editor-addons-form-submit-button": {
      "color": formButtonLabelColor,
      "background-color": formButtonLabelBGColor,
      "padding-top": formButtonPadding.top,
      "padding-bottom": formButtonPadding.bottom,
      "padding-left": formButtonPadding.left,
      "padding-right": formButtonPadding.right,
      "border-top-left-radius": generateCSSUnit(formButtonTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(formButtonRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(formButtonBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(formButtonLeftRadius, "px"),
    },
    " .responsive-block-editor-addons-form-submit-button:hover": {
      "color": formButtonLabelHoverColor,
      "background-color": formButtonLabelHoverBGColor,
    },
    " .responsive-block-editor-addons-form-submit-success-message": {
      "color": formSuccessMessageColor === undefined || formSuccessMessageColor === '' ? '#008000' : formSuccessMessageColor,
      "font-size": formSuccessErrorMessageSize,
    },
    " .responsive-block-editor-addons-form-submit-error-message": {
      "color": formErrorMessageColor === undefined || formErrorMessageColor === '' ? '#FF0000' : formErrorMessageColor,
      "font-size": formSuccessErrorMessageSize,
    },
  };

  var mobile_selectors = {
    "": {
      "opacity": hideWidgetMobile ? 0.2 : 1,
      "padding-top": generateCSSUnit(formTopPaddingMobile, "px"),
      "padding-right": generateCSSUnit(formRightPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(formBottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(formLeftPaddingMobile, "px"),
      "margin-top": generateCSSUnit(formTopMarginMobile, "px"),
      "margin-right": generateCSSUnit(formRightMarginMobile, "px"),
      "margin-bottom": generateCSSUnit(formBottomMarginMobile, "px"),
      "margin-left": generateCSSUnit(formLeftMarginMobile, "px"),
    },
    " .responsive-block-editor-addons-form-input__input": {
      "border-top-left-radius": generateCSSUnit(formTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(formRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(formBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(formLeftRadiusMobile, "px"),
    },
    " .responsive-block-editor-addons-form-input__text": {
      "padding-top": inputFieldPaddingMobile.top,
      "padding-bottom": inputFieldPaddingMobile.bottom,
      "padding-left": inputFieldPaddingMobile.left,
      "padding-right": inputFieldPaddingMobile.right,
    },
    " .responsive-block-editor-addons-form-submit-button-container": {
      "justify-content": formButtonAlignMobile,
    },
    " .responsive-block-editor-addons-form-submit-button": {
      "padding-top": formButtonPaddingMobile.top,
      "padding-bottom": formButtonPaddingMobile.bottom,
      "padding-left": formButtonPaddingMobile.left,
      "padding-right": formButtonPaddingMobile.right,
      "border-top-left-radius": generateCSSUnit(formButtonTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(formButtonRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(formButtonBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(formButtonLeftRadiusMobile, "px"),
    },
  };

  var tablet_selectors = {
    "": {
      "opacity": hideWidgetTablet ? 0.2 : 1,
      "padding-top": generateCSSUnit(formTopPaddingTablet, "px"),
      "padding-right": generateCSSUnit(formRightPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(formBottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(formLeftPaddingTablet, "px"),
      "margin-top": generateCSSUnit(formTopMarginTablet, "px"),
      "margin-right": generateCSSUnit(formRightMarginTablet, "px"),
      "margin-bottom": generateCSSUnit(formBottomMarginTablet, "px"),
      "margin-left": generateCSSUnit(formLeftMarginTablet, "px"),
    },
    " .responsive-block-editor-addons-form-input__input": {
      "border-top-left-radius": generateCSSUnit(formTopRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(formRightRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(formBottomRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(formLeftRadiusTablet, "px"),
    },
    " .responsive-block-editor-addons-form-input__text": {
      "padding-top": inputFieldPaddingTablet.top,
      "padding-bottom": inputFieldPaddingTablet.bottom,
      "padding-left": inputFieldPaddingTablet.left,
      "padding-right": inputFieldPaddingTablet.right,
    },
    " .responsive-block-editor-addons-form-submit-button-container": {
      "justify-content": formButtonAlignTablet,
    },
    " .responsive-block-editor-addons-form-submit-button": {
      "padding-top": formButtonPaddingTablet.top,
      "padding-bottom": formButtonPaddingTablet.bottom,
      "padding-left": formButtonPaddingTablet.left,
      "padding-right": formButtonPaddingTablet.right,
      "border-top-left-radius": generateCSSUnit(formButtonTopRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(formButtonRightRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(formButtonBottomRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(formButtonLeftRadiusTablet, "px"),
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-form.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
