import routes from "./Routes";
import { Routes,Route } from "react-router-dom";
import "./assets/css/App.css"
function App() {
  return (
    <> 

    <div className="app">
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
