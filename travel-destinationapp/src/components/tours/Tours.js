import '../../App.css';


function Tours(props) {
    return (
        <>
            {props.data.map(city => {
                return (<div className='row'>
                    <br/>
                   <br/>
                   <div className='column'>
                    <h3 className="">City : {city.name}</h3>
                    <img className="App-logo" src={city.image} alt ={city.name}></img>
                    </div>
                   <br/>
                   <br/>
                </div>); 
            })}
        </>
    );

}

export default Tours;