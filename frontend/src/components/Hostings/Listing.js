import toAddImg from '../../images/images.jpg';
import AddImagesFormModal from "./AddImagesFormModal";
const Listing = ({ listing}) => {

    // const addImages = ()=>{
    //     // to get the add img form
    // }

    return (
        <div className='eachListing'>
            <div className='img'>
                <img className='toAddImg' src={toAddImg} alt='toAddImg' ></img>
            </div>
            <div className='intro'>
                <p>{listing?.title}</p>
                <p>{listing?.address}, {listing?.city}</p>
                <p>{listing?.guestNum} guests, {listing?.bedroomNum} beds, {listing?.bathroomNum} baths</p>
                {/* <button onClick={addImages}>Add Images</button> */}
                <AddImagesFormModal />
            </div>
        
        </div>
    )

};

export default Listing;