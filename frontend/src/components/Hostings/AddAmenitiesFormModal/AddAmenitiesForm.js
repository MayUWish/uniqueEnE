import React, { useState } from "react";
// import * as sessionActions from "../../store/session";
import * as listingActions from "../../../store/listings";
import { useDispatch} from "react-redux";


function AddImagesForm({ listingId }) {
    const dispatch = useDispatch();


    const [url1, setUrl1] = useState("");
    const [errors, setErrors] = useState([]);
    


    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors([]);
        const newImage = {
            listingId,
            url:url1,
        }

        console.log({ newImage})

        const reset = () => {
            setUrl1('');
        }

        return dispatch(listingActions.createImageThunk(newImage))
            .then(() => {
                setErrors(['Successfully created!','If at least 5 images are added to one listing, please click outside the form to return to all your listings.']);
                reset();
                // history.push(`/hosting/${Object.keys(listings)[0]}`)
            })
            .catch(async (res) => {
                // console.log('notOK',res)
                const data = await res.json();
                // console.log('notOK', data)
                if (data && data.errors) setErrors(data.errors);
            });

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
                        value={url1}
                        onChange={(e) => setUrl1(e.target.value)}
                        placeholder='Image Url'
                    // required
                    />
                </div>
                
                <div className='listingSubmitWrapper'>
                    <button className='listingSubmitButton' type="submit">Add</button>
                </div>

            </form>

        </>
    );
}

export default AddImagesForm;