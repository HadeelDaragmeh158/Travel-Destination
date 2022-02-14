import Footers from "../Footer/Footer";
import Header from "../header/Header";
import Tours from "../tours/Tours";
import data from '../../Data/data.json';
 
function Home (props){
    return(
<>
<Header />
<Tours data={data}/>
<Footers/>

</>
    );
}
export default Home;