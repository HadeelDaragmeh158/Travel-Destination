import Footers from "../Footer/Footer";
import Header from "../header/Header";
import Tours from "../tours/Tours";
import data from '../../Data/data.json';


function Home(props) {
    return (
        <>
        <main >
        <Header/>
        <Tours cityinf={data} />
        <Footers />
            </main>
        </>
    );
}
export default Home;