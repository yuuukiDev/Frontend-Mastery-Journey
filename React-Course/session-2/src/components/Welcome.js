const Welcome = (props) => {
    return (
        <h3>Hello, <u>{props.name}</u> Welcome to our store you are visitng us from <u>{props.country}</u></h3>
    );
}

export default Welcome;