// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from "react-router-dom";
import { Todoes } from "./components/AllTodoes";
import { Basepage } from "./components/BasePage";
import { Dropdwown } from "./components/Dropsown";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Basepage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element = {<Signup/>}/>
        <Route path="/todos" element = {<Todoes/>}/>
        <Route path="/dropdown" element = {<Dropdwown/>}/>
      </Routes>
    </div>
  );
}

export default App;
