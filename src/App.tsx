import React from "react"
import { Routes,Route} from "react-router-dom";
import {Home} from "./pages/home"
import {Login} from "./pages/login"
import {Signup} from "./pages/signup"
const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}
export default App;
