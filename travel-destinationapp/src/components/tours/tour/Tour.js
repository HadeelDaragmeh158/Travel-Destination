import './tour.css';

function Tour(props) {
    return (
        <>
           
                
                    <div key={props.cityinf.id}  className="container">
                       
                        <div className="container">
                                <img className="App-logo" src={props.cityinf.image} alt={props.cityinf.name}></img>
        
                            <div className="overlay">
                                <h3 className="text"> {props.cityinf.name}</h3>
                            </div>
                        </div>
                      
                    </div>
        
              
            
        </>
    );
} export default Tour;