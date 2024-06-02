import { signOut } from "firebase/auth"
import auth from "./config"
import { useNavigate } from "react-router-dom"


function Home(){

  const navigate = useNavigate()

  function logout(){
    signOut(auth).then(()=>{
    navigate("/login")
    })
  }


  return(
    <div>
      <h1>Home page</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home