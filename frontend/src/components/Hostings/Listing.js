import toAddImg from '../../images/deFaultImg.jpeg'
import AddImagesFormModal from "./AddImagesFormModal";
import AddAmenitiesFormModal from "./AddAmenitiesFormModal";
import {NavLink} from 'react-router-dom';

const Listing = ({ listing}) => {

    
    
    return (
        <div className='eachListing'>
         
            <img className='img' src={listing.Images ? (listing.Images[0] ? listing.Images[0].url : toAddImg) : toAddImg} alt='listingImage' ></img>
            
            <div className='intro'>
                <NavLink className='button' 
                to={`/hosting/${listing.id}`} 
                style={{ textDecoration: 'none', paddingBottom:'1.5%',padding:'1%' }}>
                    {`- Preview & Edit -`}
                </NavLink>

                <h3>{(listing?.title.length > 30) ? listing?.title.slice(0,30)+`...`:listing?.title}</h3>
                <h4 style={{marginLeft:'2%'}}>{listing?.address}, {listing?.city}</h4>
                <h4 style={{ marginLeft: '2%' }}>{listing?.guestNum} guests, {Number(listing?.twinBedNum) + Number(listing?.queenBedNum) + Number(listing?.kingBedNum) + Number(listing?.sofaBedNum)} beds, {listing?.bathroomNum} baths</h4>
                
                
                

                <div style={{ display: 'flex'}}>
                    <AddImagesFormModal listingId={listing.id}/>
                    <AddAmenitiesFormModal listingId={listing.id} />                  
                </div>
                
            </div>

            
        
        </div>
    )

};

export default Listing;