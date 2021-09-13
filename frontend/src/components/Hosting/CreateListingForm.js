import React, { useState } from "react";
// import * as sessionActions from "../../store/session";
import * as listingActions from "../../store/listings";
import { useDispatch, useSelector } from "react-redux";
import './CreateListingForm.css'

import { useHistory } from "react-router-dom";

function CreateListingForm() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const listings = useSelector(state => state.listings);
    const history = useHistory()

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);

    const [guestNum, setGuestNum] = useState(1);
    const [bedroomNum, setBedroomNum] = useState(0);
    const [bathroomNum, setBathroomNum] = useState(0);
    const [twinBedNum, setTwinBedNum] = useState(0);
    const [queenBedNum, setQueenBedNum] = useState(0);
    const [kingBedNum, setKingBedNum] = useState(0);
    const [sofaBedNum, setSofaBedNum] = useState(0);

    const [enhancedClean, setEnhancedClean] = useState('false');
    const [selfCheckin, setSelfCheckin] = useState('false');

    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("California");
    const [country, setCountry] = useState("US");

    const [errors, setErrors] = useState([]);



    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setErrors([]);
        const newListing ={
            userId: sessionUser.id,
            title,
            description,
            price,
            guestNum,
            bathroomNum,
            bedroomNum,
            twinBedNum,
            queenBedNum,
            kingBedNum,
            sofaBedNum,
            enhancedClean,
            selfCheckin,
            address,
            city,
            state,
            country,
            // !! Need to update latitude and longitude when using google map API
            latitude: 90.00000000, 
            longitude: 180.000000

        }

        console.log(newListing)
        return dispatch(listingActions.createListingThunk(newListing))
            .then(()=>{
                setErrors(['Successfully created! Please click outside the form to return to all your listings.']);
                // history.push(`/hosting/${Object.keys(listings)[0]}`)
            })
            .catch(async (res) => {
                // console.log('notOK',res)
                const data = await res.json();
                // console.log('notOK', data)
                if (data && data.errors) setErrors(data.errors);
            });
        
        // try{
        //     const res = await dispatch(listingActions.createListingThunk(newListing))

        //     const data = await res.json();
        //     history.push(`/hosting/${data.listing.id}`);

        // }catch(err){
        //     if (err && err.errors) setErrors(err.errors)
        // }
                  
    };


    return (
        <>  
            {/* <button onClick={() => history.push(`/hosting/${Object.keys(listings)[Object.keys(listings).length - 1]}`)}>X</button> */}
            <form className='listingForm' onSubmit={handleSubmit}>
                <ul className='error'>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <div className='listingInputWrapper'>
                        <input
                            className='listingInput'
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder = 'Title'
                        // required
                        />                   
                </div>
                <div className='listingInputWrapper'>
                    
                        <textarea
                            // className='listingInput'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder='Describe your spots...'
                            rows='30'
                        // required
                        />                
                </div>
                

                <div className='numWrapper' >
                    <div className='listingInputWrapper'>
                        <label>
                            Price per night
                            <input
                                className='numInput'
                                type="number"
                                step="0.01"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            // required
                            />
                        </label>
                </div>

                <div className='listingInputWrapper'>
                    <label>
                        Guests              
                    <input
                        className='numInput'
                        type="number"
                        value={guestNum}
                        onChange={(e) => setGuestNum(e.target.value)}
                        placeholder=''
                    // required
                    />
                    </label>
                </div>

                <div className='listingInputWrapper'>
                    <label>
                        Bedrooms
                        <input
                            className='numInput'
                            type="number"
                            value={bedroomNum}
                            onChange={(e) => setBedroomNum(e.target.value)}
                        // required
                        />
                    </label>
                </div>
                <div className='listingInputWrapper'>
                    <label>
                        Bathrooms
                        <input
                            className='numInput'
                            type="number"
                            value={bathroomNum}
                            onChange={(e) => setBathroomNum(e.target.value)}
                        // required
                        />
                    </label>
                </div>

                </div>

                <div className='numWrapper'>
                <div className='listingInputWrapper'>
                    <label>
                        TwinBeds
                        <input
                           className='numInput'
                            type="number"
                            value={twinBedNum}
                            onChange={(e) => setTwinBedNum(e.target.value)}
                        // required
                        />
                    </label>
                </div>
                <div className='listingInputWrapper'>
                    <label>
                        QueenBeds
                        <input
                            className='numInput'
                            type="number"
                            value={queenBedNum}
                            onChange={(e) => setQueenBedNum(e.target.value)}
                        // required
                        />
                    </label>
                </div>
                <div className='listingInputWrapper'>
                    <label>
                        KingBeds
                        <input
                            className='numInput'
                            type="number"
                            value={kingBedNum}
                            onChange={(e) => setKingBedNum(e.target.value)}
                        // required
                        />
                    </label>
                </div>
                <div className='listingInputWrapper'>
                    <label>
                        SofaBeds
                        <input
                            className='numInput'
                            type="number"
                            value={sofaBedNum}
                            onChange={(e) => setSofaBedNum(e.target.value)}
                        // required
                        />
                    </label>
                </div>
                </div>
                <div className='cleanAndCheckinWrapper'>
                <div className='listingInputWrapper'>
                    <label>
                        Enhanced Clean
                        <select
                            className='selectInput'
                            value={enhancedClean}
                            onChange={(e) => setEnhancedClean(e.target.value)}
                        // required
                        >
                                <option key='enhancedCleanTrue' >true</option>
                                <option key='enhancedCleanFalse'>false</option>
                        </select>                    
                    </label>
                </div>

                <div className='listingInputWrapper'>
                    <label>
                        Self Checkin
                        <select
                            className='selectInput'
                            value={selfCheckin}
                            onChange={(e) => setSelfCheckin(e.target.value)}
                        // required
                        >
                            <option key='selfCheckinTrue'>true</option>
                            <option key='selfCheckinFalse'>false</option>
                        </select>
                    </label>
                </div>
                </div>

                <div className='listingInputWrapper'>
                    <input
                        className='listingInput'
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder='Address'
                    // required
                    />
                </div>

                <div className='listingInputWrapper'>
                    <input
                        className='listingInput'
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder='City'
                    // required
                    />
                </div>

                <div className='listingInputWrapper'>
                    <input
                        className='listingInput'
                        type="text"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        placeholder='State'
                    // required
                    />
                </div>

                <div className='listingInputWrapper'>
                    <input
                        className='listingInput'
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder='Country'
                    // required
                    />
                </div>

                <div className='listingSubmitWrapper'>
                    <button className='listingSubmitButton' type="submit">Create</button>
                </div>

            </form>

        </>
    );
}

export default CreateListingForm;