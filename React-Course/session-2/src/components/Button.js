const Button = (props) => {
    const btnHandler = () => {
        console.log("Hello");
    }
    return (
        <button className="react-btn" onClick={btnHandler}>
            {props.title}
            </button>
    );
}



export default Button;