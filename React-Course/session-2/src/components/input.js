const Input = (props) => {
    return (
        <>
        <label>name</label>
        <input type="name" placeholder="Type Here" onChange={(event) => {
            console.log(event.target.value )
        }}/>
        </>

    )

}


export default Input;