import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { 
  NavLink,
  Route, 
  Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

import homePagePicture from './images/homePage.jpg';

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
              <img className='homePageImg' src={homePagePicture} alt='homePagePicture' ></img>
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
            <div style={{ display: 'flex' }}>
              <NavLink className='button' to={`/hosting`} style={{ textDecoration: 'none',  width: '125px' }}> {`To your listings`}</NavLink>
              <EditListingFormModal />
              <DeleteListingFromModal />
              <AddImagesFormModal  />

              <DeleteImagesLink />
              
              <AddAmenitiesFormModal />

              {/* <DeleteAmenitiesFormModal /> */}

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

          

          {/* public: sepcific listing  */}
          <Route exact path={`/listings/:listingId`}>
            <div style={{ display: 'flex' }}>
              <NavLink className='button' to={`/listings`} style={{ textDecoration: 'none', width: '125px' }}> {`To all listings`}</NavLink>
            </div>
            <PublicListing />
          </Route>

          {/* public: sepcific listing's images view */}
          <Route exact path={`/listings/:listingId/images`}>
            <ImagesOfPublicListing />
          </Route>

          {/* public: all listings  */}
          <Route exact path={`/listings`}>
            <PublicListings />
          </Route>


        </Switch>
      )}

      
    </div>
  );
}

export default App;