import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

import { Modal } from '../../context/Modal';
import LoginForm from '../LoginFormModal/LoginForm.js'

function SignupForm() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const [showModal, setShowModal] = useState(false);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Confirm Password must be the same as the Password.']);
    };

    const demonUser = (e) => {
        e.preventDefault();
        return dispatch(sessionActions.login({ credential: 'Demo-lition', password: 'password' })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );

    }

    return (
        <>
            <form className='signupForm' onSubmit={handleSubmit}>
                <ul className='error'>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div className='signupInputWrapper'>
                    <label>
                        Username
                        <input
                            className='signupInput'
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            // required
                        />
                    </label>
                </div>
                <div className='signupInputWrapper'>
                    <label>
                        Email
                        <input
                            className='signupInput'
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        // required
                        />
                    </label>
                </div>
                <div className='signupInputWrapper'>
                    <label>
                        Password
                        <input
                            className='signupInput'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            // required
                        />
                    </label>
                </div>
                <div className='lsignupInputWrapper'>
                    <label>
                        Confirm Password
                        <input
                            className='signupInput'
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            // required
                        />
                    </label>
                </div>
                <div className='signupSubmitWrapper'>
                    <button className='signupSubmitButton' type="submit">SignUp</button>
                    <button className='DemoButton' type="button" onClick={demonUser}>DemoUser</button>
                </div>
            </form>
            <div className='loginWrapper'>
                    <span>Already have an account?</span>
                <button className='loginInSignup' onClick={() => setShowModal(true)}>Log in</button>
                    {showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                            <LoginForm />
                        </Modal>
                    )}
            </div>
       </>
    );
}

export default SignupForm;