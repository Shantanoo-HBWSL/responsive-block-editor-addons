/**
 * Inspector Controls
 */
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import ResponsiveBlocksIcon from "../../../../ResponsiveBlocksIcon.json";
import renderSVG from "../../../../renderIcon";
import BoxShadowControl from "../../../../utils/components/box-shadow";
import fontOptions from "../../../../utils/googlefonts";
import { loadGoogleFont } from "../../../../utils/font";
import InspectorTab from "../../../../components/InspectorTab";
import InspectorTabs from "../../../../components/InspectorTabs";
import TypographyHelperControl from "../../../../settings-components/TypographySettings";
import RbeaRangeControl from "../../../../utils/components/rbea-range-control";
import RbeaColorControl from "../../../../utils/components/rbea-color-control";
import RbeaTabRadioControl from "../../../../utils/components/rbea-tab-radio-control";
import RbeaBackgroundTypeControl from "../../../../utils/components/rbea-background-type-control";
import ResponsiveNewMarginControl from "../../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl";
import ResponsiveNewPaddingControl from "../../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const {
	InspectorControls,
	PanelColorSettings,
	AlignmentToolbar,
	BlockControls,
	InnerBlocks,
	ColorPalette,
} = wp.blockEditor;

// Import Inspector components
const {
	PanelBody,
	RangeControl,
	SelectControl,
	BaseControl,
	TabPanel,
	ToggleControl,
	Dashicon,
	ButtonGroup,
	Button,
} = wp.components;

