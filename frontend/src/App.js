import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { 
  NavLink,
  Route, 
  Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

import CreateListingFormModal from "./components/CreateListingFromModal";
import EditListingFormModal from "./components/EditListingFromModal";
import DeleteListingFromModal from "./components/DeleteListingFromModal";


import HostingsCollection from "./components/Hostings";

import Hosting from "./components/Hosting";
import Images from "./components/Hosting/Images";
import AddImagesFormModal from "./components/Hostings/AddImagesFormModal";
import AddAmenitiesFormModal from "./components/Hostings/AddAmenitiesFormModal";
import DeleteAmenitiesFormModal from "./components/DeleteAmenitiesFormModal";
import DeleteImagesLink from "./components/DeleteImagesLink";
import DeleteImagesPage from "./components/DeleteImagesPage";

import PublicListing from "./components/PublicListing";
import ImagesOfPublicListing from "./components/PublicListing/ImagesPublic";
import PublicListings from "./components/PublicListings";
import PublicListingsWithLocationFilter from "./components/PublicListingsWithLocationFilter";
import BookingsCollection from "./components/Bookings";
import Footer from "./components/Footer";

import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import homePic1 from './images/homePic1.jpeg';
import homePic2 from './images/homePic2.jpeg';
import homePic3 from './images/homePic3.jpeg';
import homePic4 from './images/homePic4.png';
import homePic5 from './images/homePic5.jpeg';
import homePic6 from './images/homePic6.jpeg';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  // after first render only, 'extract' cookie token and set state with session user'
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div >
      <Navigation isLoaded={isLoaded} />
      
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <div>
              <Carousel infiniteLoop={true} autoPlay={true} interval={2800} showArrows={false} showIndicators={true} showStatus={true} showThumbs={false}>
                <div>
                  <img className="homeImage" alt="homeImage1" src={homePic1} />
                </div>
                <div>
                  <img className="homeImage" alt="homeImage2" src={homePic2} />
                </div>
                <div>
                  <img className="homeImage" alt="homeImage3" src={homePic3} />
                </div>
                <div>
                  <img className="homeImage" alt="homeImage4" src={homePic4} />
                </div>
                <div>
                  <img className="homeImage" alt="homeImage5" src={homePic5} />
                </div>
                <div>
                  <img className="homeImage" alt="homeImage6" src={homePic6} />
                </div>
                
              </Carousel>

            </div>            
          </Route>

          {/* switch to host mode */}
          {/* host role: all listings that current loggin user is hosting */}
          <Route exact path="/hosting">
            <CreateListingFormModal />
            <HostingsCollection />
          </Route>

          {/* host role: sepcific listing that current loggin user is hosting */}
          <Route exact path={`/hosting/:listingId`}>
            <div style={{ display: 'flex',flexWrap:'wrap' }}>
              <NavLink className='button' to={`/hosting`} style={{ textDecoration: 'none',   height:'50%' }}> {`< To your listings`}</NavLink>
              <EditListingFormModal />
              <DeleteListingFromModal />
              <AddImagesFormModal  />
              <DeleteImagesLink />
              
              <AddAmenitiesFormModal />
              <DeleteAmenitiesFormModal />
             

            </div>
            <Hosting />
          </Route>
          
          {/* host role: sepcific listing's images view that current loggin user is hosting */}
          <Route exact path={`/hosting/:listingId/images`}>
            <Images />
          </Route>
          
          {/* host role: sepcific listing's images view to delete, that current loggin user is hosting */}
          <Route exact path={`/hosting/:listingId/images/delete`}>
            <DeleteImagesPage />
          </Route>

          {/* public: all listings  */}
          <Route exact path={`/listings`}>
            <PublicListings />
          </Route>

          {/* public: all listings with location/city filtered  */}
          <Route exact path={`/listings/search/:location`}>
            <PublicListingsWithLocationFilter />
          </Route>

          {/* public: sepcific listing  */}
          <Route exact path={`/listings/:listingId`}>
            <div style={{ display: 'flex' }}>
              <NavLink className='button' to={`/listings`} style={{ textDecoration: 'none', width: '15%' }}> {`< To all unique stays`}</NavLink>
            </div>
            <PublicListing />
          </Route>

          {/* public: sepcific listing's images view */}
          <Route exact path={`/listings/:listingId/images`}>
            <ImagesOfPublicListing />
          </Route>

          {/* logged-in: bookings as travellers */}
          <Route exact path={`/bookings`}>
            <BookingsCollection />
          </Route>


        </Switch>
      )}

      <Footer />

      
    </div>
  );
}

export default App;