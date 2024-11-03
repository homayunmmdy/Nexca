import { Button } from "@/components";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import { MdFormatItalic, MdOutlineFormatBold } from "react-icons/md";

interface TiptapEditorProps {
  content: string;
  onChange: (content: string) => void;
}

const TiptapEditor: React.FC<TiptapEditorProps> = ({ content, onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="rounded-md border border-gray-300 p-2">
      <div className="mb-2 flex gap-2">
        <Button
          onClick={() => editor.chain().focus().toggleBold().run()}
          title={<MdOutlineFormatBold size={20} />}
          type="button"
          color="btn-ghost"
          style={editor.isActive("bold") ? "is-active" : ""}
        />

        <Button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          title={<MdFormatItalic size={20} />}
          type="button"
          color="btn-ghost"
          style={editor.isActive("italic") ? "is-active" : ""}
        />
      </div>
      <EditorContent editor={editor} className="prose max-w-none" />
    </div>
  );
};

export default TiptapEditor;
