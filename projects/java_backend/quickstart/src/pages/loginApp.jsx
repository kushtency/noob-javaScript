import { useState } from "react";

const LoginApp = () =>{
    const [userDetails, setUserDetails] = useState({});
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    

    const userNameHandler = (e) => {
        setUserName(e.target.value);
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }

    const loginHandler = (e) => {
        e.preventDefault();
        const userData = {};
        username ? userData["userName"] = username : userData["userName"] = "";
        password ? userData["password"] = password : userData["password"] = "";
        setUserDetails(userData);
    }

    return(
        <form>
            <label htmlFor="email">Enter the email</label>
            <input type={"text"} name="email" onChange={(e) => userNameHandler(e)}/>
            <label htmlFor="password" >Enter the password</label>
            <input type={"password"} name="password" onChange={(e) => passwordHandler(e)}/>
            <button type="submit" onClick={(e) => loginHandler(e)}>login</button>
        </form>
    );
}

export default LoginApp;