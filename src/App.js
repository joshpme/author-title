import Header from "./Header";
import Nav from "./Nav";
import {useSelector} from 'react-redux'
import Find from "./Find";

function App() {
    const findState = useSelector((state) => state.main)

    return (
        <div>
            <Header/>
            <Nav/>
            {findState.page === 'find' && <Find/>}
        </div>
    );
}

export default App;
