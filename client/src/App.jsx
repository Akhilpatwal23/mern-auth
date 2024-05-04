import { BrowserRouter,Route,Routes } from "react-router-dom";

import  About  from "./pages/About"
import  Signup  from "./pages/Signup"
import  SignIn from "./pages/SignIn"
import  Profile  from "./pages/Profile"
import react from 'react'
import Home from "./pages/Home";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile/>} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App