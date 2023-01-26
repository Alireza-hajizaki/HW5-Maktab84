import React ,{useState} from "react";
import "./SignUp.css"
import { AiOutlineArrowRight } from "react-icons/ai";



function SignUp () {

    const[name ,setName] = useState("")
    const[last ,setLast] = useState("")
    const[email ,setEmail] = useState("")

    const clickFHandler = (value) => {
        setName(value)
    }
        
    const clickLHandler = (value) => {
       setLast(value)
    }
        
    const clickEHandler = (value) => {
        setEmail(value)
    }
       
    const clickHandler = () => {
        const obj = {firstname: name , lastName: last , emailUser: email}
        console.log(obj);
    }

    return(
        <>
            <div className="si-container">
                <div className="si-main">
                    <h1 style={{fontWeight:"900"}}>Create account</h1>
                    <p>Already have an account?<a href="#">sign in</a></p>
                    <input type="text" onChange={(e) =>clickFHandler(e.target.value)} className="si-input" placeholder="Firstname"/>
                    <input type="text" onChange={(e) =>clickLHandler(e.target.value)} className="si-input" placeholder="Lastname"/>
                    <input type="text" onChange={(e) =>clickEHandler(e.target.value)} className="si-input" placeholder="E-mail"/>
                    <button className="si-btn" onClick={clickHandler}>Sign up<AiOutlineArrowRight/> </button>
                    <div className="si-footer">
                        <input type={"checkbox"} />
                        <p>I have read and agree to the<a href="#">Terms of Service</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignUp