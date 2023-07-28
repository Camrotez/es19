import { useState } from "react"

function Login({login}){
    const [username,setUsername]= useState("")
    const [password, setPassword] = useState("")
    const changeName = ((e)=>{
        const value = e.target.value
        setUsername(value)
    })
    const changePass = ((e)=>{
        const value = e.target.value
        setPassword(value)
    })

    const onLogin = (() =>{
        login({username,password})
    }) 
     const isDisable = username === "" || password === ""
    return(
        <form>
            <input type="text"  onChange={changeName}/>
            <input type="password"  onChange={changePass} />
            <button disabled={isDisable} onClick={onLogin}>Login</button>
        </form>
    )
}
export default Login


// Add a "login" button to the Login component. This button should be disabled as long as 
// the username and password inputs are empty. When clicked, the event handler attached to 
// the button should call an onLogin function passed as a prop to the Login component, passing it 
// the state.