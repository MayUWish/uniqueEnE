import toAddImg from '../../images/deFaultImg.jpeg';
import { useHistory } from 'react-router-dom';


const Listing = ({ listing}) => {
    const history = useHistory()

    const linkToDetails = () => {
        history.push(`/listings/${listing?.id}`)

    }
    let totalRating = 0;
    let numberOfRating = listing?.Reviews?.length;
    listing?.Reviews?.forEach(({ rating }) => totalRating += Number(rating));
    let averageRating = 0;
    if (numberOfRating){
        averageRating = (totalRating / numberOfRating).toFixed(1);
    }

    
    return (
        <div className='eachListing' onClick={linkToDetails}>
         
            <img className='img' src={listing.Images ? (listing.Images[0] ? listing.Images[0].url : toAddImg) : toAddImg} alt='listingImage' ></img>
            
            <div className='intro'>
                <h3>{(listing?.title.length > 50) ? listing.title.slice(0, 50)+`...` : listing.title}</h3>
                <p style={{ marginLeft: '2%' }}> {listing?.city}, {listing?.state}, {listing?.country}</p>
                <p style={{ marginLeft: '2%' }}>{listing?.guestNum} guests, {listing?.bedroomNum} bedrooms, {Number(listing?.twinBedNum) + Number(listing?.queenBedNum) + Number(listing?.kingBedNum) + Number(listing?.sofaBedNum)} beds, {listing?.bathroomNum} baths</p>
                <h3>{numberOfRating || 0} Reviews(<i className="fas fa-star" />{averageRating || 'None'}) </h3>
                <h3 style={{ marginRight: '5%', textAlign:'end' }}>{listing?.price}/night</h3>
                
            </div>
        
        </div>
    )

};

export default Listing;