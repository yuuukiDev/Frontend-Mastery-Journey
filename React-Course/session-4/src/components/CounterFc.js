import { useState } from "react";
const CounterFc = () => {
    const [counter, setCounter] = useState(0);

    return (
        <>
        <h1>Using Hooks</h1>
        <h1>Counter:{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Add</button>
        </>
    )
}


export default CounterFc;