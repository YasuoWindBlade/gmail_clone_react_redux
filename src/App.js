import "./App.css";
import Header from "./components/Header";
import Main from "./components/main/Main";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Writte from "./components/Writte";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Main />
      </div>
      <Writte />
    </Router>
  );
}

export default App;
