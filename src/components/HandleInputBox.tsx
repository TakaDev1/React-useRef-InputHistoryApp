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
      <input type="text" value={text} onChange={handelInput} />
      <button onClick={handlePrevText}>クリック</button>
    </div>
  );
};

export default HandleInputBox;
