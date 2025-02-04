/**
 * BLOCK: Responsive Blocks Column
 */

// Import block dependencies and components
import Edit from "./components/edit";
import Save from "./components/save";
import attributes from "./attributes";

//Import Block icon
import ResponsiveBlockEditorAddonsIcons from "../../../block-icons";

// Import CSS
import "./styles/style.scss";
import "./styles/styles.editor.scss";

// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/container-child", {
  title: __("Container Child", "responsive-block-editor-addons"),
  description: __(
    "Add and customize container",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.container,
  category: "responsive_block_editor_addons",
  keywords: [
    __("Container", "responsive-block-editor-addons"),
    __("Child", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],
  supports: {
    align: ["wide", "full"],
  },
  parent:["responsive-block-editor-addons/container"],
  attributes: attributes,
  getEditWrapperProps(attributes) {
    return { className: "rbea-container-variation-layout" }; // Add your custom class
  },
  /* Render the block in the editor. */
  edit: (props) => {
    return <Edit {...props} />;
  },

  /* Save the block markup. */
  save: (props) => {
    return <Save {...props} />;
  },
});
