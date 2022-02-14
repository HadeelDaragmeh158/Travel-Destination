import '../../App.css';
import Tour from './tour/Tour';
import data from '../../Data/data.json';
import { Link } from "react-router-dom";

function Tours(props) {

    return (
        <>
            {
                props.cityinf.map((city, idx) => {
                    return (
                        <div key={idx}>
                            <Link to={`/city/${city.id}`}>
                                <Tour cityinf={city} citykey={idx} />
                            </Link>
                        </div>
                    );
                }
                )}

        </>);
}

export default Tours;