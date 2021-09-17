import toAddImg from '../../images/deFaultImg.jpeg';
import { useHistory } from 'react-router-dom';


const Listing = ({ listing}) => {
    const history = useHistory()

    const linkToDetails = () => {
        history.push(`/listings/${listing?.id}`)

    }
    
    return (
        <div className='eachListing' onClick={linkToDetails}>
         
            <img className='img' src={listing.Images ? (listing.Images[0] ? listing.Images[0].url : toAddImg) : toAddImg} alt='listingImage' ></img>
            
            <div className='intro'>
                <p>{listing?.title}</p>
                <p>{listing?.address}, {listing?.city}</p>
                <p>{listing?.guestNum} guests, {listing?.bedroomNum} beds, {listing?.bathroomNum} baths</p>
                
            </div>
        
        </div>
    )

};

export default Listing;