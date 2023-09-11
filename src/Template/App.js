import Header from "./Header";
import Nav from "./Nav";
import {useSelector} from 'react-redux'
import Find from "../Pages/Find";
import Title from "../Pages/Title";
import Authors from "../Pages/Authors";
import Organisations from "../Pages/Organisations";
import Affiliations from "../Pages/Affiliations";
import Export from "../Pages/Export";

function App() {
    const findState = useSelector((state) => state.nav)

    return (
        <div>
            <Header/>
            <Nav/>
            {findState.page === 'find' && <Find/>}
            {findState.page === 'title' && <Title />}
            {findState.page === 'authors' && <Authors />}
            {findState.page === 'organisations' && <Organisations />}
            {findState.page === 'affiliations' && <Affiliations />}
            {findState.page === 'export' && <Export />}
        </div>
    );
}

export default App;
