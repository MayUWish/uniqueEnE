import { useDispatch} from "react-redux";
import { useHistory} from 'react-router-dom';

import joshuaTreeImg from '../../images/joshuaTree.jpeg';
import { searchByLocationActionThunk} from "../../store/searchByLocation";



function LinkToLocation() {
    const dispatch = useDispatch();
    const history = useHistory();

    const joshuaTreeSearch =() =>{
        dispatch(searchByLocationActionThunk('Joshua Tree'));
        history.push('/search');


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