import "./App.css";
import routes from "./Routes";
import { Routes,Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
      {
         routes.map((route,index)=>

          <Route key={index} path={route.path} element={route.element}/>

         )

      }
      </Routes>
    </>
  );
}

export default App;
