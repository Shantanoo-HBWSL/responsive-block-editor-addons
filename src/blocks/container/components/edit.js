/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import ResponsiveBlockEditorAddonsIcons from "../../../block-icons";
import EditorStyles from "./editor-styles";
import variations from './variations';
import {
  __experimentalBlockVariationPicker as BlockVariationPicker,
} from '@wordpress/block-editor';
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { RichText, BlockControls, InnerBlocks } = wp.blockEditor;

export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }
  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-container-style-" +
        this.props.clientId
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
      "responsive-block-editor-addons-container-style-" +
        this.props.clientId
    );
    document.head.appendChild($style);
  }
  render() {
    // Setup the attributes
    const {
      attributes: {
        isContainerVariantSelected,
        containerVariant,
        containerSubmitBtnLabel,
        containerSuccessMessage,
        containerErrorMessage,
        containerEmailTo,
        containerEmailSubject,
        block_id,
      },
      setAttributes,
      isSelected,
    } = this.props;

    const VariantSelector = () => {
      return (
        <BlockVariationPicker
					icon={ResponsiveBlockEditorAddonsIcons.container}
					label={__( 'Container' )}
					instructions={__( 'Select a layout to start with.' )}
					onSelect={(variation) => {
            setAttributes({
              isContainerVariantSelected: true,
              containerVariant: variation && variation.key ? variation.key : 'skip'
            })
          }}
          className={""}
					variations={variations}
				/>
      )
    }

    return [
      <style id={`responsive-block-editor-addons-container-style-${this.props.clientId}`}>{EditorStyles(this.props)}</style>,
      <Inspector key="inspector" {...{ setAttributes, ...this.props }} />,
        <div key={`-container-block-${block_id}`}
          className={classnames(
            this.props.className,
            "responsive-container-wrap",
            "responsive-block-editor-addons-block-variation-picker",
            `block-${block_id}`,
            // backgroundType ? `background-type-${backgroundType}` : ""
          )}
        >
          {!isContainerVariantSelected && VariantSelector()}
          {isContainerVariantSelected && 
            <div className={containerVariant === 'layout_1' ? variations[0]?.className : 
                  containerVariant === 'layout_2' ? variations[1]?.className : 
                  containerVariant === 'layout_3' ? variations[2]?.className :
                  containerVariant === 'layout_4' ? variations[3]?.className :
                  containerVariant === 'layout_5' ? variations[4]?.className :
                  containerVariant === 'layout_6' ? variations[5]?.className :
                  containerVariant === 'layout_7' ? variations[6]?.className :
                  containerVariant === 'layout_8' ? variations[7]?.className :
                  containerVariant === 'layout_9' ? variations[8]?.className :
                  containerVariant === 'layout_10' ? variations[9]?.className :
                  containerVariant === 'layout_11' ? variations[10]?.className :
                  variations[11]?.className
                } id={`rbea-container-${block_id}`}>
              <InnerBlocks
                templateLock={false}
                template={containerVariant === 'layout_1' ? variations[0]?.innerBlocks : 
                  containerVariant === 'layout_2' ? variations[1]?.innerBlocks : 
                  containerVariant === 'layout_3' ? variations[2]?.innerBlocks :
                  containerVariant === 'layout_4' ? variations[3]?.innerBlocks :
                  containerVariant === 'layout_5' ? variations[4]?.innerBlocks :
                  containerVariant === 'layout_6' ? variations[5]?.innerBlocks :
                  containerVariant === 'layout_7' ? variations[6]?.innerBlocks :
                  containerVariant === 'layout_8' ? variations[7]?.innerBlocks :
                  containerVariant === 'layout_9' ? variations[8]?.innerBlocks :
                  containerVariant === 'layout_10' ? variations[9]?.innerBlocks :
                  containerVariant === 'layout_11' ? variations[10]?.innerBlocks :
                  variations[11]?.innerBlocks
                }
              />
            </div>
          }
        </div>
    ];
  }
}
