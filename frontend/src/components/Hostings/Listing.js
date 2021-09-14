import toAddImg from '../../images/toAddImg.jpg'
import AddImagesFormModal from "./AddImagesFormModal";
import AddAmenitiesFormModal from "./AddAmenitiesFormModal";
import {Route, NavLink} from 'react-router-dom';

const Listing = ({ listing}) => {

    
    
    return (
        <div className='eachListing'>
         
            <img className='img' src={listing.Images ? (listing.Images[0] ? listing.Images[0].url : toAddImg) : toAddImg} alt='listingImage' ></img>
            
            <div className='intro'>
                <p>{listing?.title}</p>
                <p>{listing?.address}, {listing?.city}</p>
                <p>{listing?.guestNum} guests, {listing?.bedroomNum} beds, {listing?.bathroomNum} baths</p>
                {/* <button onClick={addImages}>Add Images</button> */}
                <div style={{ display: 'flex', flexFlow:'column'}}>
                <AddImagesFormModal listingId={listing.id}/>
                <AddAmenitiesFormModal listingId={listing.id} />
                
                    <NavLink className='button' to={`/hosting/${listing.id}`} style={{ textDecoration: 'none', height: '24px', width: '75px' }}>-Preview-</NavLink>
                </div>
            </div>
        
        </div>
    )

};

export default Listing;