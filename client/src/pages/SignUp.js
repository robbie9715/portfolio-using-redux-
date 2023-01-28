import userEvent from "@testing-library/user-event";
import { useState } from "react";
import imglog from "../assets/icons/figma/imglog.svg"
import '../assets/scss/SignUp.scss'
import {IoIosContact} from 'react-icons/io'
import {BsFillKeyFill} from 'react-icons/bs'
import { Link } from "react-router-dom";
import { getSignup } from "../redux/actions";
import { Form, Button } from "react-bootstrap"
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SIGNUP_SUCCESS } from "../redux/constants";

function SignUp(){

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [Rpassword, setRpassword] = useState("")
const dispatch = useDispatch();
const navigate = useNavigate();



const handleSubmit = (e) => {
    e.preventDefault();
    if(password===Rpassword && email!="" && password!=""){
        dispatch(
        {
            type: SIGNUP_SUCCESS,
            payload: {email,
                    password}
        }
        );
        navigate("/login");
    }else{
        alert("check your password.")
    }
};

    return(
        <div className="SignUp">
            <div className="Log-content" >      
             <Form className="mainForm" onSubmit={handleSubmit}>

                <div className="tb">
                    <div className="icon ">
                    <IoIosContact/>
                    </div>
                    <input 
                        type="email" 
                        className="textfield" 
                        placeholder="Enter your UserName"
                        value={email} 
                        onChange={e=>setEmail(e.target.value)}
                    />
                    {/* <img className="Subbtn1" src={submite}  alt="aaa"></img> */}
                    {/* <img className="Subbtn1" src={submite} onClick={reset} alt="aaa"></img> */}
                </div>
                <div className="tb">
                    <div className="icon ">
                        <BsFillKeyFill/>
                        </div>
                        <input 
                            type="password" 
                            className="textfield" 
                            placeholder="Enter your Password"
                            value={password} 
                            onChange={e=>setPassword(e.target.value)}
                        />
                        {/* <img className="Subbtn1" src={submite}  alt="aaa"></img> */}
                        {/* <img className="Subbtn1" src={submite} onClick={reset} alt="aaa"></img> */}
                </div>
                <div className="tb">
                    <div className="icon ">
                        <BsFillKeyFill/>
                        </div>
                        <input 
                            type="password" 
                            className="textfield" 
                            placeholder=" confirm Password"
                            value={Rpassword} 
                            onChange={e=>setRpassword(e.target.value)}
                        />
                        {/* <img className="Subbtn1" src={submite}  alt="aaa"></img> */}
                        {/* <img className="Subbtn1" src={submite} onClick={reset} alt="aaa"></img> */}
                </div>
                <Button className= "submitbtn" type="submit">
                    SIGN UP
                </Button>
            </Form>
            </div>  
            <div className="Logimg">
                <img className="imglog" src={imglog} alt="img"/>
            </div>    
              
        </div>

    )
}
export default SignUp