import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { 
  // Route, 
  Switch } from "react-router-dom";
// import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

import homePagePicture from './images/homePage.jpg';

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
    
      <div>
        <img className='homePageImg' src={homePagePicture} alt='homePagePicture' ></img>
      </div>
      
      {isLoaded && (
        <Switch>
          {/* <Route path="/signup">
            <SignupFormPage />
          </Route> */}
        </Switch>
      )}

      
    </div>
  );
}

export default App;