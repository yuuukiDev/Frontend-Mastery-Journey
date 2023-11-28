const Greeting = (props) => {
    const name = props.name;
    const google_link = "https://www.google.com";
    if (name) {
        return (
            <h2 className="name-title>">
                Hello, <a href= {google_link}>{name}</a>
            </h2>
        )
    }
    return "Hello, Guest";
}

export default Greeting;