import { useEditor, EditorContent } from "@tiptap/react";

export default function ContentEditor() {
  const editor = useEditor();

  return <EditorContent editor={editor} />;
}
