/**
 * Inspector Controls
 */

import BoxShadowControl from "../../../../utils/components/box-shadow";
import InspectorTab from "../../../../components/InspectorTab";
import InspectorTabs from "../../../../components/InspectorTabs";
import RbeaBlockBorderHelperControl from "../../../../settings-components/RbeaBlockBorderSettings";
import ColorBackgroundControl from "../../../../settings-components/BlockBackgroundSettings/ColorBackgroundSettings";
import GradientBackgroundControl from "../../../../settings-components/BlockBackgroundSettings/GradientBackgroundSettings";
import generateCSSUnit from "../../../../generateCSSUnit";
import ResponsiveNewPaddingControl from "../../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import RbeaRangeControl from "../../../../utils/components/rbea-range-control";
import { RadioControl} from "@wordpress/components";
import RbeaTabRadioControl from "../../../../utils/components/rbea-tab-radio-control";
import RbeaAngleRangeControl from "../../../../utils/components/rbea-angle-range-control";
import RbeaMediaUploadControl from "../../../../utils/components/rbea-media-upload-control";
import RbeaColorControl from "../../../../utils/components/rbea-color-control";
import RbeaBackgroundTypeControl from "../../../../utils/components/rbea-background-type-control";
import rbeaOptions from "../../../advanced-text/components/rbea-options";



// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { ColorPalette, MediaUpload, InspectorControls } = wp.blockEditor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  ToggleControl,
  BaseControl,
  ButtonGroup,
  Button,
  TabPanel,
  Dashicon,
} = wp.components;


