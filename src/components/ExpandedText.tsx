import { useState } from "react";

interface Props {
  children: string;
  maxChar?: number;
}

const ExpandedText = ({ children, maxChar = 100 }: Props) => {
  const [isButton, setButton] = useState(false);
  if (children.length <= maxChar) return <p> {children}</p>;

  const text = isButton ? children.substring(0, maxChar) : children;
  return (
    <div>
      {text}...
      <button onClick={() => setButton(!isButton)}>
        {isButton ? "more" : "less"}
      </button>
    </div>
  );
};

export default ExpandedText;
