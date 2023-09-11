import Header from "./Header";
import Nav from "./Nav";
import {useSelector} from 'react-redux'
import Find from "../Pages/Find";

function App() {
    const findState = useSelector((state) => state.nav)

    return (
        <div>
            <Header/>
            <Nav/>
            {findState.page === 'find' && <Find/>}
        </div>
    );
}

export default App;
