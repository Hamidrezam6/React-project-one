import { useState } from "react";

const List = () => {
    const items = ['apple', 'samsung', 'tesla', 'benz'];

    const [selectedItem, setSelectedItem] = useState(0);

    const handleClick = (index) => {
        setSelectedItem(index)
    };


    return (
        <>
            <label>
                 Best High Tech Companies
            </label>
            <ul>
                {items.length ? (
                    items.map((item, index) => (
                        <li 
                          onClick={() => handleClick(index)}
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