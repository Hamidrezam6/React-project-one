const List = () => {
    const items = ['apple', 'samsung', 'tesla', 'benz'];
    return (
        <ul>
            {items.map((item) => {
                return <li>{item}</li>
            })}
        </ul>
        
    )
};

export default List;