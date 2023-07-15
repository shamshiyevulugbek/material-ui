import React from "react"
import { Routes,Route} from "react-router-dom";
import {Home} from "./pages/home"
import {Login} from "./pages/login"
import {Signup} from "./pages/signup"
import {Quiz} from "./pages/quiz"
const App: React.FC = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
      </Routes>
    </div>
  );
}
export default App;
