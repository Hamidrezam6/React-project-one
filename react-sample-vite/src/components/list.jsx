import { useState } from "react";

const List = ({items, onClick}) => {

    const [selectedItem, setSelectedItem] = useState(0);

    const handleClick = (index, item) => {
        setSelectedItem(index);
        onClick(item);
    };


    return (
        <>
            <label>
                 Best High Tech Companies
            </label>
            <ul>
                {items?.length ? (
                    items.map((item, index) => (
                        <li 
                          onClick={() => handleClick(index, item)}
                          key={item}
                          className={selectedItem === index ? "selectedItem" : ""}
                        >
                          {item}---{index}
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