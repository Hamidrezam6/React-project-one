const List = () => {
    const items = ['apple', 'samsung', 'tesla', 'benz'];
    return (
        <>
            <label>
                 Best High Tech Companies
            </label>
            <ul>
                {items.length ? (
                    items.map((item, index) => (
                        <li 
                          onClick={(e) => {
                            console.log ('clicked', e);
                          }}
                          key={item}
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