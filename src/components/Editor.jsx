import React from "react";
import {
  ClassicEditor,
  Context,
  Bold,
  Essentials,
  Italic,
  Paragraph,
  List,
  Link,
  BlockQuote,
  Heading,
  Alignment,
  FontFamily,
  FontSize,
  FontColor,
  FontBackgroundColor,
  Highlight,
  Indent, 
  MediaEmbed,
  Table,
  RemoveFormat,
  CodeBlock,
  HorizontalLine,
  SpecialCharacters,
  Subscript,
  Superscript,
  PasteFromOffice,
  FindAndReplace,
  ContextWatchdog,
} from "ckeditor5";

import { CKEditor, CKEditorContext } from "@ckeditor/ckeditor5-react";

import "ckeditor5/ckeditor5.css";

function App() {
  return (
    <div style={{ width: "800px" }}>
      <CKEditorContext
        context={Context}
        contextWatchdog={ContextWatchdog}
        onChangeInitializedEditors={(editors) => {
          console.info(
            editors.editor1?.instance,
            editors.editor1?.yourAdditionalData
          );
        }}
      >
        <CKEditor
          editor={ClassicEditor}
          config={{
            plugins: [
              Essentials,
              Bold,
              Italic,
              Paragraph,
              List,
              Link,
              BlockQuote,
              Heading,
              Alignment,
              FontFamily,
              FontSize,
              FontColor,
              FontBackgroundColor,
              Highlight,
              Indent,

              MediaEmbed,
              Table,
              RemoveFormat,
              CodeBlock,
              HorizontalLine,
              SpecialCharacters,
              Subscript,
              Superscript,
              PasteFromOffice,
              FindAndReplace,
            ],
            toolbar: [
              "undo",
              "redo",
              "|",
              "bold",
              "italic",
              "underline",
              "strikethrough",
              "|",
              "link",
              "blockQuote",
              "heading",
              "alignment",
              "|",
              "fontFamily",
              "fontSize",
              "fontColor",
              "fontBackgroundColor",
              "|",
              "highlight",
              "numberedList",
              "bulletedList",
              "|",
              "indent",
              "outdent",
              "imageUpload",
              "mediaEmbed",
              "|",
              "table",
              "removeFormat",
              "codeBlock",
              "horizontalLine",
              "specialCharacters",
              "subscript",
              "superscript",
              "pasteFromOffice",
              "findAndReplace",
            ],
          }}
          data="<p>Hello from the first editor working with the context!</p>"
          id="editor1"
          contextItemMetadata={{
            name: "editor1",
            yourAdditionalData: 2,
          }}
          onReady={(editor) => {
            console.log("Editor 1 is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log("Editor 1 content:", data);
          }}
          onBlur={(event, editor) => {
            console.log("Editor 1 blurred", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Editor 1 focused", editor);
          }}
          onError={(error, details) => {
            console.error("Editor 1 encountered an error", error, details);
          }}
          onDestroy={(editor) => {
            console.log("Editor 1 destroyed", editor);
          }}
        />
      </CKEditorContext>
    </div>
  );
}

export default App;
