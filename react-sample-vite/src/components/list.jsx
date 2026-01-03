import { useState } from "react";
import styles from "./list.module.css";

const List = ({ items, onClick, label }) => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleClick = (index, item) => {
    setSelectedItem(index);
    onClick(item);
  };

  return (
    <>
      <label>{label}</label>
      <ul>
        {items?.length ? (
          items.map((item, index) => (
            <li
              onClick={() => handleClick(index, item)}
              key={item}
              className={`${styles.item} ${
                selectedItem === index ? styles.active : ""
              }`}
            >
              {item}-{index}
            </li>
          ))
        ) : (
          <div> There is no item ...</div>
        )}
      </ul>
    </>
  );
};

export default List;
