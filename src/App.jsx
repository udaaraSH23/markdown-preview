import React, { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState(`# Welcome to my React Markdown Previewer!

    ## This is a sub-heading...
    ### And here's some other cool stuff:
    
    Heres some code, \`<div></div>\`, between 2 backticks.
    
    \`\`\`
    // this is multi-line code:
    
    function anotherExample(firstLine, lastLine) {
      if (firstLine == '\\\`\`\`' && lastLine == '\\\`\`\`') {
        return multiLineCode;
      }
    }
    \`\`\`
    
    You can also make text **bold**.
    
    
    There's also [links](https://www.freecodecamp.org), and
    > Block Quotes!
    
    - And of course there are lists.
      - Some are bulleted.
         - With different indentation levels.
            - That look like this.
    
    
    1. And there are numbered lists too.
    1. Use just 1s if you want!
    1. And last but not least, let's not forget embedded images:
    
    ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`);

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
        <div className="col m-2 bg-success-subtle" >
          <div className="row bg-success">
            <p className="h1 m-3 text-dark ">Preview</p>
          </div>
          <div className=" overflow-auto mt-2 p-2 " id="preview">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
