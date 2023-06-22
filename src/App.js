import './App.css';
import Rounting from './Config/Rounting';
 import 'bootstrap/dist/css/bootstrap.min.css';
import "./../src/Assets/css/style.css"
  // import "./../src/Assets/css/bootstrap.min.css"
import "./../src/Assets/css/animate.min.css"
 import "./../src/Assets/css/default.css"
import "./../src/Assets/css/jquery.fancybox.min.css"
import "./../src/Assets/css/swiper-bundle.css"
import "./../src/Assets/css/meanmenu.css"
import { useEffect } from 'react';


const App=()=>{


  // useEffect(() => {
  //   if (location.pathname === '/') {
  //     window.scrollTo(0, 0);
  //   }
  // }, [location]);

  useEffect(() => { 
    console.log("hell")
      // window.onload = ()=> window.scrollTo(0,0)
      window.history.scrollRestoration ="manual"
  }, []);
  return (
    <div className="App">
     <Rounting/>
    </div>
  );
}

export default App;
