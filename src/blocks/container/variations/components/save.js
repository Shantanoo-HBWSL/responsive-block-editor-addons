/**
 * Internal dependencies
 */
import classnames from "classnames";
import generateBackgroundImageEffect from "../../../../generateBackgroundImageEffect";
import generateCSSUnit from "../../../../generateCSSUnit";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { InnerBlocks } = wp.blockEditor;
import { hexToRgba } from "../../../../utils";

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        block_id,
        containerVariationTag,
        backgroundType,
        overlayType,
        gradientOverlayType,
        backgroundVideo,
        opacity,
        boxShadowPosition,
        align,
        anchor,
      },
      setAttributes,
    } = this.props;

    var boxShadowPositionCSS = boxShadowPosition;

    if ("outset" === boxShadowPosition) {
      boxShadowPositionCSS = "";
    }

    const CustomTag = `${containerVariationTag}`;
    let imgopacity = opacity / 100;

    return (
      <div
        id={anchor}
        className={classnames(
          this.props.className,
          "responsive-block-editor-addons-block-container-variation-outer-wrap",
          `block-${block_id}`,
          backgroundType ? `background-type-${backgroundType}` : "",
          `align${align}`
        )}
      >
        <div
          className={classnames(
            "responsive-container-variation-wrap",
            "responsive-block-editor-addons-block-container-variation",
            `overlay-type-${overlayType}`,
            `${gradientOverlayType}`
          )}
        >
          <div className="responsive-container-variation-inner-wrap">
            <InnerBlocks.Content />
          </div>
        </div>
      </div>
    );
  }
}
