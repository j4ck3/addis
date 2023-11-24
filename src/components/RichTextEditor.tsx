import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill'; // Import Quill without types
import 'react-quill/dist/quill.snow.css';

// Declare Quill on the Window interface
declare global {
  interface Window {
    Quill?: any;
  }
}

const MyRichTextEditor: React.FC = () => {
  const [text, setText] = useState<string>('');

  const handleChange = (value: string) => {
    setText(value);
  };

  // Optional: You can use useEffect to load Quill dynamically on the client side
  useEffect(() => {
    if (typeof window !== 'undefined' && window.Quill) {
      // Dynamically load Quill
    }
  }, []);

  if (!ReactQuill) {
    // Quill is not available, you can provide a fallback or return null
    return null;
  }

  return (
    <ReactQuill
      value={text}
      onChange={handleChange}
      modules={{
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image'],
          ['clean'],
        ],
      }}
      formats={[
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'link',
        'image',
      ]}
    />
  );
};

export default MyRichTextEditor;
