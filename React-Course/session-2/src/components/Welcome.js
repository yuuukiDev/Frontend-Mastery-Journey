import { useState } from "react";
 
const Welcome = (props) => {
    let [counter, setCounter] = useState(0);
    return (
    <>
        <h3>
            Hello, <u>{props.name}</u> Welcome to our store you are visitng us from <u>{props.country}</u>
        </h3>
        <p>{counter}</p>
        <button onClick={ () => {
            setCounter(counter++);
        }}>
            +
        </button>
    </>
    );
}

export default Welcome;