import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css'

import { Modal } from '../../context/Modal';
import SignupForm from '../SignupFormModal/SignupForm.js'


function LoginForm() {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
    };
    
    const demonUser=(e)=>{
        e.preventDefault();
        return dispatch(sessionActions.login({ credential:'Demo-lition', password:'password' })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );

    }

    return (
        <>  
            
            <form className='loginForm' onSubmit={handleSubmit}>
                <ul className='error'>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <div className='loginInputWrapper'>
                    <label> 
                    Username or Email
                    
                    <input
                        className='loginInput'
                        type="text"
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        // required
                    />
                    </label>
                </div>
                <div className='loginInputWrapper'>
                    <label>
                        Password
                        <input
                            className='loginInput'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            // required
                        />
                    </label>
                </div>
                <div className='loginSubmitWrapper'>
                    <button className='loginSubmitButton' type="submit">Login</button>
                    <button className='DemoButton' type="button" onClick={demonUser}>Demo</button>

                </div>
                    
            </form>
            
            <div className='signupWrapper'>
                <span>Don't have an account?</span>
                <button className='signupInLogin' onClick={() => setShowModal(true)}>Sign up</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <SignupForm />
                    </Modal>
                )}
            </div>
        </>
    );
}

export default LoginForm;