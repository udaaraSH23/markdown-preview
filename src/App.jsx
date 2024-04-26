import React, { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState("# Enter your Markdown here");

  const textareaRef = useRef(null);

  const handlefunc = (e) => {
    setMarkdown(e.target.value);
  };

  const copyText = () => {
    textareaRef.current.select();

    document.execCommand("copy");
  };

  return (
    <div className="container vh-100 ml-0 ">
      <h1 className="text-center p-3 text-primary">Markdown Previewer</h1>
      <div className="row vh-80 ">
        <div className="col m-2 bg-info-subtle ">
          <div className="row bg-info ">
            <p className="h2 m-3 col">Editor</p>
            <button type="button" class="btn btn-dark col m-3 " onClick={copyText}>
              Copy Text
            </button>
          </div>

          <textarea
            ref={textareaRef}
            className="form-control mt-2 "
            rows="20"
            id="editor"
            name="text"
            value={markdown}
            onChange={handlefunc}
          ></textarea>
        </div>
        <div className="col m-2 bg-success-subtle">
          <div className="row bg-success">
            <p className="h1 m-3 text-dark ">Preview</p>
          </div>
          <div className=" overflow-auto mt-2 p-2 ">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