/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.onRemoveVideo = this.onRemoveVideo.bind(this);
    this.onRemoveImage = this.onRemoveImage.bind(this);
    this.onSelectImage = this.onSelectImage.bind(this);
    this.onSelectVideo = this.onSelectVideo.bind(this);
  }
  /*
   * Event to set Image as null while removing.
   */
  onRemoveImage() {
    const { setAttributes } = this.props;

    setAttributes({ backgroundImage: null });
  }

  /*
   * Event to set Image as while adding.
   */
  onSelectImage(media) {
    const { setAttributes } = this.props;
    const { backgroundImage } = this.props.attributes;

    if (!media || !media.url) {
      setAttributes({ backgroundImage: null });
      return;
    }

    if (!media.type || "image" != media.type) {
      return;
    }

    setAttributes({ backgroundImage: media.url });
  }
  /*
   * Event to set Video as null while removing.
   */
  onRemoveVideo() {
    const { setAttributes } = this.props;

    setAttributes({ backgroundVideo: null });
  }

  /*
   * Event to set Video while adding.
   */
  onSelectVideo(media) {
    const { setAttributes } = this.props;

    if (!media || !media.url) {
      setAttributes({ backgroundVideo: null });
      return;
    }
    if (!media.type || "video" != media.type) {
      return;
    }
    setAttributes({ backgroundVideo: media });
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        width,
        themeWidth,
        innerWidthType,
        innerWidth,
        innerWidthTablet,
        innerWidthMobile,
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
        mobilePaddingType,
        tabletPaddingType,
        desktopPaddingType,
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
        blockBorderStyle,
        blockBorderWidth,
        blockBorderRadius, 
        blockTopRadius,
        blockRightRadius,
        blockBottomRadius,
        blockLeftRadius,
        blockTopRadiusTablet,
        blockRightRadiusTablet,
        blockBottomRadiusTablet,
        blockLeftRadiusTablet,
        blockTopRadiusMobile,
        blockRightRadiusMobile,
        blockBottomRadiusMobile,
        blockLeftRadiusMobile,
        blockIsRadiusControlConnected,
        blockIsRadiusValueUpdated,
        blockBorderColor,
        containerVariationTag,
        backgroundColor,
        backgroundColor1,
        backgroundColor2,
        colorLocation1,
        colorLocation2,
        gradientDirection,
        backgroundType,
        backgroundImage,
        backgroundPosition,
        backgroundPositionMobile,
        backgroundPositionTablet,
        backgroundAttachment,
        backgroundRepeat,
        backgroundSize,
        overlayType,
        backgroundImageColor,
        gradientOverlayColor1,
        gradientOverlayLocation1,
        gradientOverlayColor2,
        gradientOverlayLocation2,
        gradientOverlayType,
        gradientOverlayAngle,
        gradientOverlayPosition,
        backgroundVideo,
        opacity,
        boxShadowColor,
        boxShadowHOffset,
        boxShadowVOffset,
        boxShadowBlur,
        boxShadowSpread,
        boxShadowPosition,
        z_index,
        z_indexMobile,
        z_indexTablet,
        align,
        imagePositionTab,
        imageSizeTab,
        backgroundSizeTablet,
        backgroundSizeMobile,
				hideWidget,
				hideWidgetTablet,
				hideWidgetMobile,
        blockIsMarginControlConnected,
        blockIsPaddingControlConnected,


        // Attributes for Layout Variations - Type 2 for now
        containerSize,
        contentWidth,
        minimumHeight,
        minimumHeightTablet,
        minimumHeightMobile,
        equalHeight,
        blockTag,
        containerOverflow,
        flexDirectionMobile,
        flexDirectionTablet,
        flexDirection,
        childrenWidth,
        alignItems,
        alignItemsMobile,
        alignItemsTablet,
        justifyContent,
        justifyContentMobile,
        justifyContentTablet,
        wrap,
        wrapMobile,
        wrapTablet,
        alignContent,
        alignContentMobile,
        alignContentTablet,
        customWidth,
        customWidthMobile,
        customWidthTablet,
      },
      setAttributes,
    } = this.props;

    const blockMarginResetValues = {
      marginTop: 10,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginTabletTop: 10,
      marginTabletRight: 0,
      marginTabletBottom: 0,
      marginTabletLeft: 0,
      marginMobileTop: 10,
      marginMobileRight: 0,
      marginMobileBottom: 0,
      marginMobileLeft: 0,
    }

    const blockPaddingResetValues = {
      paddingTop: 10,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingTabletTop: 10,
      paddingTabletRight: 0,
      paddingTabletBottom: 0,
      paddingTabletLeft: 0,
      paddingMobileTop: 10,
      paddingMobileRight: 0,
      paddingMobileBottom: 0,
      paddingMobileLeft: 0,
    }


    // backward compatibility for border radius control

    if (!blockIsRadiusValueUpdated) {
      this.props.setAttributes(
        {
          blockTopRadius:          blockBorderRadius !== undefined ? blockBorderRadius : blockTopRadius,
          blockBottomRadius:       blockBorderRadius !== undefined ? blockBorderRadius : blockBottomRadius,
          blockLeftRadius:         blockBorderRadius !== undefined ? blockBorderRadius : blockLeftRadius,
          blockRightRadius:        blockBorderRadius !== undefined ? blockBorderRadius : blockRightRadius,
          blockTopRadiusTablet:    blockBorderRadius !== undefined ? blockBorderRadius : blockTopRadiusTablet,
          blockBottomRadiusTablet: blockBorderRadius !== undefined ? blockBorderRadius : blockBottomRadiusTablet,
          blockRightRadiusTablet:  blockBorderRadius !== undefined ? blockBorderRadius : blockRightRadiusTablet,
          blockLeftRadiusTablet:   blockBorderRadius !== undefined ? blockBorderRadius : blockLeftRadiusTablet,
          blockTopRadiusMobile:    blockBorderRadius !== undefined ? blockBorderRadius : blockTopRadiusMobile,
          blockBottomRadiusMobile: blockBorderRadius !== undefined ? blockBorderRadius : blockBottomRadiusMobile,
          blockLeftRadiusMobile:   blockBorderRadius !== undefined ? blockBorderRadius : blockLeftRadiusMobile,
          blockRightRadiusMobile:  blockBorderRadius !== undefined ? blockBorderRadius : blockRightRadiusMobile,
        }
      )
      this.props.setAttributes({blockIsRadiusValueUpdated: true});
    }

    const imagePositionOptions = [
      { value: "top left", label: <div className = "rbea-background-image-positon-control-option">{__("Top Left", "responsive-block-editor-addons")}</div> },
      { value: "top center", label: <div className = "rbea-background-image-positon-control-option">{__("Top Center", "responsive-block-editor-addons")}</div> },
      { value: "top right", label: <div className = "rbea-background-image-positon-control-option">{__("Top Right", "responsive-block-editor-addons")}</div> },
      { value: "center left", label: <div className = "rbea-background-image-positon-control-option">{__("Center Left", "responsive-block-editor-addons")}</div> },
      { value: "center center", label: <div className = "rbea-background-image-positon-control-option">{__("Center Center", "responsive-block-editor-addons")}</div> },
      { value: "center right", label: <div className = "rbea-background-image-positon-control-option">{__("Center Right", "responsive-block-editor-addons")}</div> },
      { value: "bottom left", label: <div className = "rbea-background-image-positon-control-option">{__("Bottom Left", "responsive-block-editor-addons")}</div> },
      { value: "bottom center", label: <div className = "rbea-background-image-positon-control-option">{__("Bottom Center", "responsive-block-editor-addons")}</div> },
      { value: "bottom right", label: <div className = "rbea-background-image-positon-control-option">{__("Bottom Right", "responsive-block-editor-addons")}</div> },
    ];

    // Section title tags
    const sectionTags = [
      { value: "div", label: __("div", "responsive-block-editor-addons") },
      {
        value: "header",
        label: __("header", "responsive-block-editor-addons"),
      },
      {
        value: "section",
        label: __("section", "responsive-block-editor-addons"),
      },
      {
        value: "article",
        label: __("article", "responsive-block-editor-addons"),
      },
      { value: "main", label: __("main", "responsive-block-editor-addons") },
      { value: "aside", label: __("aside", "responsive-block-editor-addons") },
      {
        value: "footer",
        label: __("footer", "responsive-block-editor-addons"),
      },
    ];

    // Background image URL
    let background_image_url = backgroundImage || '';

    
    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("Container Type", "responsive-block-editor-addons")}
              initialOpen={false}
            >

              {/* Custom Width */}
              <TabPanel
                className=" responsive-size-type-field-tabs rbea-responsive-controls responsive-size-type-field__common-tabs  responsive-inline-margin"
                activeClass="active-tab"
                tabs={[
                  {
                    name: "desktop",
                    title: <Dashicon icon="desktop" />,
                    className:
                      " responsive-desktop-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "tablet",
                    title: <Dashicon icon="tablet" />,
                    className:
                      " responsive-tablet-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "mobile",
                    title: <Dashicon icon="smartphone" />,
                    className:
                      " responsive-mobile-tab  responsive-responsive-tabs",
                  },
                ]}
              >
                {(tab) => {
                  let tabout;
                  if ("mobile" === tab.name) {
                    tabout = (
                      <RbeaRangeControl
                      label={__("Custom Width", "responsive-block-editor-addons")}
                      min={-1}
                      max={99999}
                      allowReset={true}
                      resetFallbackValue={1}
                      value={customWidthMobile}
                      onChange={(value) =>
                        setAttributes({ customWidthMobile: value !== undefined ? value : 1 })
                      }
                    />
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <RbeaRangeControl
                      label={__("Custom Width", "responsive-block-editor-addons")}
                      min={-1}
                      max={99999}
                      allowReset={true}
                      resetFallbackValue={1}
                      value={customWidthTablet}
                      onChange={(value) =>
                        setAttributes({ customWidthTablet: value !== undefined ? value : 1 })
                      }
                    />
                    );
                  } else {
                    tabout = (
                      <RbeaRangeControl
                      label={__("Custom Width", "responsive-block-editor-addons")}
                      min={-1}
                      max={99999}
                      allowReset={true}
                      resetFallbackValue={1}
                      value={customWidth}
                      onChange={(value) =>
                        setAttributes({ customWidth: value !== undefined ? value : 1 })
                      }
                    />
                    );
                  }
                  return <div>{tabout}</div>;
                }}
              </TabPanel>

              {/* Minimum Height */}
              <TabPanel
                className=" responsive-size-type-field-tabs rbea-responsive-controls responsive-size-type-field__common-tabs  responsive-inline-margin"
                activeClass="active-tab"
                tabs={[
                  {
                    name: "desktop",
                    title: <Dashicon icon="desktop" />,
                    className:
                      " responsive-desktop-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "tablet",
                    title: <Dashicon icon="tablet" />,
                    className:
                      " responsive-tablet-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "mobile",
                    title: <Dashicon icon="smartphone" />,
                    className:
                      " responsive-mobile-tab  responsive-responsive-tabs",
                  },
                ]}
              >
                {(tab) => {
                  let tabout;
                  if ("mobile" === tab.name) {
                    tabout = (
                      <RbeaRangeControl
                      label={__("Minimum Height", "responsive-block-editor-addons")}
                      min={-1}
                      max={99999}
                      allowReset={true}
                      resetFallbackValue={1}
                      value={minimumHeightMobile}
                      onChange={(value) =>
                        setAttributes({ minimumHeightMobile: value !== undefined ? value : 1 })
                      }
                    />
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <RbeaRangeControl
                      label={__("Minimum Height", "responsive-block-editor-addons")}
                      min={-1}
                      max={99999}
                      allowReset={true}
                      resetFallbackValue={1}
                      value={minimumHeightTablet}
                      onChange={(value) =>
                        setAttributes({ minimumHeightTablet: value !== undefined ? value : 1 })
                      }
                    />
                    );
                  } else {
                    tabout = (
                      <RbeaRangeControl
                      label={__("Minimum Height", "responsive-block-editor-addons")}
                      min={-1}
                      max={99999}
                      allowReset={true}
                      resetFallbackValue={1}
                      value={minimumHeight}
                      onChange={(value) =>
                        setAttributes({ minimumHeight: value !== undefined ? value : 1 })
                      }
                    />
                    );
                  }
                  return <div>{tabout}</div>;
                }}
              </TabPanel>
              
              {/* Equal Height */}
              <ToggleControl
                label={__(
                "Equal Height",
                "responsive-block-editor-addons"
                )}
                checked={equalHeight}
                onChange={(value) =>
                setAttributes({ equalHeight: !equalHeight })
                }
              />
              {/* Add Helper text Later */}

              {/* HTML Tag */}
              <div className="responsive-block-html-tag-wrapper">
                <RbeaTabRadioControl
                  label={__("HTML Tag", "responsive-block-editor-addons")}
                  value={blockTag}
                  onChange={(value) => setAttributes({ blockTag: value })}
                  options={rbeaOptions.blockTags}
                  defaultValue={"div"}
                />
              </div>

              {/* Overflow */}
              <RbeaTabRadioControl
                label={__("Overflow", "responsive-block-editor-addons")}
                value={containerOverflow}
                onChange={(value) =>
                  setAttributes({ containerOverflow: value })
                }
                options={[
                  { value: "visible", label: __("Visible", "responsive-block-editor-addons") },
                  { value: "hidden", label: __("Hidden", "responsive-block-editor-addons") },
                  { value: "auto", label: __("Auto", "responsive-block-editor-addons") },
                ]}
                defaultValue={"visible"}
              />
            </PanelBody>

            <PanelBody
              title={__("Layout", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              {/* Direction */}
              <TabPanel
                className=" responsive-size-type-field-tabs rbea-responsive-controls responsive-size-type-field__common-tabs  responsive-inline-margin"
                activeClass="active-tab"
                tabs={[
                  {
                    name: "desktop",
                    title: <Dashicon icon="desktop" />,
                    className:
                      " responsive-desktop-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "tablet",
                    title: <Dashicon icon="tablet" />,
                    className:
                      " responsive-tablet-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "mobile",
                    title: <Dashicon icon="smartphone" />,
                    className:
                      " responsive-mobile-tab  responsive-responsive-tabs",
                  },
                ]}
              >
                {(tab) => {
                  let tabout;
                  if ("mobile" === tab.name) {
                    tabout = (
                      <RbeaTabRadioControl
                      label={__("Direction", "responsive-block-editor-addons")}
                      value={flexDirectionMobile}
                       options={[
                          { value: "row", label: __("row", "responsive-block-editor-addons") },
                          { value: "col", label: __("col", "responsive-block-editor-addons") },
                          { value: "row-rev", label: __("row-rev", "responsive-block-editor-addons") },
                          { value: "col-rev", label: __("col-rev", "responsive-block-editor-addons") },
                        ]}
                      defaultValue={"row"}
                      onChange={(value) =>
                        setAttributes({ flexDirectionMobile: value !== undefined ? value : 1 })
                      }
                    />
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <RbeaTabRadioControl
                      label={__("Direction", "responsive-block-editor-addons")}
                      value={flexDirectionTablet}
                       options={[
                          { value: "row", label: __("row", "responsive-block-editor-addons") },
                          { value: "col", label: __("col", "responsive-block-editor-addons") },
                          { value: "row-rev", label: __("row-rev", "responsive-block-editor-addons") },
                          { value: "col-rev", label: __("col-rev", "responsive-block-editor-addons") },
                        ]}
                      defaultValue={"row"}
                      onChange={(value) =>
                        setAttributes({ flexDirectionTablet: value !== undefined ? value : 1 })
                      }
                    />
                    );
                  } else {
                    tabout = (
                      <RbeaTabRadioControl
                      label={__("Direction", "responsive-block-editor-addons")}
                      value={flexDirection}
                       options={[
                          { value: "row", label: __("row", "responsive-block-editor-addons") },
                          { value: "col", label: __("col", "responsive-block-editor-addons") },
                          { value: "row-rev", label: __("row-rev", "responsive-block-editor-addons") },
                          { value: "col-rev", label: __("col-rev", "responsive-block-editor-addons") },
                        ]}
                      defaultValue={"row"}
                      onChange={(value) =>
                        setAttributes({ flexDirection: value !== undefined ? value : 1 })
                      }
                    />
                    );
                  }
                  return <div>{tabout}</div>;
                }}
              </TabPanel>
              {/* Add Helper text Later */}

              {/* Children Width */}
              <RbeaTabRadioControl
                label={__("Children Width", "responsive-block-editor-addons")}
                value={childrenWidth}
                onChange={(value) =>
                  setAttributes({ childrenWidth: value })
                }
                options={[
                  { value: "auto", label: __("Auto", "responsive-block-editor-addons") },
                  { value: "equal", label: __("Equal", "responsive-block-editor-addons") },
                ]}
                defaultValue={"equal"}
              />

              {/* Align Items */}
              <TabPanel
                className=" responsive-size-type-field-tabs rbea-responsive-controls responsive-size-type-field__common-tabs  responsive-inline-margin"
                activeClass="active-tab"
                tabs={[
                  {
                    name: "desktop",
                    title: <Dashicon icon="desktop" />,
                    className:
                      " responsive-desktop-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "tablet",
                    title: <Dashicon icon="tablet" />,
                    className:
                      " responsive-tablet-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "mobile",
                    title: <Dashicon icon="smartphone" />,
                    className:
                      " responsive-mobile-tab  responsive-responsive-tabs",
                  },
                ]}
              >
                {(tab) => {
                  let tabout;
                  if ("mobile" === tab.name) {
                    tabout = (
                      <RbeaTabRadioControl
                      label={__("Align Items", "responsive-block-editor-addons")}
                      value={alignItemsMobile}
                       options={[
                          { value: "row", label: __("row", "responsive-block-editor-addons") },
                          { value: "col", label: __("col", "responsive-block-editor-addons") },
                          { value: "row-rev", label: __("row-rev", "responsive-block-editor-addons") },
                          { value: "col-rev", label: __("col-rev", "responsive-block-editor-addons") },
                        ]}
                      defaultValue={"row"}
                      onChange={(value) =>
                        setAttributes({ alignItemsMobile: value !== undefined ? value : 1 })
                      }
                    />
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <RbeaTabRadioControl
                      label={__("Align Items", "responsive-block-editor-addons")}
                      value={alignItemsTablet}
                       options={[
                          { value: "row", label: __("row", "responsive-block-editor-addons") },
                          { value: "col", label: __("col", "responsive-block-editor-addons") },
                          { value: "row-rev", label: __("row-rev", "responsive-block-editor-addons") },
                          { value: "col-rev", label: __("col-rev", "responsive-block-editor-addons") },
                        ]}
                      defaultValue={"row"}
                      onChange={(value) =>
                        setAttributes({ alignItemsTablet: value !== undefined ? value : 1 })
                      }
                    />
                    );
                  } else {
                    tabout = (
                      <RbeaTabRadioControl
                      label={__("Align Items", "responsive-block-editor-addons")}
                      value={alignItems}
                       options={[
                          { value: "row", label: __("row", "responsive-block-editor-addons") },
                          { value: "col", label: __("col", "responsive-block-editor-addons") },
                          { value: "row-rev", label: __("row-rev", "responsive-block-editor-addons") },
                          { value: "col-rev", label: __("col-rev", "responsive-block-editor-addons") },
                        ]}
                      defaultValue={"row"}
                      onChange={(value) =>
                        setAttributes({ alignItems: value !== undefined ? value : 1 })
                      }
                    />
                    );
                  }
                  return <div>{tabout}</div>;
                }}
              </TabPanel>

              {/* Justify Content */}
              <TabPanel
                className=" responsive-size-type-field-tabs rbea-responsive-controls responsive-size-type-field__common-tabs  responsive-inline-margin"
                activeClass="active-tab"
                tabs={[
                  {
                    name: "desktop",
                    title: <Dashicon icon="desktop" />,
                    className:
                      " responsive-desktop-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "tablet",
                    title: <Dashicon icon="tablet" />,
                    className:
                      " responsive-tablet-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "mobile",
                    title: <Dashicon icon="smartphone" />,
                    className:
                      " responsive-mobile-tab  responsive-responsive-tabs",
                  },
                ]}
              >
                {(tab) => {
                  let tabout;
                  if ("mobile" === tab.name) {
                    tabout = (
                      <RbeaTabRadioControl
                      label={__("Justify Content", "responsive-block-editor-addons")}
                      value={justifyContentMobile}
                       options={[
                          { value: "row", label: __("row", "responsive-block-editor-addons") },
                          { value: "col", label: __("col", "responsive-block-editor-addons") },
                          { value: "row-rev", label: __("row-rev", "responsive-block-editor-addons") },
                          { value: "col-rev", label: __("col-rev", "responsive-block-editor-addons") },
                        ]}
                      defaultValue={"row"}
                      onChange={(value) =>
                        setAttributes({ justifyContentMobile: value !== undefined ? value : 1 })
                      }
                    />
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <RbeaTabRadioControl
                      label={__("Justify Content", "responsive-block-editor-addons")}
                      value={justifyContentTablet}
                       options={[
                          { value: "row", label: __("row", "responsive-block-editor-addons") },
                          { value: "col", label: __("col", "responsive-block-editor-addons") },
                          { value: "row-rev", label: __("row-rev", "responsive-block-editor-addons") },
                          { value: "col-rev", label: __("col-rev", "responsive-block-editor-addons") },
                        ]}
                      defaultValue={"row"}
                      onChange={(value) =>
                        setAttributes({ justifyContentTablet: value !== undefined ? value : 1 })
                      }
                    />
                    );
                  } else {
                    tabout = (
                      <RbeaTabRadioControl
                      label={__("Justify Content", "responsive-block-editor-addons")}
                      value={justifyContent}
                       options={[
                          { value: "row", label: __("row", "responsive-block-editor-addons") },
                          { value: "col", label: __("col", "responsive-block-editor-addons") },
                          { value: "row-rev", label: __("row-rev", "responsive-block-editor-addons") },
                          { value: "col-rev", label: __("col-rev", "responsive-block-editor-addons") },
                        ]}
                      defaultValue={"row"}
                      onChange={(value) =>
                        setAttributes({ justifyContent: value !== undefined ? value : 1 })
                      }
                    />
                    );
                  }
                  return <div>{tabout}</div>;
                }}
              </TabPanel>

              {/* Wrap */}
              <TabPanel
                className=" responsive-size-type-field-tabs rbea-responsive-controls responsive-size-type-field__common-tabs  responsive-inline-margin"
                activeClass="active-tab"
                tabs={[
                  {
                    name: "desktop",
                    title: <Dashicon icon="desktop" />,
                    className:
                      " responsive-desktop-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "tablet",
                    title: <Dashicon icon="tablet" />,
                    className:
                      " responsive-tablet-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "mobile",
                    title: <Dashicon icon="smartphone" />,
                    className:
                      " responsive-mobile-tab  responsive-responsive-tabs",
                  },
                ]}
              >
                {(tab) => {
                  let tabout;
                  if ("mobile" === tab.name) {
                    tabout = (
                      <RbeaTabRadioControl
                      label={__("Wrap", "responsive-block-editor-addons")}
                      value={wrapMobile}
                       options={[
                          { value: "row", label: __("row", "responsive-block-editor-addons") },
                          { value: "no-wrap", label: __("no-wrap", "responsive-block-editor-addons") },
                          { value: "row-rev", label: __("row-rev", "responsive-block-editor-addons") },
                        ]}
                      defaultValue={"row"}
                      onChange={(value) =>
                        setAttributes({ wrapMobile: value !== undefined ? value : 1 })
                      }
                    />
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <RbeaTabRadioControl
                      label={__("Wrap", "responsive-block-editor-addons")}
                      value={wrapTablet}
                       options={[
                          { value: "row", label: __("row", "responsive-block-editor-addons") },
                          { value: "col", label: __("col", "responsive-block-editor-addons") },
                          { value: "row-rev", label: __("row-rev", "responsive-block-editor-addons") },
                        ]}
                      defaultValue={"row"}
                      onChange={(value) =>
                        setAttributes({ wrapTablet: value !== undefined ? value : 1 })
                      }
                    />
                    );
                  } else {
                    tabout = (
                      <RbeaTabRadioControl
                      label={__("Wrap", "responsive-block-editor-addons")}
                      value={wrap}
                       options={[
                          { value: "row", label: __("row", "responsive-block-editor-addons") },
                          { value: "col", label: __("col", "responsive-block-editor-addons") },
                          { value: "row-rev", label: __("row-rev", "responsive-block-editor-addons") },
                        ]}
                      defaultValue={"row"}
                      onChange={(value) =>
                        setAttributes({ wrap: value !== undefined ? value : 1 })
                      }
                    />
                    );
                  }
                  return <div>{tabout}</div>;
                }}
              </TabPanel>

              {/* Align Content */}
              {wrap && wrap !== "no-wrap" && (
                <TabPanel
                  className=" responsive-size-type-field-tabs rbea-responsive-controls responsive-size-type-field__common-tabs  responsive-inline-margin"
                  activeClass="active-tab"
                  tabs={[
                    {
                      name: "desktop",
                      title: <Dashicon icon="desktop" />,
                      className:
                        " responsive-desktop-tab  responsive-responsive-tabs",
                    },
                    {
                      name: "tablet",
                      title: <Dashicon icon="tablet" />,
                      className:
                        " responsive-tablet-tab  responsive-responsive-tabs",
                    },
                    {
                      name: "mobile",
                      title: <Dashicon icon="smartphone" />,
                      className:
                        " responsive-mobile-tab  responsive-responsive-tabs",
                    },
                  ]}
                >
                  {(tab) => {
                    let tabout;
                    if ("mobile" === tab.name) {
                      tabout = (
                        <RbeaTabRadioControl
                        label={__("Align Content", "responsive-block-editor-addons")}
                        value={alignContentMobile}
                         options={[
                            { value: "row", label: __("row", "responsive-block-editor-addons") },
                            { value: "col", label: __("col", "responsive-block-editor-addons") },
                            { value: "row-rev", label: __("row-rev", "responsive-block-editor-addons") },
                            { value: "col-rev", label: __("col-rev", "responsive-block-editor-addons") },
                            { value: "col-rev", label: __("col-rev", "responsive-block-editor-addons") },
                            { value: "col-rev", label: __("col-rev", "responsive-block-editor-addons") },
                          ]}
                        defaultValue={"row"}
                        onChange={(value) =>
                          setAttributes({ alignContentMobile: value !== undefined ? value : 1 })
                        }
                      />
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <RbeaTabRadioControl
                        label={__("Align Content", "responsive-block-editor-addons")}
                        value={alignContentTablet}
                         options={[
                            { value: "row", label: __("row", "responsive-block-editor-addons") },
                            { value: "col", label: __("col", "responsive-block-editor-addons") },
                            { value: "row-rev", label: __("row-rev", "responsive-block-editor-addons") },
                            { value: "col-rev", label: __("col-rev", "responsive-block-editor-addons") },
                            { value: "col-rev", label: __("col-rev", "responsive-block-editor-addons") },
                            { value: "col-rev", label: __("col-rev", "responsive-block-editor-addons") },
                          ]}
                        defaultValue={"row"}
                        onChange={(value) =>
                          setAttributes({ alignContentTablet: value !== undefined ? value : 1 })
                        }
                      />
                      );
                    } else {
                      tabout = (
                        <RbeaTabRadioControl
                        label={__("Align Content", "responsive-block-editor-addons")}
                        value={alignContent}
                         options={[
                            { value: "row", label: __("row", "responsive-block-editor-addons") },
                            { value: "col", label: __("col", "responsive-block-editor-addons") },
                            { value: "row-rev", label: __("row-rev", "responsive-block-editor-addons") },
                            { value: "col-rev", label: __("col-rev", "responsive-block-editor-addons") },
                            { value: "col-rev", label: __("col-rev", "responsive-block-editor-addons") },
                            { value: "col-rev", label: __("col-rev", "responsive-block-editor-addons") },
                          ]}
                        defaultValue={"row"}
                        onChange={(value) =>
                          setAttributes({ alignContent: value !== undefined ? value : 1 })
                        }
                      />
                      );
                    }
                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
              )}

            </PanelBody>
          </InspectorTab>

          <InspectorTab key={"advance"}>
            <PanelBody
              title={__("Responsive Conditions", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ToggleControl
                label={__(
                "Hide on Desktop",
                "responsive-block-editor-addons"
                )}
                checked={hideWidget}
                onChange={(value) =>
                setAttributes({ hideWidget: !hideWidget })
                }
              />
              <ToggleControl
                label={__(
                "Hide on Tablet",
                "responsive-block-editor-addons"
                )}
                checked={hideWidgetTablet}
                onChange={(value) =>
                setAttributes({ hideWidgetTablet: !hideWidgetTablet })
                }
              />
              <ToggleControl
                label={__(
                "Hide on Mobile",
                "responsive-block-editor-addons"
                )}
                checked={hideWidgetMobile}
                onChange={(value) =>
                setAttributes({ hideWidgetMobile: !hideWidgetMobile })
                }
              />
            </PanelBody>

            <PanelBody
              title={__("Z Index", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <TabPanel
                  className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                  activeClass="active-tab"
                  tabs={[
                    {
                      name: "desktop",
                      title: <Dashicon icon="desktop" />,
                      className:
                        " responsive-desktop-tab  responsive-responsive-tabs",
                    },
                    {
                      name: "tablet",
                      title: <Dashicon icon="tablet" />,
                      className:
                        " responsive-tablet-tab  responsive-responsive-tabs",
                    },
                    {
                      name: "mobile",
                      title: <Dashicon icon="smartphone" />,
                      className:
                        " responsive-mobile-tab  responsive-responsive-tabs",
                    },
                  ]}
                >
                  {(tab) => {
                    let tabout;

                    if ("mobile" === tab.name) {
                      tabout = (
                        <RbeaRangeControl
                        label={__("z-index (Mobile)", "responsive-block-editor-addons")}
                        min={-1}
                        max={99999}
                        allowReset={true}
                        resetFallbackValue={1}
                        value={z_indexMobile}
                        onChange={(value) =>
                          setAttributes({ z_indexMobile: value !== undefined ? value : 1 })
                        }
                      />
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <RbeaRangeControl
                        label={__("z-index (Tablet)", "responsive-block-editor-addons")}
                        min={-1}
                        max={99999}
                        allowReset={true}
                        resetFallbackValue={1}
                        value={z_indexTablet}
                        onChange={(value) =>
                          setAttributes({ z_indexTablet: value !== undefined ? value : 1 })
                        }
                      />
                      );
                    } else {
                      tabout = (
                        <RbeaRangeControl
                        label={__("z-index ", "responsive-block-editor-addons")}
                        min={-1}
                        max={99999}
                        allowReset={true}
                        resetFallbackValue={1}
                        value={z_index}
                        onChange={(value) =>
                          setAttributes({ z_index: value !== undefined ? value : 1 })
                        }
                      />
                      );
                    }

                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
          </PanelBody>
          </InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
