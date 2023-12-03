import React, { useState } from "react";


// const Form = () => {
//     const [name, setName] = useState(' ');
//     const [password, setPassword] = useState(' ');
//     const [gender, setGender] = useState(' ');
//     const nameHandler = (value) => {
//         setName(value);
//     }
//     const passwordHandler = (value) => {
//         setPassword(value);
//     }
//     const genderHandler = (value) => {
//         setGender(value);
//     }
//     return (
//         <form onSubmit= {(e) => {
//             e.preventDefault();
//             console.log("Form Submitted")
//             console.log({
//                 name,
//                 password,
//                 gender,
//             });
//         }}>
//             <label>Name</label>
//             <input type="text" placeholder="your name" onChange={(event) => {
//                 nameHandler(event.target.value);
//             }} />
//                 <br />
//                 <label>Password</label>
//                 <input type="password" placeholder="password" onChange={(event) => {
//                     passwordHandler(event.target.value);
//                 }} />
//                 <br />
//                 <label>Gender</label>
//                 <select onChange={(event) => {
//                     genderHandler(event.target.value);
//                 }}> 
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                 </select>
//                 <button type="submit">Submit</button>
//         </form>
//     );
// }


class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: '',
            gender: '',
        };
    }
    nameHandler = (value) => {
        this.setState({name: value})
    }
    passwordHandler = (value) => {
        this.setState({password: value})
    }
    genderHandler = (value) => {
        this.setState({gender: value})
    }
    render () {
        return (
            <form onSubmit= {(e) => {
                e.preventDefault();
                console.log("Form Submitted")
                console.log(this.state)
            }}>
                <label>Name</label>
                <input type="text" placeholder="your name" onChange={(event) => {
                    this.nameHandler(event.target.value);
                }} />
                    <br />
                    <label>Password</label>
                    <input type="password" placeholder="password" onChange={(event) => {
                        this.passwordHandler(event.target.value);
                    }} />
                    <br />
                    <label>Gender</label>
                    <select onChange={(event) => {
                        this.genderHandler(event.target.value);
                    }}> 
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <button type="submit">Submit</button>
            </form>
        );
    }
}
export default Form;