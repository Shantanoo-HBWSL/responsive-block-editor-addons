/**
 * BLOCK: Responsive Blocks Column
 */

// Import block dependencies and components
import Edit from "./components/edit";
import Save from "./components/save";
import attributes from "./attributes";
import containerBlockVariations from "./components/variations";

//Import Block icon
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";

// Import CSS
import "./styles/style.scss";
import "./styles/styles.editor.scss";

// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/container", {
  title: __("Container", "responsive-block-editor-addons"),
  description: __(
    "Create beautiful layouts with flexbox-powered container blocks.",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.container,
  category: "responsive_block_editor_addons",
  keywords: [
    __("container", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],
  supports: {
    align: ["wide", "full"],
    anchor: true,
  },
  attributes: attributes,
  variations: containerBlockVariations,
  example: {
    attributes: {
        /* translators: example attributes */
        width: 900,
        blockTopPadding: 30,
    },
  },

  /**
   * Remove default WordPress classes and add a custom class.
   */
  getEditWrapperProps(attributes) {
    return { className: !attributes.isContainerVariantSelected ? "rbea-container-variation-picker": "rbea-container-variations-container" }; // Add your custom class
  },
  
  /* Render the block in the editor. */
  edit: (props) => {
    return <Edit {...props} />;
  },

//   /* Save the block markup. */
//   save: (props) => {
//     return <Save {...props} />;
//   },
});