let svg_icons = Object.keys(ResponsiveBlocksIcon);

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
	constructor(props) {
		super(...arguments);
	}

	render() {
		// Setup the attributes
		const {
			attributes: {
				buttonAlignment,
				label,
				link,
				iconsize,
				vPadding,
				vPaddingTablet,
				vPaddingMobile,
				hPadding,
				hPaddingTablet,
				hPaddingMobile,
				vMargin,
				hMargin,
				vMarginTablet,
				hMarginTablet,
				vMarginMobile,
				hMarginMobile,
				borderWidth,
				borderRadius,
				borderStyle,
				borderColor,
				borderHColor,
				color,
				background,
				hColor,
				sizeType,
				sizeMobile,
				sizeTablet,
				lineHeight,
				lineHeightType,
				lineHeightMobile,
				lineHeightTablet,
				target,
				backgroundColor1,
				backgroundColor2,
				colorLocation1,
				colorLocation2,
				gradientDirection,
				backgroundType,
				opacity,
				icon,
				iconPosition,
				buttonLineHeight,
				buttonFontFamily,
				buttonFontSize,
				buttonFontSizeTablet,
				buttonFontSizeMobile,
				buttonFontWeight,
				boxShadowColor,
				boxShadowHOffset,
				boxShadowVOffset,
				boxShadowBlur,
				boxShadowSpread,
				boxShadowPosition,
				hoverEffect,
				icon_color,
				icon_hover_color,
				hbackground,
				iconSpace,
				inheritFromTheme,
				z_index,
				z_indexMobile,
				z_indexTablet,
				blockTopMargin,
        		blockRightMargin,
        		blockBottomMargin,
        		blockLeftMargin,
        		blockTopMarginTablet,
        		blockRightMarginTablet,
        		blockBottomMarginTablet,
        		blockLeftMarginTablet,
        		blockTopMarginMobile,
        		blockRightMarginMobile,
        		blockBottomMarginMobile,
        		blockLeftMarginMobile,
				blockIsMarginValueUpdated,
				blockTopPadding,
        		blockRightPadding,
        		blockBottomPadding,
        		blockLeftPadding,
        		blockTopPaddingTablet,
        		blockRightPaddingTablet,
        		blockBottomPaddingTablet,
        		blockLeftPaddingTablet,
        		blockTopPaddingMobile,
        		blockRightPaddingMobile,
        		blockBottomPaddingMobile,
        		blockLeftPaddingMobile,
				blockIsPaddingValueUpdated,
			},
			setAttributes,
		} = this.props;

		// Background Type Options
		const backgroundTypeOptions = [
			{ value: "color", label: __("Color", "responsive-block-editor-addons") },
			{
				value: "gradient",
				label: __("Gradient", "responsive-block-editor-addons"),
			},
		];

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

		const backgroundColorControl = (
			<Fragment>
				<RbeaColorControl
					label = {__("Background Color", "responsive-block-editor-addons")}
					colorValue={background}
					onChange={(colorValue) =>
						setAttributes({ background: colorValue })
					}
					resetColor={() => setAttributes({ background: "" })}
				/>
			</Fragment>
		);

		const backgroundColorControlHover = (
			<Fragment>
				<RbeaColorControl
					label = {__("Background Hover Color", "responsive-block-editor-addons")}
					colorValue={hbackground}
					onChange={(colorValue) =>
						setAttributes({ hbackground: colorValue })
					}
					resetColor={() => setAttributes({ hbackground: "" })}
				/>
			</Fragment>
		);

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
			
		if (!blockIsMarginValueUpdated) {
			this.props.setAttributes(
			  {
					blockTopMargin:          vMargin !== undefined ? vMargin : blockTopMargin,
					blockBottomMargin:       vMargin !== undefined ? vMargin : blockBottomMargin,
					blockLeftMargin:         hMargin !== undefined ? hMargin : blockLeftMargin,
					blockRightMargin:        hMargin !== undefined ? hMargin : blockRightMargin,
					blockTopMarginTablet:    vMarginTablet !== undefined ? vMarginTablet : blockTopMarginTablet,
					blockBottomMarginTablet: vMarginTablet !== undefined ? vMarginTablet : blockBottomMarginTablet,
					blockRightMarginTablet:  hMarginTablet !== undefined ? hMarginTablet : blockRightMarginTablet,
					blockLeftMarginTablet:   hMarginTablet !== undefined ? hMarginTablet : blockLeftMarginTablet,
					blockTopMarginMobile:    vMarginMobile !== undefined ? vMarginMobile : blockTopMarginMobile,
					blockBottomMarginMobile: vMarginMobile !== undefined ? vMarginMobile : blockBottomMarginMobile,
					blockLeftMarginMobile:   hMarginMobile !== undefined ? hMarginMobile : blockLeftMarginMobile,
					blockRightMarginMobile:  hMarginMobile !== undefined ? hMarginMobile : blockRightMarginMobile,
				}
			)
			this.props.setAttributes({blockIsMarginValueUpdated: true});
		}

		if (!blockIsPaddingValueUpdated) {
			this.props.setAttributes(
			  {
					blockTopPadding:          vPadding !== undefined ? vPadding : blockTopPadding,
					blockBottomPadding:       vPadding !== undefined ? vPadding : blockBottomPadding,
					blockLeftPadding:         hPadding !== undefined ? hPadding : blockLeftPadding,
					blockRightPadding:        hPadding !== undefined ? hPadding : blockRightPadding,
					blockTopPaddingTablet:    vPaddingTablet !== undefined ? vPaddingTablet : blockTopPaddingTablet,
					blockBottomPaddingTablet: vPaddingTablet !== undefined ? vPaddingTablet : blockBottomPaddingTablet,
					blockRightPaddingTablet:  hPaddingTablet !== undefined ? hPaddingTablet : blockRightPaddingTablet,
					blockLeftPaddingTablet:   hPaddingTablet !== undefined ? hPaddingTablet : blockLeftPaddingTablet,
					blockTopPaddingMobile:    vPaddingMobile !== undefined ? vPaddingMobile : blockTopPaddingMobile,
					blockBottomPaddingMobile: vPaddingMobile !== undefined ? vPaddingMobile : blockBottomPaddingMobile,
					blockLeftPaddingMobile:   hPaddingMobile !== undefined ? hPaddingMobile : blockLeftPaddingMobile,
					blockRightPaddingMobile:  hPaddingMobile !== undefined ? hPaddingMobile : blockRightPaddingMobile,
				}
			)
			this.props.setAttributes({blockIsPaddingValueUpdated: true});
		}

		return (
			<InspectorControls key="inspector">
				<InspectorTabs>
					<InspectorTab key={"content"}>
						<div className={"responsive-block-editor-addons-multi-buttons-child-container"}>
							<ToggleControl
								className={"responsive-block-editor-addons-inherit-from-theme-toggle"}
								label={__("Inherit from Theme", "responsive-block-editor-addons")}
								checked={inheritFromTheme}
								onChange={(value) =>
									setAttributes({ inheritFromTheme: !inheritFromTheme })
								}
							/>
							<ToggleControl
								className={"responsive-block-editor-addons-link-in-new-tab-toggle"}
								label={__("Open link in new tab", "responsive-block-editor-addons")}
								checked={target}
								onChange={() => {
									setAttributes({ target: !target });
								}}
							/>
							<SelectControl
								className={"responsive-block-editor-addons-hover-effect-select"}
								label={__("Hover Effect", "responsive-block-editor-addons")}
								value={hoverEffect}
								onChange={(value) => setAttributes({ hoverEffect: value })}
								options={[
									{
										value: "",
										label: __("None", "responsive-block-editor-addons"),
									},
									{
										value: "lift",
										label: __("Lift", "responsive-block-editor-addons"),
									},
									{
										value: "scale",
										label: __("Scale", "responsive-block-editor-addons"),
									},
									{
										value: "lift-scale",
										label: __("Lift & Scale", "responsive-block-editor-addons"),
									},
									{
										value: "scale-more",
										label: __("Scale More", "responsive-block-editor-addons"),
									},
									{
										value: "lift-scale-more",
										label: __(
											"Lift & Scale More",
											"responsive-block-editor-addons"
										),
									},
								]}
							/>
						</div>
					</InspectorTab>
					<InspectorTab key={"style"}>
						{!inheritFromTheme && (
							<Fragment>
								<PanelBody
									title={__("Color Settings", "responsive-block-editor-addons")}
									initialOpen={false}
								>
									<TabPanel
										className="responsive-block-editor-addons-inspect-tabs responsive-block-editor-addons-inspect-tabs-col-2"
										activeClass="active-tab"
										tabs={[
											{
												name: "normal",
												title: __("Normal", "responsive-block-editor-addons"),
												className: "responsive-block-editor-addons-normal-tab",
											},
											{
												name: "hover",
												title: __("Hover", "responsive-block-editor-addons"),
												className: "responsive-block-editor-addons-hover-tab",
											},
										]}
									>
										{(tabName) => {
											let btn_color_tab;
											if ("normal" === tabName.name) {
												btn_color_tab = (
													<Fragment>
														<RbeaColorControl
															label = {__("Text Color", "responsive-block-editor-addons")}
															colorValue={color}
															onChange={(colorValue) =>
																setAttributes({ color: colorValue })
															}
															resetColor={() => setAttributes({ color: "" })}
														/>
														<RbeaColorControl
															label = {__("Border Color", "responsive-block-editor-addons")}
															colorValue={borderColor}
															onChange={(colorValue) =>
																setAttributes({ borderColor: colorValue })
															}
															resetColor={() => setAttributes({ borderColor: "" })}
														/>
													</Fragment>
												);
											} else {
												btn_color_tab = (
													<Fragment>
														<RbeaColorControl
															label = {__("Text Hover Color", "responsive-block-editor-addons")}
															colorValue={hColor}
															onChange={(colorValue) =>
																setAttributes({ hColor: colorValue })
															}
															resetColor={() => setAttributes({ hColor: "" })}
														/>
														<RbeaColorControl
															label = {__("Border Hover Color", "responsive-block-editor-addons")}
															colorValue={borderHColor}
															onChange={(colorValue) =>
																setAttributes({ borderHColor: colorValue })
															}
															resetColor={() => setAttributes({ borderHColor: "" })}
														/>
													</Fragment>
												);
											}
											return <div>{btn_color_tab}</div>;
										}}
									</TabPanel>
									
									<RbeaRangeControl
										label={__("Opacity", "responsive-block-editor-addons")}
										value={opacity}
										onChange={(value) => setAttributes({ opacity: value })}
										min={0}
										max={100}
									/>
								</PanelBody>
								<PanelBody
									title={__("Background", "responsive-block-editor-addons")}
									initialOpen={false}
								>
									<RbeaBackgroundTypeControl
										label={__(
											"Type",
											"responsive-block-editor-addons"
										)}
										value={backgroundType}
										onChange={(value) => setAttributes({ backgroundType: value })}
										options={backgroundTypeOptions}
									/>
									{"color" == backgroundType && (
										// <Fragment>
										// 	<RbeaColorControl
										// 		label = {__("Background Color", "responsive-block-editor-addons")}
										// 		colorValue={background}
										// 		onChange={(colorValue) =>
										// 			setAttributes({ background: colorValue })
										// 		}
										// 		resetColor={() => setAttributes({ background: "" })}
										// 	/>											
										// 	<RbeaColorControl
										// 		label = {__("Background Hover Color", "responsive-block-editor-addons")}
										// 		colorValue={hbackground}
										// 		onChange={(colorValue) =>
										// 			setAttributes({ hbackground: colorValue })
										// 		}
										// 		resetColor={() => setAttributes({ hbackground: "" })}
										// 	/>
										// </Fragment>
										<TabPanel
										className="responsive-block-editor-addons-inspect-tabs 
										responsive-block-editor-addons-inspect-tabs-col-2  
										responsive-block-editor-addons-color-inspect-tabs"
										activeClass="active-tab"
										initialTabName="normal" // Set the default active tab here
										tabs={[
										  {
											name: "empty",
											title: __("", "responsive-block-editor-addons"),
											className: "responsive-block-editor-addons-empty-tab",
										  },
										  {
											name: "normal",
											title: __("Normal", "responsive-block-editor-addons"),
											className: "responsive-block-editor-addons-normal-tab",
										  },
										  {
											name: "empty",
											title: __("", "responsive-block-editor-addons"),
											className: "responsive-block-editor-addons-empty-tab",
										  },
										  {
											name: "hover",
											title: __("Hover", "responsive-block-editor-addons"),
											className: "responsive-block-editor-addons-hover-tab",
										  },
										  {
											name: "empty",
											title: __("", "responsive-block-editor-addons"),
											className: "responsive-block-editor-addons-empty-tab",
										  },
										]}
									  >
										{(tabName) => {
										  let color_tab;
										  if ("normal" === tabName.name) {
											color_tab = backgroundColorControl;
										  } else if("hover" === tabName.name) {
											color_tab = backgroundColorControlHover;
										  } else {
											color_tab = emptyColorControl;
										  }
										  return <div>{color_tab}</div>;
										}}
									  </TabPanel>
									)}
									{"gradient" == backgroundType && (
										<Fragment>
											<RbeaColorControl
												label = {__("Color 1", "responsive-block-editor-addons")}
												colorValue={backgroundColor1}
												onChange={(colorValue) =>
													setAttributes({ backgroundColor1: colorValue })
												}
												resetColor={() => setAttributes({ backgroundColor1: "" })}
											/>
											<RbeaColorControl
												label = {__("Color 2", "responsive-block-editor-addons")}
												colorValue={backgroundColor2}
												onChange={(colorValue) =>
													setAttributes({ backgroundColor2: colorValue })
												}
												resetColor={() => setAttributes({ backgroundColor2: "" })}
											/>
											<RbeaRangeControl
												label={__(
													"Color Location 1",
													"responsive-block-editor-addons"
												)}
												value={colorLocation1}
												min={0}
												max={100}
												onChange={(value) =>
													setAttributes({ colorLocation1: value })
												}
											/>
											<RbeaRangeControl
												label={__(
													"Color Location 2",
													"responsive-block-editor-addons"
												)}
												value={colorLocation2}
												min={0}
												max={100}
												onChange={(value) =>
													setAttributes({ colorLocation2: value })
												}
											/>
											<RbeaRangeControl
												label={__(
													"Gradient Direction",
													"responsive-block-editor-addons"
												)}
												value={gradientDirection}
												min={0}
												max={100}
												onChange={(value) =>
													setAttributes({ gradientDirection: value })
												}
											/>
										</Fragment>
									)}
								</PanelBody>
								<PanelBody
									title={__("Border", "responsive-block-editor-addons")}
									initialOpen={false}
								>
									<SelectControl
										label={__("Style", "responsive-block-editor-addons")}
										value={borderStyle}
										options={[
											{ value: "none", label: __("None", "responsive-block-editor-addons") },
											{ value: "solid", label: __("Solid", "responsive-block-editor-addons") },
											{ value: "dotted", label: __("Dotted", "responsive-block-editor-addons") },
											{ value: "dashed", label: __("Dashed", "responsive-block-editor-addons") },
											{ value: "double", label: __("Double", "responsive-block-editor-addons") },
										]}
										onChange={(value) => {
											setAttributes({ borderStyle: value });
										}}
									/>
									{borderStyle != "none" && (
										<RbeaRangeControl
											label={__("Thickness", "responsive-block-editor-addons")}
											value={borderWidth}
											onChange={(value) => {
												setAttributes({ borderWidth: value });
											}}
											min={0}
											max={20}
										/>
									)}
									<RbeaRangeControl
										label={__(
											"Rounded Corners",
											"responsive-block-editor-addons"
										)}
										value={borderRadius}
										onChange={(value) => {
											setAttributes({ borderRadius: value });
										}}
										min={0}
										max={50}
									/>
								</PanelBody>
							</Fragment>
						)}
						<PanelBody
							title={__("Spacing", "responsive-block-editor-addons")}
							initialOpen={false}
						>	
							<ResponsiveNewMarginControl
              				  attrNameTemplate="block%s"
              				  resetValues={blockMarginResetValues}
              				  {...this.props}
              				/>
              				<ResponsiveNewPaddingControl
              				  attrNameTemplate="block%s"
              				  resetValues={blockPaddingResetValues}
              				  {...this.props}
              				/>
						</PanelBody>
						<PanelBody title={__("Icon Settings", "responsive-block-editor-addons")} initialOpen={false}>
							<Fragment>
								<p className="components-base-control__label">{__("Icon", "responsive-block-editor-addons")}</p>
								<FontIconPicker
									icons={svg_icons}
									renderFunc={renderSVG}
									theme="default"
									value={icon}
									onChange={(value) => setAttributes({ icon: value })}
									isMulti={false}
									noSelectedPlaceholder={__("Select Icon", "responsive-block-editor-addons")}
								/>
								<RbeaTabRadioControl
									label={__("Icon Position", "responsive-block-editor-addons")}
									value={iconPosition}
									onChange={(value) => setAttributes({ iconPosition: value })}
									options={[
										{ value: "before", label: __("Before Text", "responsive-block-editor-addons") },
										{ value: "after", label: __("After Text", "responsive-block-editor-addons") },
									]}
									defaultValue={"before"}
								/>
								<RbeaRangeControl
									label={__("Icon Size", "responsive-block-editor-addons")}
									value={iconsize}
									onChange={(value) =>
										setAttributes({ iconsize: value !== undefined ? value : 16 })
									}
									min={5}
									max={100}
									allowReset
								/>
								<RbeaRangeControl
									label={__("Icon Spacing", "responsive-block-editor-addons")}
									value={iconSpace}
									onChange={(value) =>
										setAttributes({ iconSpace: value !== undefined ? value : 8 })
									}
									min={0}
									max={50}
									allowReset
								/>
								<RbeaColorControl
									label = {__("Icon Color", "responsive-block-editor-addons")}
									colorValue={icon_color}
									onChange={(colorValue) =>
										setAttributes({ icon_color: colorValue })
									}
									resetColor={() => setAttributes({ icon_color: "" })}
								/>
								<RbeaColorControl
									label = {__("Icon Hover Color", "responsive-block-editor-addons")}
									colorValue={icon_hover_color}
									onChange={(colorValue) =>
										setAttributes({ icon_hover_color: colorValue })
									}
									resetColor={() => setAttributes({ icon_hover_color: "" })}
								/>
								
							</Fragment>
						</PanelBody>
						
						
						{!inheritFromTheme && (
							<Fragment>
								<TypographyHelperControl
									title={__("Button Typography", "responsive-block-editor-addons")}
									attrNameTemplate="button%s"
									values = {{
										family: buttonFontFamily,
										size: buttonFontSize,
										sizeMobile: buttonFontSizeMobile,
										sizeTablet: buttonFontSizeTablet,
										weight: buttonFontWeight,
										height: buttonLineHeight,
									}}
									showLetterSpacing = { false }
									showTextTransform = { false }
									setAttributes={ setAttributes }
									{...this.props}
								/>
								<PanelBody
									title={__("Box Shadow", "responsive-block-editor-addons")}
									initialOpen={false}
								>
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
										boxShadowBlur={{ value: boxShadowBlur, label: __("Blur", "responsive-block-editor-addons") }}
										boxShadowSpread={{
											value: boxShadowSpread,
											label: __("Spread", "responsive-block-editor-addons"),
										}}
										boxShadowPosition={{
											value: boxShadowPosition,
											label: __("Position", "responsive-block-editor-addons"),
										}}
									/>
								</PanelBody>
							</Fragment>
						)}
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
				</InspectorTabs>
			</InspectorControls>
		);
	}
}
