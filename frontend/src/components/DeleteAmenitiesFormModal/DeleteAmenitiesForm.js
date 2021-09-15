import React, { useState } from "react";
// import * as sessionActions from "../../store/session";
import * as listingActions from "../../store/listings";
import { useDispatch, useSelector} from "react-redux";
import './DeleteAmenitiesForm.css';
import { useParams } from "react-router-dom";


function DeleteAmenitiesForm({ listingId }) {
    // inorder to use at specific listing page as well
    let url = useParams();
    if (!listingId) {
        
        listingId = url.listingId;
    }
    
    // const amenitiesState = useSelector(state=>state.hosting.ListingAmenities) // array of object

    const dispatch = useDispatch();
    const [amenityId, setAmenityId] = useState(0);
    const [errors, setErrors] = useState([]);

    // const toDeleteAmenityId = amenitiesState?.filter((amenity) => +amenity.amenityId === +amenityId).id
    
    // console.log(amenitiesState)
    
    // amenitiesPredefined's index is amentityId, predefined amenity table in db
    const amenitiesPredefined = [
                        'Wifi',
                        'TV',

                        'Air conditioning',
                        'Heating',

                        'Cooking basics',

                        'Free parking on premises',

                        'Essentials',

                        'Washer',
                        'Dryer',
                        'Smoke Alarm',
                        'Carbon monoxide alarm'
                    ]
    


    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors([]);

        const toDeleteAmenity = {

            listingId,
            amenityId,
        }



        // const reset = () => {
        //     setAmenityId(0);
        // }

  

        // return dispatch(listingActions.deleteAmenityThunk(toDeleteAmenityId ))
        //     .then(() => {
        //         setErrors(['Successfully deleted!']);
        //         // reset();
                
        //     })
        //     .catch(async (res) => {
        //         // console.log('notOK',res)
        //         const data = await res.json();
        //         // console.log('notOK', data)
        //         if (data && data.errors) setErrors(data.errors);
        //     });

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
                        //  amenitiesPredefined's index is amentityId, predefined amenity table in db
                        onChange={(e) => setAmenityId(+e.target.value.split('.')[0])}>
                        <option key='0'>You can delete multiple times, but one at a time ----- </option>
                        {amenitiesPredefined.map((amenity,index)=>(
                            <option key={index + 1} >{index+1}.{amenity}</option>)
                            )
                        }
                    </select>
                
                 
                </div>
                
                <div className='listingSubmitWrapper'>
                    <button className='listingSubmitButton' type="submit">Delete</button>
                </div>

            </form>

        </>
    );
}

export default DeleteAmenitiesForm;