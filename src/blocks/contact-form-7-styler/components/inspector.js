/**
 * Inspector Controls
 */
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import ButtonSettingsControl from "./ButtonSettings";

import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import BoxShadowControl from "../../../utils/components/box-shadow";


import BoxShadowControlHelper from "../../../utils/components/box-shadow-helper";
import ColorBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ColorBackgroundSettings";
import ImageBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ImageBackgroundSettings";
import GradientBackgroundControl from "../../../settings-components/BlockBackgroundSettings/GradientBackgroundSettings";
import ImageHoverBackgroundSettings from "../../../settings-components/BlockBackgroundSettings/ImageHoverBackgroundSettings";
import { Placeholder} from '@wordpress/components';
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import RbeaBackgroundTypeControl from "../../../utils/components/rbea-background-type-control";


// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";


// Import block components
const {
  InspectorControls,
  PanelColorSettings,
  ColorPalette,
  AlignmentToolbar,
} = wp.editor;

// Import Inspector components
const {
  PanelBody,
  ComboboxControl,
  RangeControl,
  SelectControl,
  ButtonGroup,
  Button,
  ToggleControl,
  TabPanel,
  Dashicon,
  BaseControl,
	align,
	formJson,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.toggleEnableCustomStyles = this.toggleEnableCustomStyles.bind(this);
    this.toggleShowPlaceholder = this.toggleShowPlaceholder.bind(this);
  }

  

  /*
	 * Event to set Image as while adding.
	 */
	onSelectForm ( id ) {
    const { setAttributes } = this.props;
		if ( ! id ) {
			setAttributes( { isHtml: false } );
			setAttributes( { formId: null } );
			return;
		}

		setAttributes( { isHtml: false } );
		setAttributes( { formId: id } );
	};


  /*
   * Heading Tag Change
   */
  onTagChange(value) {
    const { setAttributes } = this.props;


    setAttributes({ formTitleTag: value });
  }
  

  toggleEnableCustomStyles() {
    const { enableCustomStyles } = this.props.attributes;
    const { setAttributes } = this.props;

    setAttributes({ enableCustomStyles: !enableCustomStyles });
  }
  toggleShowPlaceholder() {
    const { showPlaceholder } = this.props.attributes;
    const { setAttributes } = this.props;

    setAttributes({ showPlaceholder: !showPlaceholder });
  }
  render() {
    // Font Weight Options
    const fontWeightOptions = [
      {
        value: "100",
        label: __("100", "responsive-block-editor-addons"),
      },
      {
        value: "200",
        label: __("200", "responsive-block-editor-addons"),
      },
      {
        value: "300",
        label: __("300", "responsive-block-editor-addons"),
      },
      {
        value: "400",
        label: __("400", "responsive-block-editor-addons"),
      },
      {
        value: "500",
        label: __("500", "responsive-block-editor-addons"),
      },
      {
        value: "600",
        label: __("600", "responsive-block-editor-addons"),
      },
      {
        value: "700",
        label: __("700", "responsive-block-editor-addons"),
      },
      {
        value: "800",
        label: __("800", "responsive-block-editor-addons"),
      },
      {
        value: "900",
        label: __("900", "responsive-block-editor-addons"),
      },
    ];

    // Text Decoration Options
    const textDecorationOptions = [
      {
        value: "none",
        label: __("Default", "responsive-block-editor-addons"),
      },
      {
        value: "underline",
        label: __("Underline", "responsive-block-editor-addons"),
      },
      {
        value: "overline",
        label: __("Overline", "responsive-block-editor-addons"),
      },
      {
        value: "line-through",
        label: __("Line Through", "responsive-block-editor-addons"),
      },
    ];

    // Background Type Options
    const backgroundTypeOptions = [
      { value: "color", label: __("Color", "responsive-block-editor-addons") },
      {
        value: "gradient",
        label: __("Gradient", "responsive-block-editor-addons"),
      },
    ];

    // Setup the attributes
    const {
      attributes: {
        formId,
        align,
        isHtml,
        formJson,
        formTitleTag,
        showFormTitle,
        showFormDescription,
        showLabels,
        showErrorMsgs,
        formAlignment,
        formAlignmentMobile,
        formAlignmentTablet,
        formWidth,
        formWidthMobile,
        formWidthTablet,
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
        formBorderRadius,
        formBorderStyle,
        formBorderWidth,
        formBorderColor,
        //Box Shadow Control
        boxShadowColor,
        boxShadowHOffset,
        boxShadowVOffset,
        boxShadowBlur,
        boxShadowSpread,
        boxShadowPosition,
        hoverboxShadowColor,
        hoverboxShadowHOffset,
        hoverboxShadowVOffset,
        hoverboxShadowBlur,
        hoverboxShadowSpread,
        hoverboxShadowPosition,
        formTitleAlignment,
        formTitleAlignmentMobile,
        formTitleAlignmentTablet,
        formTitleFontFamily,
        formTitleFontSize,
        formTitleFontSizeTablet,
        formTitleFontSizeMobile,
        formTitleFontWeight,
        formTitleLineHeight,
        formTitleLetterSpacing,
        formTitleColor,
        formDescriptionFontFamily,
        formDescriptionFontSize,
        formDescriptionFontSizeTablet,
        formDescriptionFontSizeMobile,
        formDescriptionFontWeight,
        formDescriptionLineHeight,
        formDescriptionLetterSpacing,
        formDescriptionColor,         
        inputTextColor,
        inputBackgroundColor,       
        //Border
        inputBorderRadius,
        inputBorderColor,
        inputBorderStyle,
        inputBorderWidth,
        inputBoxShadowColor,
        inputBoxShadowHOffset,
        inputBoxShadowVOffset,
        inputBoxShadowBlur,
        inputBoxShadowSpread,
        inputBoxShadowPosition,
        //Padding
        inputTopPadding,
        inputRightPadding,
        inputBottomPadding,
        inputLeftPadding,
        inputTopPaddingMobile,
        inputRightPaddingMobile,
        inputBottomPaddingMobile,
        inputLeftPaddingMobile,
        inputTopPaddingTablet,
        inputRightPaddingTablet,
        inputBottomPaddingTablet,
        inputLeftPaddingTablet,
        textIndent,
        textIndentMobile,
        textIndentTablet,
        inputWidth,
        inputWidthMobile,
        inputWidthTablet,
        inputHeight,
        inputHeightMobile,
        inputHeightTablet,
        textareaWidth,
        textareaWidthMobile,
        textareaWidthTablet,
        textareaHeight,
        textareaHeightMobile,
        textareaHeightTablet,
        //Input Typography
        inputFontFamily,
        inputFontSize,
        inputFontSizeMobile,
        inputFontSizeTablet,
        inputFontWeight,
        inputLineHeight,
        inputLetterSpacing,
        //Label Typography
        labelFontFamily,
        labelFontSize,
        labelFontSizeMobile,
        labelFontSizeTablet,
        labelFontWeight,
        labelLineHeight,
        labelLetterSpacing,
        labelSpacing,
        labelSpacingMobile,
        labelSpacingTablet,
        labelColor,
        enableCustomStyles,
        radioCheckboxSize,
        showPlaceholder,
        placeholderColor,
        //Radio/Checkbox Typography
        radioCheckboxFontFamily,
        radioCheckboxFontSize,
        radioCheckboxFontSizeMobile,
        radioCheckboxFontSizeTablet,
        radioCheckboxFontWeight,
        radioCheckboxLineHeight,
        radioCheckboxLetterSpacing,
        radioCheckboxTextColor,
        radioCheckboxColor,
        hoverRadioCheckboxColor,
        radioCheckboxBorderWidth,
        radioCheckboxBorderColor,
        radioButtonBorderRadius,
        checkboxBorderRadius,
        //Submit Typography
        submitButtonFontFamily,
        submitButtonFontSize,
        submitButtonFontSizeMobile,
        submitButtonFontSizeTablet,
        submitButtonFontWeight,
        submitButtonLineHeight,
        submitButtonLetterSpacing,
        ctaButtonAlignment,
        ctaButtonAlignmentMobile,
        ctaButtonAlignmentTablet,
        submitButtonWidth,
        submitButtonWidthMobile,
        submitButtonWidthTablet,
        submitButtonHeight,
        submitButtonHeightMobile,
        submitButtonHeightTablet,
        messageFontFamily,
        messageFontSize,
        messageFontSizeMobile,
        messageFontSizeTablet,
        messageFontWeight,
        messageLineHeight,
        messageLetterSpacing,
        successMsgColor,
        errorMsgColor,
        afterSubmitFontFamily,
        afterSubmitFontSize,
        afterSubmitFontSizeMobile,
        afterSubmitFontSizeTablet,
        afterSubmitFontWeight,
        afterSubmitLineHeight,
        afterSubmitLetterSpacing,
        afterSubmitErrorMsgColor,
        afterSubmitMsgbgColor,
        //After submit feedback spacing
        afterSubmitTopPadding,
        afterSubmitBottomPadding,
        afterSubmitLeftPadding,
        afterSubmitRightPadding,
        afterSubmitTopPaddingTablet,
        afterSubmitBottomPaddingTablet,
        afterSubmitLeftPaddingTablet,
        afterSubmitRightPaddingTablet,
        afterSubmitTopPaddingMobile,
        afterSubmitBottomPaddingMobile,
        afterSubmitLeftPaddingMobile,
        afterSubmitRightPaddingMobile,
        afterSubmitTopMargin,
        afterSubmitBottomMargin,
        afterSubmitLeftMargin,
        afterSubmitRightMargin,
        afterSubmitTopMarginTablet,
        afterSubmitBottomMarginTablet,
        afterSubmitLeftMarginTablet,
        afterSubmitRightMarginTablet,
        afterSubmitTopMarginMobile,
        afterSubmitBottomMarginMobile,
        afterSubmitLeftMarginMobile,
        afterSubmitRightMarginMobile,
        afterSubmitBorderRadius,
        afterSubmitBorderStyle,
        afterSubmitBorderWidth,
        afterSubmitBorderColor,
        
        //background 
        backgroundColorHover,
        backgroundType,
        opacity,

        //hide widget
        hideWidget,
        hideWidgetTablet,
        hideWidgetMobile,

        //Z Index
        z_index,
        z_indexMobile,
        z_indexTablet,
        inputIsPaddingControlConnected,
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
        formIsPaddingControlConnected,
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
        formIsMarginControlConnected,
        formNewSpacingValuesUpdated,
      },
      setAttributes,
    } = this.props;

    const spacingResetValues = {
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
    const formPaddingResetValues = {
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingTabletTop: 0,
      paddingTabletRight: 0,
      paddingTabletBottom: 0,
      paddingTabletLeft: 0,
      paddingMobileTop: 0,
      paddingMobileRight: 0,
      paddingMobileBottom: 0,
      paddingMobileLeft: 0,
    }
    const formMarginResetValues = {
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginTabletTop: 0,
      marginTabletRight: 0,
      marginTabletBottom: 0,
      marginTabletLeft: 0,
      marginMobileTop: 0,
      marginMobileRight: 0,
      marginMobileBottom: 0,
      marginMobileLeft: 0,
    }

     // To populate new control values with existing padding margin control values for backward compatibility.
     if (!formNewSpacingValuesUpdated) {
      this.props.setAttributes(
        {
          formTopPadding:          topPadding !== undefined ? topPadding : formTopPadding,
          formRightPadding:        rightPadding !== undefined ? rightPadding : formRightPadding,
          formBottomPadding:       bottomPadding !== undefined ? bottomPadding : formBottomPadding,
          formLeftPadding:         leftPadding !== undefined ? leftPadding : formLeftPadding,
          formTopPaddingTablet:    topPaddingTablet !== undefined ? topPaddingTablet : formTopPaddingTablet,
          formRightPaddingTablet:  rightPaddingTablet !== undefined ? rightPaddingTablet : formRightPaddingTablet,
          formBottomPaddingTablet: bottomPaddingTablet !== undefined ? bottomPaddingTablet : formBottomPaddingTablet,
          formLeftPaddingTablet:   leftPaddingTablet !== undefined ? leftPaddingTablet : formLeftPaddingTablet,
          formTopPaddingMobile:    topPaddingMobile !== undefined ? topPaddingMobile : formTopPaddingMobile,
          formRightPaddingMobile:  rightPaddingMobile !== undefined ? rightPaddingMobile : formRightPaddingMobile,
          formBottomPaddingMobile: bottomPaddingMobile !== undefined ? bottomPaddingMobile : formBottomPaddingMobile,
          formLeftPaddingMobile:   leftPaddingMobile !== undefined ? leftPaddingMobile : formLeftPaddingMobile,

          formTopMargin:          topMargin !== undefined ? topMargin : formTopMargin,
          formRightMargin:        rightMargin !== undefined ? rightMargin : formRightMargin,
          formBottomMargin:       bottomMargin !== undefined ? bottomMargin : formBottomMargin,
          formLeftMargin:         leftMargin !== undefined ? leftMargin : formLeftMargin,
          formTopMarginTablet:    topMarginTablet !== undefined ? topMarginTablet : formTopMarginTablet,
          formRightMarginTablet:  rightMarginTablet !== undefined ? rightMarginTablet : formRightMarginTablet,
          formBottomMarginTablet: bottomMarginTablet !== undefined ? bottomMarginTablet : formBottomMarginTablet,
          formLeftMarginTablet:   leftMarginTablet !== undefined ? leftMarginTablet : formLeftMarginTablet,
          formTopMarginMobile:    topMarginMobile !== undefined ? topMarginMobile : formTopMarginMobile,
          formRightMarginMobile:  rightMarginMobile !== undefined ? rightMarginMobile : formRightMarginMobile,
          formBottomMarginMobile: bottomMarginMobile !== undefined ? bottomMarginMobile : formBottomMarginMobile,
          formLeftMarginMobile:   leftMarginMobile !== undefined ? leftMarginMobile : formLeftMarginMobile,
        }
      )
    }
    this.props.setAttributes({formNewSpacingValuesUpdated: true});

    // Update color values    
    var advancedControls;
    advancedControls = (
      <Fragment>
        <RbeaColorControl
					label = {__("Color", "responsive-block-editor-addons")}
					colorValue={inputBoxShadowColor}
					onChange={(colorValue) =>
						setAttributes({ inputBoxShadowColor: colorValue })
					}
					resetColor={() => setAttributes({ inputBoxShadowColor: "" })}
				/>
        <RbeaRangeControl
          label = {_("Horizontal", "responsive-block-editor-addons")}
          value={inputBoxShadowHOffset}
          onChange={(value) =>
            setAttributes({
              inputBoxShadowHOffset: value !== undefined ? value : 0,
            })
          }
          min={-100}
          max={100}
          allowReset
        />
        <RbeaRangeControl
          label={__("Vertical", "responsive-block-editor-addons")}
          value={inputBoxShadowVOffset}
          onChange={(value) =>
            setAttributes({
              inputBoxShadowVOffset: value !== undefined ? value : 0,
            })
          }
          min={-100}
          max={100}
          allowReset
        />
        <RbeaRangeControl
          label={__("Blur", "responsive-block-editor-addons")}
          value={inputBoxShadowBlur}
          onChange={(value) =>
            setAttributes({
              inputBoxShadowBlur: value !== undefined ? value : 0,
            })
          }
          min={0}
          max={100}
          allowReset
        />
        <RbeaRangeControl
          label = {__("Spread", "responsive-block-editor-addons")}
          value={inputBoxShadowSpread}
          onChange={(value) =>
            setAttributes({
              inputBoxShadowSpread: value !== undefined ? value : 0,
            })
          }
          min={0}
          max={100}
          allowReset
        />
        <RbeaTabRadioControl
          label={__("Position", "responsive-block-editor-addons")}
          value={inputBoxShadowPosition}
          onChange={(value) => setAttributes({ inputBoxShadowPosition: value })}
          options={[
            { value: "inset", label: __("Inset", "responsive-block-editor-addons") },
            { value: "outset", label: __("Outset", "responsive-block-editor-addons") },
          ]}
          defaultValue={"inset"}
        />
      </Fragment>
    );



    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("Contact Form", "responsive-block-editor-addons")}
              initialOpen={false}
            >  
              <SelectControl
              label={__("Select Form", "responsive-block-editor-addons")}
					    value={formId}
              onChange={(newformId)=> this.props.onSelectForm(newformId) }
					    options={ responsive_globals.cf7_forms }
				      />
              
              <ToggleControl
                label={__("Form Title", "responsive-block-editor-addons")}
                checked={showFormTitle}
                onChange={() =>
                  this.props.setAttributes({
                    showFormTitle: !showFormTitle,
                  })
                }
              />
              <ToggleControl
                label={__("Form Description", "responsive-block-editor-addons")}
                checked={showFormDescription}
                onChange={() =>
                  this.props.setAttributes({
                    showFormDescription: !showFormDescription,
                  })
                }
              />
              
            </PanelBody>            
            <PanelBody
              title={__(
                "Errors",
                "responsive-block-editor-addons"
              )}
              initialOpen={false}
            >
              <ToggleControl
                label={__("Error Messages", "responsive-block-editor-addons")}
                checked={showErrorMsgs}
                onChange={() =>
                  this.props.setAttributes({
                    showErrorMsgs: !showErrorMsgs,
                  })
                }
              />
             
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody
              title={__("Form Container", "responsive-block-editor-addons")}
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
                      <Fragment>
                        <BaseControl>
                          <p>
                            {__(
                              "Alignment Mobile",
                              "responsive-block-editor-addons"
                            )}
                          </p>
                          <AlignmentToolbar
                            value={formAlignmentMobile}
                            onChange={(value) =>
                              setAttributes({
                                formAlignmentMobile: value,
                              })
                            }
                            controls={["start", "center", "end"]}
                            isCollapsed={false}
                          />
                        </BaseControl>
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <BaseControl>
                          <p>
                            {__(
                              "Alignment Tablet",
                              "responsive-block-editor-addons"
                            )}
                          </p>
                          <AlignmentToolbar
                            value={formAlignmentTablet}
                            onChange={(value) =>
                              setAttributes({
                                formAlignmentTablet: value,
                              })
                            }
                            controls={["start", "center", "end"]}
                            isCollapsed={false}
                          />
                        </BaseControl>
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <BaseControl>
                          <p>
                            {__("Alignment", "responsive-block-editor-addons")}
                          </p>
                          <AlignmentToolbar
                            value={formAlignment}
                            onChange={(value) =>
                              setAttributes({
                                formAlignment: value,
                              })
                            }
                            controls={["start", "center", "end"]}
                            isCollapsed={false}
                          />
                        </BaseControl>
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
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
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Width (%)",
                            "responsive-block-editor-addons"
                          )}
                          value={formWidthMobile}
                          onChange={(value) =>
                            setAttributes({
                              formWidthMobile: value,
                            })
                          }
                          min={0}
                          max={100}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Width (%)",
                            "responsive-block-editor-addons"
                          )}
                          value={formWidthTablet}
                          onChange={(value) =>
                            setAttributes({
                              formWidthTablet: value,
                            })
                          }
                          min={0}
                          max={100}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Width (%)",
                            "responsive-block-editor-addons"
                          )}
                          value={formWidth}
                          onChange={(value) =>
                            setAttributes({
                              formWidth: value,
                            })
                          }
                          min={0}
                          max={100}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel> 
              <PanelBody
              title={__("Background", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RbeaBackgroundTypeControl
                label={__("Type", "responsive-block-editor-addons")}
                value={backgroundType}
                onChange={(value) => setAttributes({ backgroundType: value })}
                options={backgroundTypeOptions}
              />
              {"color" == backgroundType && (
                <TabPanel
                  className="rbea-inspect-tabs rbea-inspect-tabs-col-2"
                  activeClass="active-tab"
                  tabs={[
                    {
                      name: "normal",
                      title: __("Normal", "responsive-block-editor-addons"),
                      className: "rbea-normal-tab",
                    },
                    {
                      name: "hover",
                      title: __("Hover", "responsive-block-editor-addons"),
                      className: "rbea-focus-tab",
                    },
                  ]}
                >
                  {(tabName) => {
                    let tabout;
                    if ("hover" == tabName.name) {
                      tabout = (
                        <Fragment>
                          <RbeaColorControl
                            label = {__("Background Color Hover", "responsive-block-editor-addons")}
                            colorValue={backgroundColorHover}
                            onChange={(colorValue) =>
                              setAttributes({ backgroundColorHover: colorValue })
                            }
                            resetColor={() => setAttributes({ backgroundColorHover: "" })}
                          />
                        </Fragment>
                      );
                    } else {
                      tabout = (
                        <Fragment>
                          <ColorBackgroundControl {...this.props} />
                        </Fragment>
                      );
                    }
                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
              )}
              {"gradient" == backgroundType && (
                <GradientBackgroundControl
                  {...this.props}
                  showHoverGradient={true}
                />
              )}
             
              <RbeaRangeControl
                label={__("Opacity", "responsive-block-editor-addons")}
                value={opacity}
                onChange={(value) =>
                  setAttributes({ opacity: value !== undefined ? value : 20 })
                }
                min={0}
                max={100}
                allowReset
              />
            </PanelBody>              
              <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ResponsiveNewPaddingControl
                attrNameTemplate="form%s"
                resetValues={formPaddingResetValues}
                {...this.props}
              />
              <ResponsiveNewMarginControl
                attrNameTemplate="form%s"
                resetValues={formMarginResetValues}
                {...this.props}
              />      
            </PanelBody>
            <PanelBody
              title={__("Border", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <BlockBorderHelperControl
                attrNameTemplate="form%s"
                values={{
                  radius: formBorderRadius,
                  style: formBorderStyle,
                  width: formBorderWidth,
                  color: formBorderColor,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />              

              <BoxShadowControl
                setAttributes={setAttributes}
                label={__("Box Shadow", "responsive-block-editor-addons")}
                boxShadowColor={{ value: boxShadowColor, label: __("Color", "responsive-block-editor-addons") }}
                boxShadowHOffset={{
                  value: boxShadowHOffset,
                  label: __("Horizontal", "responsive-block-editor-addons"),
                }}
                boxShadowVOffset={{
                  value: boxShadowVOffset,
                  label: __("Vertical", "responsive-block-editor-addons"),
                }}
                boxShadowBlur={{
                  value: boxShadowBlur,
                  label: __("Blur", "responsive-block-editor-addons"),
                }}
                boxShadowSpread={{
                  value: boxShadowSpread,
                  label: __("Spread", "responsive-block-editor-addons"),
                }}
                boxShadowPosition={{
                  value: boxShadowPosition,
                  label: __("Position", "responsive-block-editor-addons"),
                }}
              />
              <BoxShadowControlHelper
                setAttributes={setAttributes}
                boxShadowColor={{ value: hoverboxShadowColor }}
                boxShadowHOffset={{ value: hoverboxShadowHOffset }}
                boxShadowVOffset={{ value: hoverboxShadowVOffset }}
                boxShadowBlur={{ value: hoverboxShadowBlur }}
                boxShadowSpread={{ value: hoverboxShadowSpread }}
                boxShadowPosition={{ value: hoverboxShadowPosition }}
                label={__("Hover Box Shadow", "responsive-block-editor-addons")}
                attrNameTemplate="hover%s"
              />
            </PanelBody>            
            </PanelBody>
            <PanelBody
              title={__(
                "Title and Description",
                "responsive-block-editor-addons"
              )}
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
                      <Fragment>
                        <BaseControl>
                          <p>
                            {__(
                              "Alignment Mobile",
                              "responsive-block-editor-addons"
                            )}
                          </p>
                          <AlignmentToolbar
                            value={formTitleAlignmentMobile}
                            onChange={(value) =>
                              setAttributes({
                                formTitleAlignmentMobile: value,
                              })
                            }
                            controls={["left", "center", "right"]}
                            isCollapsed={false}
                          />
                        </BaseControl>
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <BaseControl>
                          <p>
                            {__(
                              "Alignment Tablet",
                              "responsive-block-editor-addons"
                            )}
                          </p>
                          <AlignmentToolbar
                            value={formTitleAlignmentTablet}
                            onChange={(value) =>
                              setAttributes({
                                formTitleAlignmentTablet: value,
                              })
                            }
                            controls={["left", "center", "right"]}
                            isCollapsed={false}
                          />
                        </BaseControl>
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <BaseControl>
                          <p>
                            {__("Alignment", "responsive-block-editor-addons")}
                          </p>
                          <AlignmentToolbar
                            value={formTitleAlignment}
                            onChange={(value) =>
                              setAttributes({
                                formTitleAlignment: value,
                              })
                            }
                            controls={["left", "center", "right"]}
                            isCollapsed={false}
                          />
                        </BaseControl>
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
              <SelectControl
                label={__("Title Tag", "responsive-block-editor-addons")}
                value={formTitleTag}
                onChange={(value) => {
                  this.onTagChange(value);
                }}
                options={[
                  { value: "h1", label: __("H1", "responsive-block-editor-addons") },
                  { value: "h2", label: __("H2", "responsive-block-editor-addons") },
                  { value: "h3", label: __("H3", "responsive-block-editor-addons") },
                  { value: "h4", label: __("H4", "responsive-block-editor-addons") },
                  { value: "h5", label: __("H5", "responsive-block-editor-addons") },
                  { value: "h6", label: __("H6", "responsive-block-editor-addons") },
                ]}
                defaultValue = "h1"
              />
              <TypographyHelperControl
                title={__(
                  "Form Title Typography",
                  "responsive-block-editor-addons"
                )}
                attrNameTemplate="formTitle%s"
                values={{
                  family: formTitleFontFamily,
                  size: formTitleFontSize,
                  sizeMobile: formTitleFontSizeMobile,
                  sizeTablet: formTitleFontSizeTablet,
                  weight: formTitleFontWeight,
                  height: formTitleLineHeight,
                  spacing: formTitleLetterSpacing,
                }}
                showLetterSpacing={true}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
              <RbeaColorControl
                label = {__("Form Title Color", "responsive-block-editor-addons")}
                colorValue={formTitleColor}
                onChange={(colorValue) =>
                  setAttributes({ formTitleColor: colorValue })
                }
                resetColor={() => setAttributes({ formTitleColor: "" })}
              />
              <TypographyHelperControl
                title={"Form Description Typography"}
                attrNameTemplate="formDescription%s"
                values={{
                  family: formDescriptionFontFamily,
                  size: formDescriptionFontSize,
                  sizeMobile: formDescriptionFontSizeMobile,
                  sizeTablet: formDescriptionFontSizeTablet,
                  weight: formDescriptionFontWeight,
                  height: formDescriptionLineHeight,
                  spacing: formDescriptionLetterSpacing,
                }}
                showLetterSpacing={true}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
              <RbeaColorControl
                label = {__("Form Description Color", "responsive-block-editor-addons")}
                colorValue={formDescriptionColor}
                onChange={(colorValue) =>
                  setAttributes({ formDescriptionColor: colorValue })
                }
                resetColor={() => setAttributes({ formDescriptionColor: "" })}
              />                           
            </PanelBody>
            <PanelBody
                title={__("Input and Text Area", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <RbeaColorControl
                  label = {__("Text Color", "responsive-block-editor-addons")}
                  colorValue={inputTextColor}
                  onChange={(colorValue) =>
                    setAttributes({ inputTextColor: colorValue })
                  }
                  resetColor={() => setAttributes({ inputTextColor: "" })}
                />
                <RbeaColorControl
                  label = {__("Background Color", "responsive-block-editor-addons")}
                  colorValue={inputBackgroundColor}
                  onChange={(colorValue) =>
                    setAttributes({ inputBackgroundColor: colorValue })
                  }
                  resetColor={() => setAttributes({ inputBackgroundColor: "" })}
                />
                <PanelBody
                  title={__("Border", "responsive-block-editor-addons")}
                  initialOpen={false}
                >
                  <BlockBorderHelperControl
                    attrNameTemplate="input%s"
                    values={{ radius: inputBorderRadius, style: inputBorderStyle, width: inputBorderWidth, color: inputBorderColor }}
                    setAttributes={setAttributes}
                    {...this.props}
                  />
                <PanelBody
                  title={__("Box Shadow", "responsive-block-editor-addons")}
                  initialOpen={false}
              >
                  {advancedControls}
              </PanelBody>
                </PanelBody>
                <PanelBody
                  title={__("Padding", "responsive-block-editor-addons")}
                  initialOpen={false}
                >
                  <ResponsiveNewPaddingControl
                    attrNameTemplate="input%s"
                    resetValues={spacingResetValues}
                    {...this.props}
                  />
                </PanelBody>
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
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Text Indent (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={textIndentMobile}
                          onChange={(value) =>
                            setAttributes({
                              textIndentMobile: value,
                            })
                          }
                          min={0}
                          max={60}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Text Indent (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={textIndentTablet}
                          onChange={(value) =>
                            setAttributes({
                              textIndentTablet: value,
                            })
                          }
                          min={0}
                          max={60}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Text Indent (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={textIndent}
                          onChange={(value) =>
                            setAttributes({
                              textIndent: value,
                            })
                          }
                          min={0}
                          max={60}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
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
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Input Width (%)",
                            "responsive-block-editor-addons"
                          )}
                          value={inputWidthMobile}
                          onChange={(value) =>
                            setAttributes({
                              inputWidthMobile: value,
                            })
                          }
                          min={0}
                          max={100}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Input Width (%)",
                            "responsive-block-editor-addons"
                          )}
                          value={inputWidthTablet}
                          onChange={(value) =>
                            setAttributes({
                              inputWidthTablet: value,
                            })
                          }
                          min={0}
                          max={100}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Input Width (%)",
                            "responsive-block-editor-addons"
                          )}
                          value={inputWidth}
                          onChange={(value) =>
                            setAttributes({
                              inputWidth: value,
                            })
                          }
                          min={0}
                          max={100}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
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
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Input Height (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={inputHeightMobile}
                          onChange={(value) =>
                            setAttributes({
                              inputHeightMobile: value,
                            })
                          }
                          min={0}
                          max={1000}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Input Height (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={inputHeightTablet}
                          onChange={(value) =>
                            setAttributes({
                              inputHeightTablet: value,
                            })
                          }
                          min={0}
                          max={1000}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Input Height (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={inputHeight}
                          onChange={(value) =>
                            setAttributes({
                              inputHeight: value,
                            })
                          }
                          min={0}
                          max={1000}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
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
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Textarea Width (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={textareaWidthMobile}
                          onChange={(value) =>
                            setAttributes({
                              textareaWidthMobile: value,
                            })
                          }
                          min={0}
                          max={100}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Textarea Width (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={textareaWidthTablet}
                          onChange={(value) =>
                            setAttributes({
                              textareaWidthTablet: value,
                            })
                          }
                          min={0}
                          max={100}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Textarea Width (%)",
                            "responsive-block-editor-addons"
                          )}
                          value={textareaWidth}
                          onChange={(value) =>
                            setAttributes({
                              textareaWidth: value,
                            })
                          }
                          min={0}
                          max={100}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
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
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Textarea Height (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={textareaHeightMobile}
                          onChange={(value) =>
                            setAttributes({
                              textareaHeightMobile: value,
                            })
                          }
                          min={0}
                          max={1000}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Textarea Height (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={textareaHeightTablet}
                          onChange={(value) =>
                            setAttributes({
                              textareaHeightTablet: value,
                            })
                          }
                          min={0}
                          max={1000}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Textarea Height (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={textareaHeight}
                          onChange={(value) =>
                            setAttributes({
                              textareaHeight: value,
                            })
                          }
                          min={0}
                          max={1000}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
                <TypographyHelperControl
                  title={__("Input Typography", "responsive-block-editor-addons")}
                  attrNameTemplate="input%s"
                  values={{
                    family: inputFontFamily,
                    size: inputFontSize,
                    sizeMobile: inputFontSizeMobile,
                    sizeTablet: inputFontSizeTablet,
                    weight: inputFontWeight,
                    height: inputLineHeight,
                    spacing: inputLetterSpacing,
                  }}
                  showLetterSpacing = { false }
                  showTextTransform = { false }
                  setAttributes={ setAttributes }
                  {...this.props}
                />
              </PanelBody>
            <PanelBody
              title={__(
                "Labels",
                "responsive-block-editor-addons"
              )}
              initialOpen={false}
            >
              <TypographyHelperControl
                title={__(
                  "Labels Typography",
                  "responsive-block-editor-addons"
                )}
                attrNameTemplate="label%s"
                values={{
                  family: labelFontFamily,
                  size: labelFontSize,
                  sizeMobile: labelFontSizeMobile,
                  sizeTablet: labelFontSizeTablet,
                  weight: labelFontWeight,
                  height: labelLineHeight,
                  spacing: labelLetterSpacing,
                }}
                showLetterSpacing={true}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Spacing"}
                attrNameTemplate="labelSpacing%s"
                values={{
                  desktop: labelSpacing,
                  tablet: labelSpacingTablet,
                  mobile: labelSpacingMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <RbeaColorControl
                label = {__("Label Color", "responsive-block-editor-addons")}
                colorValue={labelColor}
                onChange={(colorValue) =>
                  setAttributes({ labelColor: colorValue })
                }
                resetColor={() => setAttributes({ labelColor: "" })}
              />                    
            </PanelBody>
            <PanelBody
              title={__(
                "Placeholder",
                "responsive-block-editor-addons"
              )}
              initialOpen={false}
            >
              <ToggleControl
                label={__("Show Placeholder", "responsive-block-editor-addons")}
                checked={showPlaceholder}
                onChange={this.toggleShowPlaceholder}
              />
              {showPlaceholder == true && (    
                <PanelBody>          
              <RbeaColorControl
                label = {__("Placeholder Color", "responsive-block-editor-addons")}
                colorValue={placeholderColor}
                onChange={(colorValue) =>
                  setAttributes({ placeholderColor: colorValue })
                }
                resetColor={() => setAttributes({ placeholderColor: "" })}
              />
              </PanelBody>
              )}                         
            </PanelBody>
            <PanelBody
              title={__(
                "Radio and Checkboxes",
                "responsive-block-editor-addons"
              )}
              initialOpen={false}
            >
              <ToggleControl
                label={__("Custom Styles", "responsive-block-editor-addons")}
                checked={enableCustomStyles}
                onChange={this.toggleEnableCustomStyles}
              />
              {enableCustomStyles == true && (
                <PanelBody>
                <RbeaRangeControl
                label={__("Size", "responsive-block-editor-addons")}
                value={radioCheckboxSize}
                onChange={(value) =>
                  setAttributes({ radioCheckboxSize: value !== undefined ? value : 40 })
                }
                min={10}
                max={300}
                beforeIcon=""
                allowReset
              />
              
              
              <TypographyHelperControl
                title={__(
                  "Typography",
                  "responsive-block-editor-addons"
                )}
                attrNameTemplate="radioCheckbox%s"
                values={{
                  family: radioCheckboxFontFamily,
                  size: radioCheckboxFontSize,
                  sizeMobile: radioCheckboxFontSizeMobile,
                  sizeTablet: radioCheckboxFontSizeTablet,
                  weight: radioCheckboxFontWeight,
                  height: radioCheckboxLineHeight,
                  spacing: radioCheckboxLetterSpacing,
                }}
                showLetterSpacing={true}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              /> 
              <RbeaColorControl
                label = {__("Options Color", "responsive-block-editor-addons")}
                colorValue={radioCheckboxTextColor}
                onChange={(colorValue) =>
                  setAttributes({ radioCheckboxTextColor: colorValue })
                }
                resetColor={() => setAttributes({ radioCheckboxTextColor: "" })}
              />
              <RbeaColorControl
                label = {__("Color", "responsive-block-editor-addons")}
                colorValue={radioCheckboxColor}
                onChange={(colorValue) =>
                  setAttributes({ radioCheckboxColor: colorValue })
                }
                resetColor={() => setAttributes({ radioCheckboxColor: "" })}
              />
              <RbeaColorControl
                label = {__("Color - Checked", "responsive-block-editor-addons")}
                colorValue={hoverRadioCheckboxColor}
                onChange={(colorValue) =>
                  setAttributes({ hoverRadioCheckboxColor: colorValue })
                }
                resetColor={() => setAttributes({ hoverRadioCheckboxColor: "" })}
              />
              <RbeaRangeControl
                label={__("Border Width", "responsive-block-editor-addons")}
                value={radioCheckboxBorderWidth}
                onChange={(value) =>
                  setAttributes({ radioCheckboxBorderWidth: value !== undefined ? value : 0 })
                }
                min={0}
                max={300}
                beforeIcon=""
                allowReset
              />
              <RbeaColorControl
                label = {__("Border Color", "responsive-block-editor-addons")}
                colorValue={radioCheckboxBorderColor}
                onChange={(colorValue) =>
                  setAttributes({ radioCheckboxBorderColor: colorValue })
                }
                resetColor={() => setAttributes({ radioCheckboxBorderColor: "" })}
              />
              <RbeaRangeControl
                label={__("Checkbox Border Radius", "responsive-block-editor-addons")}
                value={checkboxBorderRadius}
                onChange={(value) =>
                  setAttributes({ checkboxBorderRadius: value !== undefined ? value : 0 })
                }
                min={0}
                max={300}
                beforeIcon=""
                allowReset
              />
              <RbeaRangeControl
                label={__("Radio Buttons Border Radius", "responsive-block-editor-addons")}
                value={radioButtonBorderRadius}
                onChange={(value) =>
                  setAttributes({ radioButtonBorderRadius: value !== undefined ? value : 0 })
                }
                min={0}
                max={300}
                beforeIcon=""
                allowReset
              />             
              
              </PanelBody>   
              )}                                  
            </PanelBody>
          
            <PanelBody
              title={__(
                "Submit Button",
                "responsive-block-editor-addons"
              )}
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
                      <Fragment>
                        <BaseControl>
                          <p>
                            {__(
                              "Alignment Mobile",
                              "responsive-block-editor-addons"
                            )}
                          </p>
                          <AlignmentToolbar
                            value={ctaButtonAlignmentMobile}
                            onChange={(value) =>
                              setAttributes({
                                ctaButtonAlignmentMobile: value,
                              })
                            }
                            controls={["left", "center", "right"]}
                            isCollapsed={false}
                          />
                        </BaseControl>
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <BaseControl>
                          <p>
                            {__(
                              "Alignment Tablet",
                              "responsive-block-editor-addons"
                            )}
                          </p>
                          <AlignmentToolbar
                            value={ctaButtonAlignmentTablet}
                            onChange={(value) =>
                              setAttributes({
                                ctaButtonAlignmentTablet: value,
                              })
                            }
                            controls={["left", "center", "right"]}
                            isCollapsed={false}
                          />
                        </BaseControl>
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <BaseControl>
                          <p>
                            {__("Alignment", "responsive-block-editor-addons")}
                          </p>
                          <AlignmentToolbar
                            value={ctaButtonAlignment}
                            onChange={(value) =>
                              setAttributes({
                                ctaButtonAlignment: value,
                              })
                            }
                            controls={["left", "center", "right"]}
                            isCollapsed={false}
                          />
                        </BaseControl>
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
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
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Button Width (%)",
                            "responsive-block-editor-addons"
                          )}
                          value={submitButtonWidthMobile}
                          onChange={(value) =>
                            setAttributes({
                              submitButtonWidthMobile: value,
                            })
                          }
                          min={0}
                          max={100}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Button Width (%)",
                            "responsive-block-editor-addons"
                          )}
                          value={submitButtonWidthTablet}
                          onChange={(value) =>
                            setAttributes({
                              submitButtonWidthTablet: value,
                            })
                          }
                          min={0}
                          max={100}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Button Width (%)",
                            "responsive-block-editor-addons"
                          )}
                          value={submitButtonWidth}
                          onChange={(value) =>
                            setAttributes({
                              submitButtonWidth: value,
                            })
                          }
                          min={0}
                          max={100}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
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
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Button Height (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={submitButtonHeightMobile}
                          onChange={(value) =>
                            setAttributes({
                              submitButtonHeightMobile: value,
                            })
                          }
                          min={0}
                          max={1000}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Button Height (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={submitButtonHeightTablet}
                          onChange={(value) =>
                            setAttributes({
                              submitButtonHeightTablet: value,
                            })
                          }
                          min={0}
                          max={1000}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Button Height (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={submitButtonHeight}
                          onChange={(value) =>
                            setAttributes({
                              submitButtonHeight: value,
                            })
                          }
                          min={0}
                          max={1000}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
              <TypographyHelperControl
                title={__(
                  "Button Typography",
                  "responsive-block-editor-addons"
                )}
                attrNameTemplate="submitButton%s"
                values={{
                  family: submitButtonFontFamily,
                  size: submitButtonFontSize,
                  sizeMobile: submitButtonFontSizeMobile,
                  sizeTablet: submitButtonFontSizeTablet,
                  weight: submitButtonFontWeight,
                  height: submitButtonLineHeight,
                  spacing: submitButtonLetterSpacing,
                }}
                showLetterSpacing={true}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ButtonSettingsControl
                  {...this.props}
                  showMarginControls={false}
                  showBackColorOpacity={false}
                  showGradientHover={false}
                  showTextOpacity={false}
                />                        
            </PanelBody>
            <PanelBody
              title={__("Messages", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <TypographyHelperControl
                title={__(
                  "Messages Typography",
                  "responsive-block-editor-addons"
                )}
                attrNameTemplate="message%s"
                values={{
                  family: messageFontFamily,
                  size: messageFontSize,
                  sizeMobile: messageFontSizeMobile,
                  sizeTablet: messageFontSizeTablet,
                  weight: messageFontWeight,
                  height: messageLineHeight,
                  spacing: messageLetterSpacing,
                }}
                showLetterSpacing={true}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />              
              <RbeaColorControl
                label = {__("Error Message Color", "responsive-block-editor-addons")}
                colorValue={errorMsgColor}
                onChange={(colorValue) =>
                  setAttributes({ errorMsgColor: colorValue })
                }
                resetColor={() => setAttributes({ errorMsgColor: "" })}
              />
              
            </PanelBody>
            <PanelBody
              title={__("After Submit Feedback", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <TypographyHelperControl
                title={__(
                  "Typography",
                  "responsive-block-editor-addons"
                )}
                attrNameTemplate="afterSubmit%s"
                values={{
                  family: afterSubmitFontFamily,
                  size: afterSubmitFontSize,
                  sizeMobile: afterSubmitFontSizeMobile,
                  sizeTablet: afterSubmitFontSizeTablet,
                  weight: afterSubmitFontWeight,
                  height: afterSubmitLineHeight,
                  spacing: afterSubmitLetterSpacing,
                }}
                showLetterSpacing={true}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
              <RbeaColorControl
                label = {__("Success Message Color", "responsive-block-editor-addons")}
                colorValue={successMsgColor}
                onChange={(colorValue) =>
                  setAttributes({ successMsgColor: colorValue })
                }
                resetColor={() => setAttributes({ successMsgColor: "" })}
              />
              <RbeaColorControl
                label = {__("Error Message Color", "responsive-block-editor-addons")}
                colorValue={afterSubmitErrorMsgColor}
                onChange={(colorValue) =>
                  setAttributes({ afterSubmitErrorMsgColor: colorValue })
                }
                resetColor={() => setAttributes({ afterSubmitErrorMsgColor: "" })}
              />
              <RbeaColorControl
                label = {__("Background Color", "responsive-block-editor-addons")}
                colorValue={afterSubmitMsgbgColor}
                onChange={(colorValue) =>
                  setAttributes({ afterSubmitMsgbgColor: colorValue })
                }
                resetColor={() => setAttributes({ afterSubmitMsgbgColor: "" })}
              />
              <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
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
                      className: " responsive-tablet-tab  responsive-responsive-tabs",
              },
                  {
                      name: "mobile",
                          title: <Dashicon icon="smartphone" />,
                      className: " responsive-mobile-tab  responsive-responsive-tabs",
                  },
              ]}
              >
                  {(tab) => {
                      let tabout;

                      if ("mobile" === tab.name) {
                          tabout = (
                              <Fragment>
                              <p>{__("Padding Mobile", "responsive-block-editor-addons")}</p>
                                  <RbeaRangeControl
                                      label={__(
                                          "Top",
                                          "responsive-block-editor-addons"
                                        )}
                                      min={0}
                                      max={2000}
                                      allowReset={true}
                                      value={afterSubmitTopPaddingMobile}
                                      onChange={(value) =>
                                      setAttributes({
                                        afterSubmitTopPaddingMobile: value,
                                      })
                                    }
                                  />
                                  <RbeaRangeControl
                                      label={__(
                                          "Bottom",
                                          "responsive-block-editor-addons"
                                        )}
                                      min={0}
                                      max={2000}
                          allowReset={true}
                                      value={afterSubmitBottomPaddingMobile}
                                      onChange={(value) =>
                                      setAttributes({
                                        afterSubmitBottomPaddingMobile: value,
                                      })
                                    }
                                  />
                                  <RbeaRangeControl
                                      label={__(
                                          "Left",
                                          "responsive-block-editor-addons"
                                        )}
                                      min={0}
                                      max={2000}
                          allowReset={true}
                                      value={afterSubmitLeftPaddingMobile}
                                      onChange={(value) =>
                                      setAttributes({
                                        afterSubmitLeftPaddingMobile: value,
                                      })
                                    }
                                  />
                                  <RbeaRangeControl
                                      label={__(
                                          "Right",
                                          "responsive-block-editor-addons"
                                        )}
                                      min={0}
                                      max={2000}
                          allowReset={true}
                                      value={afterSubmitRightPaddingMobile}
                                      onChange={(value) =>
                                      setAttributes({
                                        afterSubmitRightPaddingMobile: value,
                                      })
                                    }
                                  />
                              </Fragment>
                      );
                      } else if ("tablet" === tab.name) {
                          tabout = (
                              <Fragment>
                              <p>{__("Padding Tablet", "responsive-block-editor-addons")}</p>
                                  <RbeaRangeControl
                                      label={__(
                                          "Top",
                                          "responsive-block-editor-addons"
                                    )}
                                      min={0}
                                      max={2000}
                          allowReset={true}
                                      value={afterSubmitTopPaddingTablet}
                                      onChange={(value) =>
                                      setAttributes({
                                        afterSubmitTopPaddingTablet: value,
                                      })
                                    }
                                  />
                                  <RbeaRangeControl
                                      label={__(
                                          "Bottom",
                                          "responsive-block-editor-addons"
                                    )}
                                      min={0}
                                      max={2000}
                          allowReset={true}
                                      value={afterSubmitBottomPaddingTablet}
                                      onChange={(value) =>
                                      setAttributes({
                                        afterSubmitBottomPaddingTablet: value,
                                      })
                                    }
                                  />
                                  <RbeaRangeControl
                                      label={__(
                                          "Left",
                                          "responsive-block-editor-addons"
                                    )}
                                      min={0}
                                      max={2000}
                          allowReset={true}
                                      value={afterSubmitLeftPaddingTablet}
                                      onChange={(value) =>
                                      setAttributes({
                                        afterSubmitLeftPaddingTablet: value,
                                      })
                                    }
                                  />
                                  <RbeaRangeControl
                                      label={__(
                                          "Right",
                                          "responsive-block-editor-addons"
                                    )}
                                      min={0}
                                      max={2000}
                          allowReset={true}
                                      value={afterSubmitRightPaddingTablet}
                                      onChange={(value) =>
                                      setAttributes({
                                        afterSubmitRightPaddingTablet: value,
                                      })
                                    }
                                  />
                              </Fragment>
                      );
                      } else {
                          tabout = (
                              <Fragment>
                              <p>{__("Padding", "responsive-block-editor-addons")}</p>
                                  <RbeaRangeControl
                                      label={__(
                                          "Top",
                                          "responsive-block-editor-addons"
                                    )}
                                      min={0}
                                      max={2000}
                          allowReset={true}
                                      value={afterSubmitTopPadding}
                                      onChange={(value) =>
                                      setAttributes({
                                        afterSubmitTopPadding: value,
                                      })
                                    }
                                  />
                                  <RbeaRangeControl
                                      label={__(
                                          "Bottom",
                                          "responsive-block-editor-addons"
                                    )}
                                      min={0}
                                      max={2000}
                          allowReset={true}
                                      value={afterSubmitBottomPadding}
                                      onChange={(value) =>
                                      setAttributes({
                                        afterSubmitBottomPadding: value,
                                      })
                                    }
                                  />
                                  <RbeaRangeControl
                                      label={__(
                                          "Left",
                                          "responsive-block-editor-addons"
                                    )}
                                      min={0}
                                      max={2000}
                          allowReset={true}
                                      value={afterSubmitLeftPadding}
                                      onChange={(value) =>
                                      setAttributes({
                                        afterSubmitLeftPadding: value,
                                      })
                                    }
                                  />
                                  <RbeaRangeControl
                                      label={__(
                                          "Right",
                                          "responsive-block-editor-addons"
                                    )}
                                      min={0}
                                      max={2000}
                          allowReset={true}
                                      value={afterSubmitRightPadding}
                                      onChange={(value) =>
                                      setAttributes({
                                        afterSubmitRightPadding: value,
                                      })
                                    }
                                  />

                              </Fragment>
                      );
                      }

                      return <div>{tabout}</div>;
                  }}
              </TabPanel>
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
                      className: " responsive-tablet-tab  responsive-responsive-tabs",
              },
                  {
                      name: "mobile",
                          title: <Dashicon icon="smartphone" />,
                      className: " responsive-mobile-tab  responsive-responsive-tabs",
                  },
              ]}
              >
                  {(tab) => {
                      let tabout;

                      if ("mobile" === tab.name) {
                          tabout = (
                              <Fragment>
                              <p>{__("Margin Mobile", "responsive-block-editor-addons")}</p>
                                  <RbeaRangeControl
                                      label={__(
                                          "Top",
                                          "responsive-block-editor-addons"
                                        )}
                                      min={0}
                                      max={2000}
                                      allowReset={true}
                                      value={afterSubmitTopMarginMobile}
                                      onChange={(value) =>
                                      setAttributes({
                                        afterSubmitTopMarginMobile: value,
                                      })
                                    }
                                  />
                                  <RbeaRangeControl
                                      label={__(
                                          "Bottom",
                                          "responsive-block-editor-addons"
                                        )}
                                      min={0}
                                      max={2000}
                          allowReset={true}
                                      value={afterSubmitBottomMarginMobile}
                                      onChange={(value) =>
                                      setAttributes({
                                        afterSubmitBottomMarginMobile: value,
                                      })
                                    }
                                  />
                                  <RbeaRangeControl
                                      label={__(
                                          "Left",
                                          "responsive-block-editor-addons"
                                        )}
                                      min={0}
                                      max={2000}
                          allowReset={true}
                                      value={afterSubmitLeftMarginMobile}
                                      onChange={(value) =>
                                      setAttributes({
                                        afterSubmitLeftMarginMobile: value,
                                      })
                                    }
                                  />
                                  <RbeaRangeControl
                                      label={__(
                                          "Right",
                                          "responsive-block-editor-addons"
                                        )}
                                      min={0}
                                      max={2000}
                          allowReset={true}
                                      value={afterSubmitRightMarginMobile}
                                      onChange={(value) =>
                                      setAttributes({
                                        afterSubmitRightMarginMobile: value,
                                      })
                                    }
                                  />
                              </Fragment>
                      );
                      } else if ("tablet" === tab.name) {
                          tabout = (
                              <Fragment>
                              <p>{__("Margin Tablet", "responsive-block-editor-addons")}</p>
                                  <RbeaRangeControl
                                      label={__(
                                          "Top",
                                          "responsive-block-editor-addons"
                                    )}
                                      min={0}
                                      max={2000}
                          allowReset={true}
                                      value={afterSubmitTopMarginTablet}
                                      onChange={(value) =>
                                      setAttributes({
                                        afterSubmitTopMarginTablet: value,
                                      })
                                    }
                                  />
                                  <RbeaRangeControl
                                      label={__(
                                          "Bottom",
                                          "responsive-block-editor-addons"
                                    )}
                                      min={0}
                                      max={2000}
                          allowReset={true}
                                      value={afterSubmitBottomMarginTablet}
                                      onChange={(value) =>
                                      setAttributes({
                                        afterSubmitBottomMarginTablet: value,
                                      })
                                    }
                                  />
                                  <RbeaRangeControl
                                      label={__(
                                          "Left",
                                          "responsive-block-editor-addons"
                                    )}
                                      min={0}
                                      max={2000}
                          allowReset={true}
                                      value={afterSubmitLeftMarginTablet}
                                      onChange={(value) =>
                                      setAttributes({
                                        afterSubmitLeftMarginTablet: value,
                                      })
                                    }
                                  />
                                  <RbeaRangeControl
                                      label={__(
                                          "Right",
                                          "responsive-block-editor-addons"
                                    )}
                                      min={0}
                                      max={2000}
                          allowReset={true}
                                      value={afterSubmitRightMarginTablet}
                                      onChange={(value) =>
                                      setAttributes({
                                        afterSubmitRightMarginTablet: value,
                                      })
                                    }
                                  />
                              </Fragment>
                      );
                      } else {
                          tabout = (
                              <Fragment>
                              <p>{__("Margin", "responsive-block-editor-addons")}</p>
                                  <RbeaRangeControl
                                      label={__(
                                          "Top",
                                          "responsive-block-editor-addons"
                                    )}
                                      min={0}
                                      max={2000}
                          allowReset={true}
                                      value={afterSubmitTopMargin}
                                      onChange={(value) =>
                                      setAttributes({
                                        afterSubmitTopMargin: value,
                                      })
                                    }
                                  />
                                  <RbeaRangeControl
                                      label={__(
                                          "Bottom",
                                          "responsive-block-editor-addons"
                                    )}
                                      min={0}
                                      max={2000}
                          allowReset={true}
                                      value={afterSubmitBottomMargin}
                                      onChange={(value) =>
                                      setAttributes({
                                        afterSubmitBottomMargin: value,
                                      })
                                    }
                                  />
                                  <RbeaRangeControl
                                      label={__(
                                          "Left",
                                          "responsive-block-editor-addons"
                                    )}
                                      min={0}
                                      max={2000}
                          allowReset={true}
                                      value={afterSubmitLeftMargin}
                                      onChange={(value) =>
                                      setAttributes({
                                        afterSubmitLeftMargin: value,
                                      })
                                    }
                                  />
                                  <RbeaRangeControl
                                      label={__(
                                          "Right",
                                          "responsive-block-editor-addons"
                                    )}
                                      min={0}
                                      max={2000}
                          allowReset={true}
                                      value={afterSubmitRightMargin}
                                      onChange={(value) =>
                                      setAttributes({
                                        afterSubmitRightMargin: value,
                                      })
                                    }
                                  />

                              </Fragment>
                      );
                      }

                      return <div>{tabout}</div>;
                  }}
              </TabPanel>             
            </PanelBody>
            <PanelBody
              title={__("Border", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <BlockBorderHelperControl
                attrNameTemplate="afterSubmit%s"
                values={{
                  radius: afterSubmitBorderRadius,
                  style: afterSubmitBorderStyle,
                  width: afterSubmitBorderWidth,
                  color: afterSubmitBorderColor,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              
            </PanelBody>            
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"advance"}>
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
          </InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
