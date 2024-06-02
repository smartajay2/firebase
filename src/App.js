import{BrowserRouter,Link,Routes,Route} from "react-router-dom"
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";

function App() {
  return (
 
    <BrowserRouter>
    <nav>
        <Link to="/Login">Login</Link>
        <Link to="/Signup">Signup</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
