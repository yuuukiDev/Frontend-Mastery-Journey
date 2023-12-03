import { useState, useEffect } from "react";
const CounterFc = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You Clicked ${count} Times.`;
    })

    return (
        <>
        <h1>Using Hooks</h1>
        <h1>Counter:{count}</h1>
        <button onClick={() => setCount(count + 1)}>Add</button>
        </>
    )
}


export default CounterFc;