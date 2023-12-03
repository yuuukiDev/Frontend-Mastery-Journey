const List = () => {
    const arr = ['html', 'css' ,'js'];
    const list = arr.map( (ele) => {
        return <li>{ele}</li>
    });
    return (
        <ul>
            {list}
        </ul>
    );
}


export default List;