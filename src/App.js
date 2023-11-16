import routes from "./Routes";
import { Routes,Route } from "react-router-dom";
import "./assets/css/App.css"
import {Link} from "react-router-dom";
function App() {
  return (
    <> 

    <div className="app">
    <Link to="/" className="linkmovie"> <p>Movie</p></Link>
    <Routes>
      {
         routes.map((route,index)=>

          <Route key={index} path={route.path} element={route.element}/>

         )

      }
      </Routes>
    </div>
   
    </>
  );
}

export default App;
