import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink,  useParams, useHistory } from 'react-router-dom';

import * as listingActions from "../../store/listings";
import './DeleteImages.css'



const DeleteImages = () => {
    const { listingId } = useParams();
    const dispatch = useDispatch();
    const history =useHistory();
    const sessionUser = useSelector(state => state.session.user);
    // all listings for current logged-in user
    const listings = useSelector(state => state.hosting);



    //when refresh, the logged-in user has hosting state
    useEffect(() => {
        sessionUser && dispatch(listingActions.viewListingThunk(sessionUser.id));
    }, [dispatch, sessionUser]);


    let currentListing;
    listings ? currentListing = listings[listingId] : currentListing = {};


    // edit listing sent out message 'No Authorization'. Thus here no need to send another message
    if (!sessionUser || +sessionUser.id !== +currentListing?.userId) { return null };

    const deleteImageButton = (e)=>{
        dispatch(listingActions.deleteImageThunk(e.target.value));
        history.push(`/hosting/${listingId}`)

    }
    return (

        <div style={{ margin: 'auto 3%' }}  >
            <div className='imagesToListing'  >
                <NavLink 
                style={{ display: 'block', textDecoration: 'none', 
                border: '1px solid lightgray', fontWeight: 'bolder' }} 
                to={`/hosting/${listingId}`}
                    key={`backToListing${listingId}`}
                >
                    {`< Back to listing`} 
                </NavLink>
            </div>

            <div className='AllImages'>
                {currentListing?.Images.map(({ url, id }, index) => (
                <div key={`wrapper${id}`} 
                style={{display:'flex',alignItems:'center'}}>
                    <img 
                        key={`hostingImg${id}`} src={url} 
                        alt='listingImage'
                        style={{width: "80%"}}
                    ></img>  

                    <button className='button' 
                    style={{ display: 'inline', 
                    color: '#f0a04b', width: "20%",height:'20%'} }
                    key={`hostingDeleteImgButton${id}`} 
                    onClick={deleteImageButton} 
                    value={id}>
                    Delete
                    </button>
                

                 </div>
                ))}
            </div>
            




        </div>

    )

};

export default DeleteImages;