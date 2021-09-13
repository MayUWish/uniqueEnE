import toAddImg from '../../images/images.jpg';
const Listing = ({ listing}) => {

    return (
        <div className='eachListing'>
            <div className='img'>
                <img className='toAddImg' src={toAddImg} alt='toAddImg' ></img>
            </div>
            <div className='intro'>
                <p>{listing?.title}</p>
                <p>{listing?.address}, {listing?.city}</p>
                <p>{listing?.guestNum} guests, {listing?.bedroomNum} beds, {listing?.bathroomNum} baths</p>
            </div>
        
        </div>
    )

};

export default Listing;