import React, { useState } from "react";
// import * as sessionActions from "../../store/session";
import * as listingActions from "../../../store/listings";
import { useDispatch} from "react-redux";
import './AddAmenitiesForm.css';


function AddImagesForm({ listingId }) {
    const dispatch = useDispatch();
    const [amenityId, setAmenityId] = useState(0);
    const [errors, setErrors] = useState([]);
    // amenitiesPredefined's index is amentityId, predefined amenity table in db
    const amenitiesPredefined = [
                        'Wifi',
                        'TV',

                        'Air conditioning',
                        'Heating',

                        'Cooking basics',

                        'Free parking on premises',

                        'Essentials',

                        'washer',
                        'dryer',
                        'Smoke Alarm',
                        'Carbon monoxide alarm'
                    ]
    


    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors([]);
        const newAmenity = {
            listingId,
            amenityId,
        }

        console.log({ newAmenity})

        const reset = () => {
            setAmenityId('');
        }

        return dispatch(listingActions.createAmenityThunk(newAmenity))
            .then(() => {
                setErrors(['Successfully created!','Feel free to add more amentities.']);
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

                    <select 
                        className='listingInput multipleSelect' 
                        // multiple
                        onChange={(e) => setAmenityId(+e.target.value.split('.')[0])}>
                        <option key='0' disabled selected>You can add multiple times, but one at a time ----- </option>
                        {amenitiesPredefined.map((amenity,index)=>(
                            <option key={index+1} >{index+1}.{amenity}</option>)
                            )
                        }
                    </select>
                
                 
                </div>
                
                <div className='listingSubmitWrapper'>
                    <button className='listingSubmitButton' type="submit">Add</button>
                </div>

            </form>

        </>
    );
}

export default AddImagesForm;