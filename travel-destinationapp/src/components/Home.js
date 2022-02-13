import Footers from "./Footer";
import Header from "./Header";
import Tours from "./Tours";
import data from '../data.json';
 
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