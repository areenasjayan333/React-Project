import { useState } from "react";
interface Props {
  item: string[];
  heading: string;
  onSelected: (item: string) => void;
}

function ListGroup({ item, heading, onSelected }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {item.length === 0 && <p> No Item Found </p>}
      <ul className="list-group">
        {item.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelected(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
