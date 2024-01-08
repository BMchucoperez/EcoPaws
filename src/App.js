import {Routes, Route} from "react-router";
import Landing from "./components/Landing/Landing";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import Navbar from "./components/Nav/Nav";

function App(){

    const location = useLocation()
    const [navbarVisible, setNavbarVisible] = useState(true);

    useEffect(() => {
        if(location.pathname==='*'){
        setNavbarVisible(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navbarVisible]);

    return(
        <div>
            {navbarVisible && <Navbar />}
            <Routes>
                <Route path="/" element={<Landing/>}/>
            </Routes>
        </div> 
    );
};

export default App;