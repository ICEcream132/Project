// import React, {useState, useEffect} from 'react';
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart"

// function App(){

  // const [data, setData] = useState(null)

// useEffect(() => {
//   fetch('/api')
//   .then(response => response.json())
//   .then(response => setData(response.message))
// }, [])

const App = () => {
  return <Home/>
  // (
  // <p>
  //   {
  //     !data ? "Loading..." : data
  //   }
  //   </p>
  // )
};
// };
export default App;