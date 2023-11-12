import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

const Routes=[

{
   path: "/",
   element:<Home/>,

},
{
    path: "/:id",
    element:<MovieDetail/>,
 
 },



]


export default Routes;
