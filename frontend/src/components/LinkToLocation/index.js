import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

import joshuaTreeImg from '../../images/joshuaTree.jpeg'


function LinkToLocation() {
    const { listingId } = useParams();
    const dispatch = useDispatch();

    const joshuaTreeSearch =() =>{
        
    }
    return (
        <div>
            <div 
            onClick={joshuaTreeSearch}
            style={{ width: '10%' }}>
                <span style={{textAlign:'center',display:'block'}}>Joshua Tree</span>
                <img src={joshuaTreeImg} alt='joshuaTree' style={{ width: '100%' }}></img>
            
            </div>
        </div>
    );
}

export default LinkToLocation;