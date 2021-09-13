import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { 
  Route, 
  Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

import homePagePicture from './images/homePage.jpg';

import CreateListingFormModal from "./components/CreateListingFromModal";

import HostingsCollection from "./components/Hostings";

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

          <Route exact path="/hosting">
            <CreateListingFormModal />
            <HostingsCollection />
          </Route>
        </Switch>
      )}

      
    </div>
  );
}

export default App;