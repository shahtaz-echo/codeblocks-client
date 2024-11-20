"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function WritePage() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p></p>",
  });

  const handleSubmit = () => {
    if (editor) {
      console.log("HTML content:", editor.getHTML());
      console.log("JSON content:", editor.getJSON());
    }
  };

  return (
    <>
      <div className="relative ">
        <EditorContent
          editor={editor}
          className="cb_editor border px-4 h-80 bg-white/5 rounded-xl"
        />
        {editor?.getHTML()?.length < 8 && (
          <p className="text-white/20 absolute top-4 left-4 pointer-events-none">
            Start Writing
          </p>
        )}
      </div>
      <div className="flx gap-3 justify-center">
        <button className="mt-10  text-white py-3 px-10 rounded-lg text-sm font-medium uppercase leading-[13px] border border-white/40">
          Preview
        </button>
        <button
          onClick={handleSubmit}
          className="mt-10 bg-white text-black py-3 px-10 rounded-lg text-sm font-medium uppercase leading-[13px]"
        >
          Publish
        </button>
      </div>
    </>
  );
}
