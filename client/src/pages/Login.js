import React from "react";
import imglog from "../assets/icons/figma/imglog.svg"
import '../assets/scss/Login.scss'
import {IoIosContact} from 'react-icons/io'
import {BsFillKeyFill} from 'react-icons/bs'
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getLogin } from '../redux/actions';
import Portfolio from "./Portfolio/Portfolio";


function Login(){

const dispatch = useDispatch();
const navigate = useNavigate();

const state = useSelector(state => state)

const [email, setEmail]=React.useState("")
const [password, setPassword]=React.useState("")

const handleSubmit = (e) => {
    e.preventDefault();
    const matched_user = state.users.filter(ele=>(ele.email===email && ele.password===password))
     if (matched_user.length !== 0){
        dispatch(getLogin());
        navigate("/Portfolio");
        }
    else{
        alert("check your email or password")
        setEmail("");
        setPassword("");
        }
    }
    
   
    return(
        <div className="Loginn">
            <div className="Logimg">
                <img className="imglog" src={imglog} alt="img"/>
            </div>    
            <div className="Log-content">
                <Form className="mainForm" onSubmit={handleSubmit}>
                    <div className="tb">
                        <div className="icon">
                        <IoIosContact/>
                        </div>
                        <input 
                            type="email" 
                            className="textfield" 
                            placeholder="Enter your UserName"
                            value={email} 
                            onChange={e=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="tb">
                        <div className="icon">
                            <BsFillKeyFill/>
                            </div>
                            <input 
                                type="password" 
                                className="textfield" 
                                placeholder="Enter your Password"
                                value={password} 
                                onChange={e=>setPassword(e.target.value)}
                            />
                    </div>
                    <Button className="submitbtn" type="submit">LOG IN</Button>
                     

                    <Link to="/SignUp" >
                        <p>New to Site? Sign up</p>
                    </Link>
                </Form>
            </div>  
        </div>

    )
}
export default Login