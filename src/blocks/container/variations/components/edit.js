/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import EditorStyles from "./editor-styles";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InnerBlocks } = wp.blockEditor;

export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }

  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-container-variation-style-" + this.props.clientId
    );

    if (null !== element && undefined !== element) {
      element.innerHTML = EditorStyles(this.props);
    }
  }

  componentDidMount() {
    // Assigning block_id in the attribute.
    this.props.setAttributes({ block_id: this.props.clientId });
    this.props.setAttributes({ classMigrate: true });

    // Pushing Style tag for this block css.
    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-container-variation-style-" + this.props.clientId
    );
    document.head.appendChild($style);
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
      },
      setAttributes,
    } = this.props;

    // const CustomTag = `${container-variationTag}`;

    return [
      <style id={`responsive-block-editor-addons-container-variation-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>,
      <Inspector key="inspector" {...{ setAttributes, ...this.props }} />,
      <Fragment key="container-variation-block-fragment">
        <div key={`block-${block_id}`}
          className={classnames(
            this.props.className,
            "responsive-block-editor-addons-block-container-variation-outer-wrap",
            `block-${block_id}`,
            backgroundType ? `background-type-${backgroundType}` : ""
          )}
        >
          <div key={`overlay-type-${overlayType}`}
            className={classnames(
              "responsive-container-variation-wrap",
              "responsive-block-editor-addons-block-container-variation",
              `overlay-type-${overlayType}`,
              `${gradientOverlayType}`
            )}
          >
            <div key={`block-inner-wrap-${block_id}`} className="responsive-container-variation-inner-wrap">
              <InnerBlocks templateLock={false} />
            </div>
          </div>
        </div>
      </Fragment>,
    ];
  }
}
