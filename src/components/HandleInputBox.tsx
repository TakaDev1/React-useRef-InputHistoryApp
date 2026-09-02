import React, { useRef, useState } from "react";

const HandleInputBox = () => {
  const [text, setText] = useState<string>("");
  const prevText = useRef<string | null>(null);

  const handelInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handlePrevText = () => {
    console.log(`前回入力した値: ${prevText.current ? prevText.current : "空"}`);
    prevText.current = text;
  };
  return (
    <div>
      <input type="text" value={text} onChange={handelInput} className="p-2 border rounded mr-5" />
      <button onClick={handlePrevText} className="p-2 bg-blue-500 text-whtie rounded">
        クリック
      </button>
    </div>
  );
};

export default HandleInputBox;
