import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './CreateListingForm.css'

function CreateListingForm({ user}) {
    const dispatch = useDispatch();
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);



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
                        Address
                        <input
                            className='loginInput'
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
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
                    <button className='loginSubmitButton' type="submit">LogIn</button>
                    

                </div>

            </form>

        </>
    );
}

export default CreateListingForm;