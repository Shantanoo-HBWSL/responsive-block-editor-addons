/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";

function EditorStyles(props) {
  const {
    headingTitle,
    headingDesc,
    seperatorStyle,
    headSpacing,
    subheadSpacing,
    separatorSpacing,
    headSpacingTablet,
    subheadSpacingTablet,
    separatorSpacingTablet,
    headSpacingMobile,
    subheadSpacingMobile,
    separatorSpacingMobile,
    separatorHeight,
    separatorWidth,
    separatorWidthType,
    separatorColor,
    headingTitleFontFamily,
    headingTitleFontSize,
    headingTitleFontSizeTablet,
    headingTitleFontSizeMobile,
    headingTitleFontWeight,
    headingTitleLineHeight,
    headingTitleLetterSpacing,
    headingTitleColor,
    subHeadingTitleFontFamily,
    subHeadingTitleFontSize,
    subHeadingTitleFontSizeMobile,
    subHeadingTitleFontSizeTablet,
    subHeadingTitleFontWeight,
    subHeadingTitleLineHeight,
    subHeadingTitleLetterSpacing,
    subHeadingTitleColor,
    headingTag,
    level,
    headingAlignment,
    headingAlignmentTablet,
    headingAlignmentMobile,
    showHeading,
    showSubHeading,
    showSeparator,
    textDecoration,
    textDecorationSubHeading,
    block_id,
    hideWidget,
    hideWidgetTablet,
    hideWidgetMobile,
    blockTopPadding,
    blockBottomPadding,
    blockLeftPadding,
    blockRightPadding,
    blockTopPaddingMobile,
    blockBottomPaddingMobile,
    blockLeftPaddingMobile,
    blockRightPaddingMobile,
    blockTopPaddingTablet,
    blockBottomPaddingTablet,
    blockLeftPaddingTablet,
    blockRightPaddingTablet,
    blockTopMargin,
    blockBottomMargin,
    blockLeftMargin,
    blockRightMargin,
    blockTopMarginMobile,
    blockBottomMarginMobile,
    blockLeftMarginMobile,
    blockRightMarginMobile,
    blockTopMarginTablet,
    blockBottomMarginTablet,
    blockLeftMarginTablet,
    blockRightMarginTablet,
    topPadding,
    bottomPadding,
    leftPadding,
    rightPadding,
    topPaddingTablet,
    bottomPaddingTablet,
    leftPaddingTablet,
    rightPaddingTablet,
    topPaddingMobile,
    bottomPaddingMobile,
    leftPaddingMobile,
    rightPaddingMobile,
    topMargin,
    bottomMargin,
    leftMargin,
    rightMargin,
    topMarginTablet,
    bottomMarginTablet,
    leftMarginTablet,
    rightMarginTablet,
    topMarginMobile,
    bottomMarginMobile,
    leftMarginMobile,
    rightMarginMobile,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    paddingTabletTop,
    paddingTabletRight,
    paddingTabletBottom,
    paddingTabletLeft,
    paddingMobileTop,
    paddingMobileRight,
    paddingMobileBottom,
    paddingMobileLeft,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    marginTabletTop,
    marginTabletRight,
    marginTabletBottom,
    marginTabletLeft,
    marginMobileTop,
    marginMobileRight,
    marginMobileBottom,
    marginMobileLeft,
  } = props.attributes;

  var selectors = {
    "": {
      "opacity": hideWidget? 0.2 : 1,
      "text-align": headingAlignment,
      "margin-top": topMargin !== 999 && blockTopMargin === 0 ? generateCSSUnit(topMargin, "px") : generateCSSUnit(blockTopMargin, "px"),
      "margin-bottom": bottomMargin !== 999 && blockBottomMargin === 0 ? generateCSSUnit(bottomMargin, "px") : generateCSSUnit(blockBottomMargin, "px"),
      "margin-left": leftMargin !== 999 && blockLeftMargin === 0 ? generateCSSUnit(leftMargin, "px") : generateCSSUnit(blockLeftMargin, "px"),
      "margin-right": rightMargin !== 999 && blockRightMargin === 0 ? generateCSSUnit(rightMargin, "px") : generateCSSUnit(blockRightMargin, "px"),
      "padding-top": topPadding !== 999 && blockTopPadding === 10 ? generateCSSUnit(topPadding, "px") : generateCSSUnit(blockTopPadding, "px"),
      "padding-bottom": bottomPadding !== 999 && blockBottomPadding === 10 ? generateCSSUnit(bottomPadding, "px") : generateCSSUnit(blockBottomPadding, "px"),
      "padding-left": leftPadding !== 999 && blockLeftPadding === 10 ? generateCSSUnit(leftPadding, "px") : generateCSSUnit(blockLeftPadding, "px"),
      "padding-right": rightPadding !== 999 && blockRightPadding === 10 ? generateCSSUnit(rightPadding, "px") : generateCSSUnit(blockRightPadding, "px"),
    },
    " .responsive-heading-title-text": {
      "font-family": headingTitleFontFamily,
      "font-size": generateCSSUnit(headingTitleFontSize, "px"),
      "font-weight": headingTitleFontWeight,
      "line-height": headingTitleLineHeight,
      "letter-spacing": generateCSSUnit(headingTitleLetterSpacing, "px"),
      color: headingTitleColor,
      "margin-bottom": generateCSSUnit(headSpacing, "px"),
      "text-decoration": textDecoration,
    },
    " .responsive-heading-seperator": {
      "border-top-style": seperatorStyle,
      "border-top-width": generateCSSUnit(separatorHeight, "px"),
      "width": generateCSSUnit( separatorWidth, separatorWidthType ),
      "border-color": separatorColor,
      "margin-bottom": generateCSSUnit(separatorSpacing, "px"),
    },
    " .responsive-heading-desc-text": {
      "font-family": subHeadingTitleFontFamily,
      "font-size": generateCSSUnit(subHeadingTitleFontSize, "px"),
      "font-weight": subHeadingTitleFontWeight,
      "line-height": subHeadingTitleLineHeight,
      "letter-spacing": generateCSSUnit(subHeadingTitleLetterSpacing, "px"),
      color: subHeadingTitleColor,
      "margin-bottom": generateCSSUnit(subheadSpacing, "px"),
      "text-decoration": textDecorationSubHeading,
    },
  };

  var mobile_selectors = {
    "": {
      "opacity": hideWidgetMobile? 0.2 : 1,
      "text-align": headingAlignmentMobile,
      "margin-top": topMargin !== 999 && blockTopMargin === 0 ? generateCSSUnit(topMargin, "px") : generateCSSUnit(blockTopMargin, "px"),
      "margin-bottom": bottomMargin !== 999 && blockBottomMargin === 0 ? generateCSSUnit(bottomMargin, "px") : generateCSSUnit(blockBottomMargin, "px"),
      "margin-left": leftMargin !== 999 && blockLeftMargin === 0 ? generateCSSUnit(leftMargin, "px") : generateCSSUnit(blockLeftMargin, "px"),
      "margin-right": rightMargin !== 999 && blockRightMargin === 0 ? generateCSSUnit(rightMargin, "px") : generateCSSUnit(blockRightMargin, "px"),
      "padding-top": topPadding !== 999 && blockTopPadding === 10 ? generateCSSUnit(topPadding, "px") : generateCSSUnit(blockTopPadding, "px"),
      "padding-bottom": bottomPadding !== 999 && blockBottomPadding === 10 ? generateCSSUnit(bottomPadding, "px") : generateCSSUnit(blockBottomPadding, "px"),
      "padding-left": leftPadding !== 999 && blockLeftPadding === 10 ? generateCSSUnit(leftPadding, "px") : generateCSSUnit(blockLeftPadding, "px"),
      "padding-right": rightPadding !== 999 && blockRightPadding === 10 ? generateCSSUnit(rightPadding, "px") : generateCSSUnit(blockRightPadding, "px"),
    },
    " .responsive-heading-title-text": {
      "font-size": generateCSSUnit(headingTitleFontSizeMobile, "px"),
      "margin-bottom": generateCSSUnit(headSpacingMobile, "px"),
    },
    " .responsive-heading-desc-text": {
      "font-size": generateCSSUnit(subHeadingTitleFontSizeMobile, "px"),
      "margin-bottom": generateCSSUnit(subheadSpacingMobile, "px"),
    },
    " .responsive-heading-seperator": {
      "margin-bottom": generateCSSUnit(separatorSpacingMobile, "px"),
    },
  };

  var tablet_selectors = {
    "": {
      "opacity": hideWidgetTablet? 0.2 : 1,
      "text-align": headingAlignmentTablet,
      "margin-top": topMarginTablet !== 999 && blockTopMarginTablet === "" ? generateCSSUnit(topMarginTablet, "px") : (blockTopMarginTablet ? generateCSSUnit(blockTopMarginTablet, "px") : generateCSSUnit(blockTopMargin, "px")),
      "margin-bottom": bottomMarginTablet !== 999 && blockBottomMarginTablet === "" ? generateCSSUnit(bottomMarginTablet, "px") : (blockBottomMarginTablet ? generateCSSUnit(blockBottomMarginTablet, "px") : generateCSSUnit(blockBottomMargin, "px")),
      "margin-left": leftMarginTablet !== 999 && blockLeftMarginTablet === "" ? generateCSSUnit(leftMarginTablet, "px") : (blockLeftMarginTablet ? generateCSSUnit(blockLeftMarginTablet, "px") : generateCSSUnit(blockLeftMargin, "px")),
      "margin-right": rightMarginTablet !== 999 && blockRightMarginTablet === "" ? generateCSSUnit(rightMarginTablet, "px") : (blockRightMarginTablet ? generateCSSUnit(blockRightMarginTablet, "px") : generateCSSUnit(blockRightMargin, "px")),
      "padding-top": topPaddingTablet !== 999 && blockTopPaddingTablet === "" ? generateCSSUnit(topPaddingTablet, "px") : (blockTopPaddingTablet ? generateCSSUnit(blockTopPaddingTablet, "px") : generateCSSUnit(blockTopPadding, "px")),
      "padding-bottom": bottomPaddingTablet !== 999 && blockBottomPaddingTablet === "" ? generateCSSUnit(bottomPaddingTablet, "px") : (blockBottomPaddingTablet ? generateCSSUnit(blockBottomPaddingTablet, "px") : generateCSSUnit(blockBottomPadding, "px")),
      "padding-left": leftPaddingTablet !== 999 && blockLeftPaddingTablet === "" ? generateCSSUnit(leftPaddingTablet, "px") : (blockLeftPaddingTablet ? generateCSSUnit(blockLeftPaddingTablet, "px") : generateCSSUnit(blockLeftPadding, "px")),
      "padding-right": rightPaddingTablet !== 999 && blockRightPaddingTablet === "" ? generateCSSUnit(rightPaddingTablet, "px") : (blockRightPaddingTablet ? generateCSSUnit(blockRightPaddingTablet, "px") : generateCSSUnit(blockRightPadding, "px")),
    },
    " .responsive-heading-title-text": {
      "font-size": generateCSSUnit(headingTitleFontSizeTablet, "px"),
      "margin-bottom": generateCSSUnit(headSpacingTablet, "px"),
    },
    " .responsive-heading-desc-text": {
      "font-size": generateCSSUnit(subHeadingTitleFontSizeTablet, "px"),
      "margin-bottom": generateCSSUnit(subheadSpacingTablet, "px"),
    },
    " .responsive-heading-seperator": {
      "margin-bottom": generateCSSUnit(separatorSpacingTablet, "px"),
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-advanced-heading.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
